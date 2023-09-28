import "../styles/globals.scss";

function App({ Component, pageProps }) {
  return (
    <main className="bg-primary-content min-h-screen p-5 text-2xl">
      <Component {...pageProps} />
    </main>
  );
}

export default App;
