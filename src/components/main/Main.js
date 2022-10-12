import "./Card.scss";
import { data } from "../../helper/data";
import Card from "./card";

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
