import Hero from '../Components/Hero'
import Nav from '../Components/Nav'
import Stats from '../Components/Stats'

export default function About (){
    return(
        <div className="App">
        <Nav activePage ="active"/>
  
        <Hero title="This is the about us"/>
  
        <Stats />
  
      </div>
    );
}