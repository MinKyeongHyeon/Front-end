import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

function useLang() {
  return useContext(LanguageContext);
}

export default useLang;
