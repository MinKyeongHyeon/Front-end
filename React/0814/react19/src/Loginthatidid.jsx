import { useState } from "react";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  //사용자가 모두 입력했는지 확인하는 함수
  function handleLogin(e) {
    e.preventDefault();
    if (userId === "" || userPw === "") {
      alert("아이디랑 비밀번호를 다 써줘야 로그인을 하지!!!!!");
      return;
    }
  }

  //초기화 함수
  function handleReset() {
    setUserId("");
    setUserPw("");
  }

  return (
    <>
      <h2>로그인</h2>
      <form>
        <label htmlFor="useId">아이디: </label>
        <input
          type="text"
          name="userId"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label htmlFor="userPw">비밀번호: </label>
        <input
          type="password"
          name="userPw"
          id="userPw"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          로그인
        </button>
        <button type="button" onClick={handleReset}>
          초기화
        </button>
      </form>
    </>
  );
}

export default Login;
