import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from "react-i18next";
import "./PhotoDay.scss"

const PhotoDay: React.FC = () => {
    const [date, setDate] = useState<Date | null>(new Date());
    const[t]=useTranslation('global')
    return (
        <>
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
           <button className="search" >{t("dayPhoto.search")}</button>
          </div>
        </>
      );

    }
     export default PhotoDay