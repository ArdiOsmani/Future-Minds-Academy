export default function PowerfulFeatures(props) {
    const {
      buttonText,
      title,
      feature1Title,
      feature1Text,
      feature2Title,
      feature2Text,
      feature3Title,
      feature3Text,
    } = props;
  
    return (
      <div className="powerful-features">
        <div className="col-1 p-2 text-center">
          <button className="speciale-1 just-start">{buttonText}</button>
          <br />
          <h1 className="dark title">{title}</h1>
          <br />
        </div>
        <div className="row features-info align-center">
          <div className="col features">
            <div className="row different">
              <div className="col features-img">
                <img src="assets/images/laptop.png" alt="laptop" />
              </div>
              <div className="col-4">
                <h3 className="dark">{feature1Title}</h3>
                <br />
                <p>{feature1Text}</p>
              </div>
            </div>
            <br />
            <div className="row different">
              <div className="col features-img">
                <img src="assets/images/pencil.png" alt="pencil" />
              </div>
              <div className="col-4">
                <h3 className="dark">{feature2Title}</h3>
                <br />
                <p>{feature2Text}</p>
              </div>
            </div>
            <br />
            <div className="row different">
              <div className="col features-img">
                <img src="assets/images/group.png" alt="group" />
              </div>
              <div className="col-4">
                <h3 className="dark">{feature3Title}</h3>
                <br />
                <p>{feature3Text}</p>
              </div>
            </div>
          </div>
          <div className="col-1 picture">
            <img src="assets/images/mockup.png" className="powerful-img" alt="mockup" />
            <img src="assets/images/pattern-bg.png" alt="pattern" className="pattern-img-power" />
          </div>
        </div>
      </div>
    );
  }