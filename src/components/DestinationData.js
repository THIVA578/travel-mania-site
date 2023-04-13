import "./DestinationStyle.css";

let DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>

      <div className="image">
        <img alt="desimg" src={props.img1} />
        <img alt="desimg" src={props.img2} />
      </div>
    </div>
  );
};

export default DestinationData;
