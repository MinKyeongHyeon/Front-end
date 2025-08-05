import { useState } from "react";

function About() {
  return <p>여기는 포트폴리오에유</p>;
}
function Profile() {
  return <p>저는 민경현이구유</p>;
}

function Contact() {
  return <p>전화번호는 아무나 못알려줘유</p>;
}

function Contents({ page }) {
  if (page === "about") {
    return <About />;
  } else if (page === "profile") {
    return <Profile />;
  } else if (page === "contact") {
    return <Contact />;
  }
  return <About />;
}

function App() {
  const [page, setPage] = useState("about");
  return (
    <>
      <header>
        <h1>포트폴리오 페이지입니다.</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => setPage("about")}>About</button>
            </li>
            <li>
              <button onClick={() => setPage("profile")}>Profile</button>
            </li>
            <li>
              <button onClick={() => setPage("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <Contents page={page} />
        </section>
      </main>
      <footer>
        <address>
          <small>여기는 푸터지롱!</small>
        </address>
      </footer>
    </>
  );
}

export default App;
