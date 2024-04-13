import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './Asteroids.scss';
import { useTranslation } from "react-i18next";
import axios from "axios";

const Asteroids: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [t] = useTranslation("global");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setError("");
    // }, [startDate, endDate]);

    const onSearch = async (startDate: Date, endDate: Date) => {
        try {
            const oneDay = 1000 * 60 * 60 * 24;
            const rangeEnd = endDate.getTime();
            const rangeStart = startDate.getTime();
            const range = Math.ceil((rangeEnd - rangeStart) / oneDay);
            
            if (range <= 7) {
                setLoading(true);
                const startDayIso = startDate.toISOString().slice(0, 10);
                const endDayIso = endDate.toISOString().slice(0, 10);
                const api_key = 'YizyugfQ45fXCH8eJnV2U8gwZFnceLP5tDD5Ipcv';

                const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDayIso}&end_date=${endDayIso}&api_key=${api_key}`);
                const info = Object.values(response.data.near_earth_objects);
                console.log(info);
                setLoading(false);
                setError(false)
            } else {
              
                setError(true);
            }
        } catch (error) {
            console.error(error);
         
            setLoading(false);
        }
    }

    return (
        <div className="main">
            <h3>{t("nearbyAsteroid.title")}</h3>
            <h5>{t("nearbyAsteroid.info")}</h5>
            <div className="date-section">
                <span>{t("nearbyAsteroid.startDate")}:</span>
                <DatePicker
                    popperPlacement="bottom"
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    dateFormat='dd/MM/yyyy'
                    showYearDropdown
                    scrollableMonthYearDropdown />
                <span>{t("nearbyAsteroid.endDate")}:</span>
                <DatePicker
                    popperPlacement="bottom"
                    selected={endDate}
                    onChange={(date) => setEndDate(date as Date)}
                    selectsEnd
                    startDate={startDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                />
                <button className="search" onClick={() => onSearch(startDate, endDate)}>{t("nearbyAsteroid.search")}</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="alert">{t("nearbyAsteroid.range")}</p>}
        </div>
    )
}

export default Asteroids;

