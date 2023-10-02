import "styles/globals.scss";
import Head from "next/head";
import Header from "components/layouts/header";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Overview page</title>
      </Head>
      <main className="bg-base-100 min-h-screen  text-2xl">
        <Header></Header>
        <div className="p-5">
          <Component {...pageProps} />
        </div>
      </main>
    </SessionProvider>
  );
}

export default App;
