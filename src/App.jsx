import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl bg-amber-50 border border-2 rounded-2xl">
        Hello world!
      </h1>
    </>
  );
}

export default App;
