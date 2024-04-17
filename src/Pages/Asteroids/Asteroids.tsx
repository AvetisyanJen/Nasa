import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import './Asteroids.scss';
import { useTranslation } from "react-i18next";
import { fetchAsteroidData } from "../../Services/apiService";
import AsteroidData from "./AsteroidData";
import { Asteroid } from "../../types";

const Asteroids: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [t] = useTranslation("global");
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [asteroidData, setAsteroidData] = useState<Asteroid[]>([]);

    const onSearch = async (startDate: Date, endDate: Date) => {
        try {
            const startDayIso = startDate.toISOString().slice(0, 10);
            const endDayIso = endDate.toISOString().slice(0, 10);

            setLoading(true);
            const data = await fetchAsteroidData(startDayIso, endDayIso);
            setAsteroidData(Object.values(data));
            setLoading(false);
            setError(false);
            // console.log(asteroidData)
        } catch (error) {
            console.error(error);
            setError(true);
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
            {loading && <p className="loading">{t("nearbyAsteroid.loading")}...</p>}
            {error ? <p className="alert">{t("nearbyAsteroid.range")}</p> : <div className="content">
                <AsteroidData asteroidData={asteroidData} /> </div>}
        </div>
    )
}

export default Asteroids;
