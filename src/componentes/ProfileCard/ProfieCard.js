import { useState } from "react";

function ProfileCard(props) {
  const { titulo, arroba, img } = props;

  const [count, setCount] = useState(0);

  function handleClickSuma() {
    setCount(count + 1);
  }
  function handleClickResta() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="card">
      <div className="card-img">
        <figure className="image is-1by1">
          <img src={img} alt="logo"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <h3 className="title is-4">{titulo}</h3>
          <p className="subtitle is-4">{arroba}</p>
        </div>
        <div className="columns">
          <div className="column is-4">
            <button onClick={handleClickSuma} className="button is-primary">
              +
            </button>
            <p>Cantidad: {count}</p>
            <button onClick={handleClickResta} className="button is-danger">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
