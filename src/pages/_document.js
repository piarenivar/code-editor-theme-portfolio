import { NextFontManifestPlugin } from 'next/dist/build/webpack/plugins/next-font-manifest-plugin'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" id='html'>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.png" />
        <title>Pablo Arenivar | Full Stack Web Developer</title>
        <meta name="title" content="Pablo Arenivar | Full Stack Web Developer" />
        <meta name="description" content="Hi, I'm Pablo, a full stack web developer specializing in building modern and responsive front-end websites and full stack web applications. My area of expertise focuses on working with React, Bootstrap/Tailwind, NextJS and Firebase among a variety of other technologies." />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Source+Code+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <script src="https://kit.fontawesome.com/3596f02005.js" crossorigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
