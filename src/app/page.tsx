"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [notification, setNotification] = useState({
    title: "Notification Title",
    body: "Notification Body",
    tag: "notification-tag",
  });

  const sendNotification = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-push-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notification),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js Notification Example</h1>
      <form onSubmit={sendNotification} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={notification.title}
            onChange={(e) =>
              setNotification({ ...notification, title: e.target.value })
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            id="body"
            value={notification.body}
            onChange={(e) =>
              setNotification({ ...notification, body: e.target.value })
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            id="tag"
            value={notification.tag}
            onChange={(e) =>
              setNotification({ ...notification, tag: e.target.value })
            }
          />
        </div>
        <button type="submit" className={styles.button}>
          Send Notification
        </button>
      </form>
    </main>
  );
}
