export default function PathToSuccess(props) {
    const {
      title,
      buttonText,
      section1Title,
      section1Text,
      section2Title,
      section2Text,
      section3Title,
      section3Text,
    } = props;
  
    return (
      <div className="row path-succes-section">
        <div className="col-2">
          <img src="assets/images/trending.png" className="path-img" alt="trending" />
        </div>
        <div className="path-succes">
          <div className="col-2 gap-2">
            <button className="speciale-1 just-start">{buttonText}</button>
            <br />
            <h1 className="dark title">{title}</h1>
            <br />
            <div className="row gap-2 m-3 align-start">
              <div className="col-2">
                <div className="back-hover">
                  <img src="assets/images/letter.png" alt="letter" />
                </div>
              </div>
              <div className="col-5">
                <h3 className="dark">{section1Title}</h3>
                <br />
                <p>
                  {section1Text}
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row gap-2">
              <div className="col-2">
                <div className="back-hover">
                  <img src="assets/images/package-delivery.png" alt="package-delivery" />
                </div>
              </div>
              <div className="col-5">
                <h3 className="dark">{section2Title}</h3>
                <br />
                <p>
                  {section2Text}
                </p>
              </div>
            </div>
            <br />
            <br />
            <div className="row gap-2">
              <div className="col-2">
                <div className="back-hover">
                  <img src="assets/images/reporting.png" alt="Reporting" />
                </div>
              </div>
              <div className="col-5">
                <h3 className="dark">{section3Title}</h3>
                <br />
                <p>
                  {section3Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }