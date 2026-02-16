//import react library
import * as React from "react";
import { useEffect } from "react";

//import other library
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

export default function LocalizationComponent()
{
    const { t, i18n } = useTranslation();

    function ChangeLanguageToArabic()
    {
        console.log("Current Lang = " + i18n.language);
        i18n.changeLanguage("ar");
    }

    function ChangeLanguageToEnglish()
    {
        console.log("Current Lang = " + i18n.language);
        i18n.changeLanguage("en");
    }

    function toggleLanguage(lang)
    {
        console.log("Current Lang = " + i18n.language);
        i18n.changeLanguage(lang);
    }

    


    return (

        <div dir={i18n.language=="ar"?"rtl":"ltr"}>

            <h3>Localization Component</h3>

            <h5>{t("welcomeTitle")}</h5>
            <p>{t("welcomeMessage")}</p>
            <br/>
            <br/>
            <Button variant="outlined" onClick={ChangeLanguageToArabic}>Ar</Button>
            &nbsp;&nbsp;
            <Button variant="outlined"  onClick={ChangeLanguageToEnglish}>EN</Button>
            <br/>
            <br/>
            <Button variant="outlined" onClick={()=>
            {
                toggleLanguage(i18n.language=="ar"?"en":"ar");
            }} >
                {i18n.language=="ar"?"EN":"AR"}
            </Button>

        </div>
    );
}
