import ShowItem from "../show-item/index";
import "./index.scss";

const ShowList = ({ shows }) => {
  return (
    <div className="list-container">
      {shows.map((show) => (
        <ShowItem key={show.id} show={show} />
      ))}
    </div>
  );
};

export default ShowList;
