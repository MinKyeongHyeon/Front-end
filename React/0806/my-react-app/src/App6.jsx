// npm install react-router-dom
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./BlogApp.css";

function Home() {
  const [blogTitleList, setBlogTitleList] = useState([]);
  function fetchBlogs() {
    fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/blog")
      .then((response) => response.json())
      .then((json) => {
        setBlogTitleList(json);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={fetchBlogs}>
        블로그 불러오기
      </button>
      <ul>
        {blogTitleList.map((v, i) => (
          <li key={i}>
            <Link to={`/blog/${i}`}>
              <h2>{v.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogDetail() {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);

  function fetchBlogDetail() {
    fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/blog")
      .then((response) => response.json())
      .then((json) => {
        setBlogDetail(json[id]);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>블로그 상세</h1>
      <button onClick={fetchBlogDetail}>블로그 내용 불러오기</button>
      {blogDetail ? (
        <div>
          <h2>{blogDetail.title}</h2>
          <img
            src={`https://dev.wenivops.co.kr/services/fastapi-crud/1/${blogDetail.thumbnail}`}
            alt=""
          />
          <p>{blogDetail.content}</p>
        </div>
      ) : (
        <p>버튼을 눌러서 블로그를 불러오세요</p>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
