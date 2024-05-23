import React from 'react';

import './assets/css/fma-general.css';
import './assets/css//fma-responsive.css';
import './assets/css//style-responsive.css';
import './assets/css//style.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Secure from './components/Secure';
import PathToSuccess from './components/PathToSuccess';
import PowerfulFeatures from './components/PowerfulFeatures';
import Customer from './components/Customer' ;
import Metrics from './components/Metrics';
import AppSlider from './components/AppSlider';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';



function App() {
  return (
    <div className="container-fixed">
      <Nav activePage="active" />
      <Hero
        title="Premium Startup & App"
        title1="Landing Page"
        paragraph={`Besides its beautiful design.\nSassio is an incredibly 
        rich core\nframework for you to showcase your App.`}
      />
      <Companies paragraph="Trusted by the world's best" />
      <Secure
        button1Text="SAFETY FIRST"
        heading1="You're in a secure company"
        section1Title="Real time activity"
        section1Paragraph="Get instant insight on what's happening in your business. It uses a dictionary of the over 200 Latin words."
        section2Title="Instant deploy"
        section2Paragraph="Deploy your project in a fraction of a second, no time! It uses a dictionary of the over 200 Latin words."
        section3Title="Easy integrations"
        section3Paragraph="Integrate our solution with other tech leaders in the industry. It uses a dictionary of the over 200 Latin words."
        section4Title="Perfect UI/UX"
        section4Paragraph="Get instant insight on what's happening in your business. It uses a dictionary of the over 200 Latin words."
        benefitButtonText="SAFETY FIRST"
        benefitHeading="Tons of benefit"
        benefitItems1={["Development", "Web Design", "Do Magic", "Save Time"]}
        benefitItems2={["App builder", "Dashboard", "Feedback"]}
        freeTrialButtonText="FREE TRIAL"
      />


      <PathToSuccess
        title="Path to Success"
        buttonText="WE ARE YOUR ONLY"
        section1Title="Mail Management"
        section1Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae."
        section2Title="Customers Tracking"
        section2Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae."
        section3Title="Advanced Reporting"
        section3Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae."
      />

      <PowerfulFeatures
        buttonText="OUR FEATURES"
        title="Powerful Features"
        feature1Title="Theme Made Easy"
        feature1Text="Our astonishing style structure makes your customization process a breeze"
        feature2Title="Powerful Design"
        feature2Text="With ready-to-use content you'll deploy your implementation in no time"
        feature3Title="Creative Content"
        feature3Text="Repetitive styles all across the web? Nevermind that! Shine with unique styles"
      />
      <Customer
        buttonText="EXPLORE NEW PLACES"
        header="What our customer says"
        review1Title="Design Quality"
        review1Text="The template is really nice and offers quite a large set of options. It’s beautiful and the coding is done quickly and seamlessly. Thank you!"
        reviewer1Name="Devon Lane"
        reviewer1Position="Team Leader, Paypal"
        review2Title="Design Quality"
        review2Text="The template is really nice and offers quite a large set of options. It’s beautiful and the coding is done quickly and seamlessly. Thank you!"
        reviewer2Name="Theresa Webb"
        reviewer2Position="Software Tester, Envato"
      />

      <Metrics
        components="773"
        downloads="1254"
        followers="14941"
        newUser="1254"
      />

      <AppSlider
        buttonText="EXPLORE NEW PLACES"
        title="App ScreenShot"
      />

      <Pricing
        plansButtonText="PLANS"
        pricingTitle="Simple Pricing"
        basicPlanText="Free"
        professionalPlanText="$599.95"
        businessPlanText="$999.95"
        getStartedText="GET STARTED"
      />

      <FAQ
        buttonText="GET HELP (HELP CENTER)"
        heading="Frequently asked questions."
      />

      <AppDownload
        buttonText="START TODAY"
        heading="Download the App"
        paragraph="New features. New appearance. No risk and credit card required."
      />

      <Footer />

    </div>
  );
}

export default App;
