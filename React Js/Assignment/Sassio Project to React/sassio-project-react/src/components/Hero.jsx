export default function Hero(props) {
  
    return (
      <div className="hero row">
        <div className="col text-left p-5 m-5 intro">
          <button className="btn-primary speciale">On sale for a limited time</button>
          <h1>{props.title}</h1>
          <h1>{props.title1}</h1>
          <p>{props.paragraph}
          </p>
          <div className="col img-fixed">
            <img src="images/app_btn.png" alt=""/>
          </div>
          <div className="buttons">
            <div className="button-container">
              <img className="button-image" src="assets/images/icone_apple.png" alt="Apple Image"/>
              <span className="seperator"></span>
              <div className="button-text">
                     <span class="button-download">Download on the</span>
                     <span class="bold-text">Apple Store</span>
              </div>
            </div>
            <div className="button-container">
              <img className="button-image" src="assets/images/icone_android.png" alt="Android Image"/>
              <span className="seperator"></span>
              <div className="button-text">
                <span className="button-download">Get it on</span>
                <span className="bold-text">Google Play</span>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/images/bg.png" alt="Background Image" className="bg-img"/>
        <div className="col pictures">
          <img src="assets/images/phones.png" alt="Phones Image" className="img-fluid"/>
          <img src="assets/images/pattern-bg.png" alt="Pattern" className="pattern-img"/>
        </div>
      </div>
    );
  }