import Head from "next/head";
import styles from "../styles/Blog.module.css";

export default function Blog(props) {
  const { dataBlog } = props;
  return (
    <>
      <Head>
        <title>Next JS | Blog Page</title>
        <metadata name="description" content="Website NextJS Dasar" />
      </Head>
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <p>{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </>
  );
}

// Cocok dipakai kalau data APInya dinamis
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
