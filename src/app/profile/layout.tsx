import React from "react";
import Menu from "../../components/profile/menu";

interface LayoutInterface {
  children : React.ReactNode
}

export default function ProfileLayout({children}: LayoutInterface) {
  const style = {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    minHeight: "100vh"
  }

  return (
    <main style={style}>
      {children}
      <aside>
        <Menu/>
      </aside>
    </main>
  );
}
