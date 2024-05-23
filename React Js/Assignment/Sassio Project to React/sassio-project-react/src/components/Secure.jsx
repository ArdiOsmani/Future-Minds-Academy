export default function Secure (props) {
    const {
      button1Text,
      heading1,
      section1Title,
      section1Paragraph,
      section2Title,
      section2Paragraph,
      section3Title,
      section3Paragraph,
      section4Title,
      section4Paragraph,
      benefitHeading,
      benefitButtonText,
      benefitTitle,
      benefitItems1,
      benefitItems2,
      freeTrialButtonText,
    } = props;
  
    return (
      <div className="wrapper-full text-center">
        <button className="btn-primary speciale-1">{button1Text}</button>
        <h1 className="text-center">{heading1}</h1>
        <br />
        <div className="secure-section">
          <div className="row square all-shadow">
            <div className="col-5 m-2 p-2">
              <img src="assets/images/timer.png" alt="timer-picture" />
            </div>
            <span className="col-5 m-1 text-left">
              <h3 className="dark">{section1Title}</h3>
              <br />
              <p>{section1Paragraph}</p>
            </span>
          </div>
          <div className="row square all-shadow">
            <div className="col-5 m-2 p-2">
              <img src="assets/images/cloud-storage.png" alt="cloud-storage" />
            </div>
            <span className="col-5 m-1 text-left">
              <h3 className="dark">{section2Title}</h3>
              <br />
              <p>{section2Paragraph}</p>
            </span>
          </div>
          <div className="row square all-shadow">
            <div className="col-5 m-2 p-2">
              <img src="assets/images/touch.png" alt="touch-screen" />
            </div>
            <span className="col-5 m-1 text-left">
              <h3 className="dark">{section3Title}</h3>
              <br />
              <p>{section3Paragraph}</p>
            </span>
          </div>
          <div className="row square all-shadow">
            <div className="col-5 m-2 p-2">
              <img src="assets/images/pen-tool.png" alt="pen-tool" />
            </div>
            <span className="col-5 m-1 text-left">
              <h3 className="dark">{section4Title}</h3>
              <br />
              <p>{section4Paragraph}</p>
            </span>
          </div>
        </div>
        <div className="benefit-section">
          <div className="row">
            <div className="col-1 m-2 p-2 replacement">
              <img src="assets/images/benefit.png" alt="benefits" />
            </div>
            <div className="col-1 m-3 p-3 benefit-info">
              <div className="col benefit-header text-left ">
                <button className="btn-primary speciale-1">{benefitButtonText}</button>
                <h3 className="display-1">{benefitHeading}</h3>
              </div>
              <div className="benefits">
                <ul>
                  {benefitItems1.map((item, index) => (
                    <li key={index}>
                      <div className="benefit-item">
                        <div className="icon-container">
                          <span className="material-symbols-outlined">check</span>
                        </div>
                        <span className="dark">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="item-left">
                  {benefitItems2.map((item, index) => (
                    <li key={index}>
                      <div className="benefit-item">
                        <div className="icon-container">
                          <span className="material-symbols-outlined">check</span>
                        </div>
                        <span className="dark">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn-free just-start">{freeTrialButtonText}</button>
            </div>
            <div className="col-1 m-2 p-2 benefit-img">
              <img src="assets/images/benefit.png" alt="benefits" className="benefit-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }