import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { switchLang } from "../../helpers/lang";
import "./Language.scss";

function Language() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <button className="language-button" onClick={() => { switchLang(lang === "en" ? "ar" : "en"); }}>
      <div className="container">
        <p className="language-text">{t("language")}</p>
      </div>
    </button>
  );
}

export default Language;
