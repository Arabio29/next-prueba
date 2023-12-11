// contact
import Link from "next/link";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>
        <h1>Contact</h1>
        <h3>
          Ir a
          <hr />
          <Link href="/">Inicio</Link>
          <hr />
          <Link href="/about">About</Link>
        </h3>
      </div>
    </div>
  );
}
