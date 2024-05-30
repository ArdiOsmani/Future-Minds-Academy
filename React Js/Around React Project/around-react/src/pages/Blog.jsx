import Hero from '../Components/Hero'
import Nav from '../Components/Nav'
import Stats from '../Components/Stats'

export default function Blog (){
    return(
        <div className="App">
        <Nav activePage ="active"/>
  
        <Hero title="Blog"/>
  
        <Stats />
  
      </div>
    );
}