import Head from 'next/head';
import Homepage from './homepage';

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Home | Boiler" />
        <meta name="description" content="" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />

        {/* Main Page Title */}
        <title>Welcome to Next Js Boiler plate</title>
      </Head>

      <main className="main">
        <Homepage />
      </main>
    </div>
  );
}
