export default function AppDownload(props) {
    const { buttonText, heading, paragraph } = props;
  
    return (
      <div className="row down-app">
        <div className="col-1 text-left p-5 m-5">
          <button className="btn-primary speciale-1">{buttonText}</button>
          <h1 className="display-4">{heading}</h1>
          <p className="paragraf-app">{paragraph}</p>
          <div className="buttons">
            <div className="button-container">
              <img className="button-image" src="assets/images/icone_apple.png" alt="Apple Image" />
              <span className="seperator"></span>
              <div className="button-text">
                <span className="button-download">Download on the</span>
                <span className="bold-text">Apple Store</span>
              </div>
            </div>
            <div className="button-container">
              <img className="button-image" src="assets/images/icone_android.png" alt="Apple Image" />
              <span className="seperator"></span>
              <div className="button-text">
                <span className="button-download">Get it on</span>
                <span className="bold-text">Google Play</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1">
          <img src="assets/images/two-phones-bg.png" className="img-end" alt="phones" />
        </div>
      </div>
    );
  }