import React from "react";
import "./Header.scss"; 
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [t, i18n] = useTranslation("global");
  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }
  
  return (
    <>
<div className='top'>
<img src="./Nasaimages/logo.png" className="logo" alt="Logo" />
          <h1>{t("header.title")}</h1></div>
        <div className='lang'>
          <span onClick={() => handleLanguage("en")}>En</span>
          <span onClick={() => handleLanguage("ru")} >Ru</span>
          <span onClick={() => handleLanguage("hy")}>Hy</span>
        </div>


    </>
  )

  
  
};

export default Header;
