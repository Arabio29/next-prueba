// index.js
import Link from "next/link";
import styles from "../src/app/page.module.css";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <div>
        <h1>Inicio :)</h1>
        <h3>
          Ir a
          <hr />
          <Link href="/about">About</Link>
          <hr />
          <Link href="/contact">Contact</Link>
        </h3>
      </div>
    </div>
  );
}
