import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4, h5, h6, p, span, div {
    font-family: "Nunito", sans-serif;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000"></meta>
        <title>Portfolio Rafa Dev</title>
        <meta
          name="description"
          content="Portifolio rafael dev"
        />
      </Head>
      <GlobalStyle />
      <Navbar></Navbar>
      {children}
    </>
  )
}