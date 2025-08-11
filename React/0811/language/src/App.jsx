// useContext를 사용하고 구현

import { LanguageProvider } from "./LanguageProvider";
import LangSelector from "./LangSelector";
import Header from "./Header";
import Contents from "./Contents";

function App() {
  return (
    <LanguageProvider>
      <LangSelector />
      <Header />
      <Contents />
    </LanguageProvider>
  );
}

export default App;
