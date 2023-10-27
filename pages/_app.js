import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>© 2023 Elliot</p>
      </footer>
    </div>
  );
}
