import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import theme from "../static/theme";
import { isDarkMode } from "../utils/isDarkMode";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          {this.props.styleTags}
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu+Mono"
            rel="stylesheet"
          />
          <style>
            {`
              body {
                margin: 0;
                background: ${
                  isDarkMode()
                    ? theme.dark.colors.backgroundColor
                    : theme.day.colors.backgroundColor
                };
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
