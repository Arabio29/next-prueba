// about
import Link from "next/link";
import styles from "../src/app/page.module.css";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

export default function About() {
  return (
    <div>
    <Head>
      <title>About</title>
      <meta name="description" content="about Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    
    <div>
      <h1>About</h1>
      <h3>
        Ir a
        <hr />
        <Link href="/">Inicio</Link>
        <hr />
        <Link href="/contact">Contact</Link>
      </h3>
    </div>
  </div>
  );
}
