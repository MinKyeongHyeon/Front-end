import useLang from "./custom-hook/UseLang";

function Contents() {
  const { currentLanguage } = useLang();
  const { greeting, description } = currentLanguage;
  return (
    <div>
      <p>{greeting}</p>
      <p>{description}</p>
    </div>
  );
}

export default Contents;
