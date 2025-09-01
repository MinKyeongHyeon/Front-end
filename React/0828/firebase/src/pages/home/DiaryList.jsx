import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../img/icon-edit.svg";
import iconDelete from "../../img/icon-delete.svg";
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryList({ documents }) {

  const {deleteDocument} = useFirestore('diary')
  return (
    <>
      {documents.map((doc) => (
        <li key={doc.id}>
          <article className={styles["diary-article"]}>
            <h3 className={styles["article-title"]}>{doc.title}</h3>
            <time
              className={styles["article-time"]}
              dateTime={doc.date.replaceAll(".","-").slice(0,-4)}
            >
              {doc.date}
            </time>
            <p className={styles["article-content"]}>{doc.text}</p>

            <div className={styles["button-group"]}>
              <button type="button">
                <img src={iconEdit} alt="수정" />
              </button>
              <span></span>
              <button type="button" onClick={()=>(deleteDocument(doc.id))}>
                <img src={iconDelete} alt="삭제" />
              </button>
            </div>
          </article>
        </li>
      ))}
    </>
  );
}
