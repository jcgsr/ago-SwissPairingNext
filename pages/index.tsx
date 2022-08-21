// 21.08.2022 1ª tentativa de fazer o site para emparceiramento de xadrez
// ontem, meu 1º dias dos pais na escolinha (Dinâmico) de Diana

import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Swiss Pairing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Next Swiss Pairing</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
