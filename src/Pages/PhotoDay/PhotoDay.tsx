import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from "react-i18next";
import "./PhotoDay.scss"
import axios from "axios";

const PhotoDay: React.FC = () => {
    const [date, setDate] = useState<Date | null>(new Date());
    const [t] = useTranslation('global');
    const [photoData, setPhotoData] = useState<Record<string, any> | null>(null);

    const api_key = 'YizyugfQ45fXCH8eJnV2U8gwZFnceLP5tDD5Ipcv';

    async function fetchPhotoDay(date: Date | null) {
        try {
            if (!date) return; // Защита от вызова fetchPhotoDay с null date
            const day = date.toISOString().slice(0, 10);
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${day}`);
            const data = response.data;
            setPhotoData(data);
        } catch (error) {
            console.error(error);
        }
    }



    console.log(photoData);

    return (
        <div className="main">
            <DatePicker
                wrapperClassName="calendar"
                popperPlacement="bottom"
                selected={date}
                onChange={(date: Date | null) => setDate(date)}
                dateFormat='dd/MM/yyyy'
                showYearDropdown
                scrollableMonthYearDropdown
            />
            <button className="search" onClick={() => { fetchPhotoDay(date) }}>{t("dayPhoto.search")}</button>
            {photoData ?
                <div className="content">
                    <h1>{photoData.title}</h1>
                    <img src={photoData.url} alt={photoData.title} />
                    <a href={photoData.hdurl}>HD link of picture</a>
                    <p>{photoData.explanation}</p>
                </div> : <div />}
        </div>
    );
}

export default PhotoDay;
