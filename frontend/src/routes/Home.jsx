import { useState } from "react";
import ErrorButton from "../components/ErrorButton";
import GetLogsButton from "../components/GetLogsButton";
import NavButton from "../components/NavButton";

const Home = () => {
    const [count, setCount] = useState(0);
  return (
    <>
      <h1>Proyecto para pruebas de concepto</h1>
      <div className="card">
        <button onClick={() => console.log(count[id])}>count is {count}</button>
        <ErrorButton />
        <GetLogsButton />
      </div>
      <div className="card">
        <NavButton text="Go to Login" route="/login" />
        <NavButton text="Go to Register" route="/register" />
        <NavButton text="Go to Posts" route="/posts" />
      </div>
    </>
  );
};

export default Home;
