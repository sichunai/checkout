import ShowItem from "../show-item/index";
import "./index.scss";

const ShowList = ({ shows }) => {
  return (
    <div className="list-container">
      <h1>Today Ticket</h1>
      {shows.map((show) => (
        <ShowItem key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;
