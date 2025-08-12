import { useState } from "react";

export default function useLocalStorage() {
  const [myLang, setMyLang] = useState(localStorage.getItem("myLang") || "ko");

  const selectedLang = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("myLang", newLang);
    setMyLang(newLang);
  };
  return { myLang, selectedLang };
}
