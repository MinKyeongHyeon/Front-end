import useLang from "./custom-hook/useLang";

function Header() {
  const { currentLanguage } = useLang();
  return <h2>{currentLanguage.title}</h2>;
}

export default Header;
