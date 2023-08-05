import { AppProps } from 'next/app';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import NavLayout from "../components/nav";

function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default App;