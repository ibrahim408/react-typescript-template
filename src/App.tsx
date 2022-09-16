import "./styles.css";
import IMAGE from "./react.png";
import BASKETBALL from "./basketball.svg";
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>
        Sir Sir React Typescript webpack starter template - {process.env.NODE_ENV}{" "}
        - {process.env.name}
      </h1>
      <img src={IMAGE} alt="React logo" width="300" height="200" />
      <img src={BASKETBALL} alt="React logo" width="300" height="200" />
      <ClickCounter />
    </>
  );
};
