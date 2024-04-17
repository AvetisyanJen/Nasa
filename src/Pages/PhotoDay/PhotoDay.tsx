import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';
import './PhotoDay.scss';
import { fetchPhotoDay } from '../../Services/apiService';
import { PhotoDayData } from '../../types';

const PhotoDay: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [t] = useTranslation('global');
  const [photoData, setPhotoData] = useState<PhotoDayData | null>(null);

  const fetchPhoto = async (date: Date | null) => {
    try {
      const data = await fetchPhotoDay(date);
      setPhotoData(data);
    } catch (error) {
      throw new Error('Error');
    }
  }

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
      <button className="search" onClick={() => fetchPhoto(date)}>{t('dayPhoto.search')}</button>
      {photoData ? (
        <div className="content">
          <h1>{photoData.title}</h1>
          <img src={photoData.url} alt={photoData.title} />
          <a href={photoData.hdurl}>HD link of picture</a>
          <p>{photoData.explanation}</p>
        </div>
      ) : null}
    </div>
  );
}

export default PhotoDay;

