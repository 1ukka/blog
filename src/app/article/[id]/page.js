import { Footer } from "@/componets/footer/footer";
import { Header } from "@/componets/header/header";
import styles from "./page.module.css";
import { Container } from "@/componets/container/container";
import Image from "next/image";
import dayjs from "dayjs";

async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
}

export default async function Article({ params }) {
  let data = await getData(params.id);
  return (
    <main>
      <Header />
      <Container>
        <div className={styles.head}>
          <div>
            <h1>{data.blog.title}</h1>
            <p>{data.blog.category}</p>
          </div>
          <span>{dayjs(data.blog.created_at).format("YYYY, MMMM DD")}</span>
        </div>
        <div className={styles.cover}>
          <Image src={data.blog.photo_url} fill={true} />
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
        ></div>
      </Container>
      <Footer />
    </main>
  );
}
