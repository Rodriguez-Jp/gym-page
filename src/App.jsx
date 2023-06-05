import { useState } from "react";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Program from "./components/Program";

function App() {
  return (
    <>
      <Header />
      <main>
        <FrontPage />
        <Program />
      </main>
    </>
  );
}

export default App;
