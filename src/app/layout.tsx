import React from "react";
import '../styles/globals.scss';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
