import "styles/globals.scss";
import Head from "next/head";
import Header from "components/layouts/header";

function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Overview page</title>
      </Head>
      <main className="bg-base-100 min-h-screen  text-2xl">
        <Header></Header>
        <div className="p-5">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default App;
