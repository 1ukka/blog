"use client";
import { Container } from "@/componets/container/container";
import styles from "./page.module.css";
import { Header } from "@/componets/header/header";
import { Card } from "@/componets/card/card";
import { Footer } from "@/componets/footer/footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getlist = async () => {
    setLoading(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=9")
      .then((response) => response.json())
      .then((data) => {
        setList(data.blogs);
        setLoading(false);
      });
  };

  useEffect(() => {
    getlist();
  }, []);
  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog</h1>
              <p>A blog created by Aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        {loading && (
          <div className={styles.loadcon}>
            <span className={styles.loader}>L &nbsp; ading</span>
          </div>
        )}
        <div className={styles.grid}>
          {list.map((el, i) => (
            <Card key={i} blog={el} />
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}
