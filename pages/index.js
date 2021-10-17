import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS | Home Page</title>
        <metadata name="description" content="Website NextJS Dasar" />
      </Head>
      <Header />
      <h1 className={styles["title-homepage"]}>Welcome Tubagus</h1>
      <Image src="/me.jpg" width={200} height={200} alt="me" />
      <p></p>
      <Footer />
    </>
  );
}
