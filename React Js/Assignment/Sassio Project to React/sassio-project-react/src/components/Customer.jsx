export default function Customer(props) {
    const {
      buttonText,
      header,
      review1Title,
      review1Text,
      reviewer1Name,
      reviewer1Position,
      review2Title,
      review2Text,
      reviewer2Name,
      reviewer2Position,
    } = props;
  
    return (
      <div className="row m-10 gap-9 costumer-section">
        <div className="col-1">
          <button className="speciale-1">{buttonText}</button>
          <h2 className="costumer-header">{header}</h2>
        </div>
        <div className="col-1 info">
          <h4>{review1Title}</h4>
          <br />
          <p>{review1Text}</p>
          <br />
          <h4>{reviewer1Name}</h4>
          <p>{reviewer1Position}</p>
        </div>
        <div className="col-1 info">
          <h4>{review2Title}</h4>
          <br />
          <p>{review2Text}</p>
          <br />
          <h4>{reviewer2Name}</h4>
          <p>{reviewer2Position}</p>
        </div>
      </div>
    );
  }