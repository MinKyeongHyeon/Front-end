import React from "react";
import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("diary");


  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const today = `${year}년${String(month + 1).padStart(2, "0")}월${String(
    day
  ).padStart(2, "0")}일`;
  return (
    <div className="container">
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>{today}의 비밀일기</h2>
        <DiaryForm uid={user.uid} />
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul>
          <DiaryList documents={documents} />
          {error&&<li><strong>{error}</strong></li>}
        </ul>
      </section>
    </div>
  );
}
