import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Spring(){

    return(

        <div className="container-fixed">
            <Header
                active1="active"
                active2="undefined"
                active3="undefined"
                active4="undefined"
            />
            <Hero 
                title="Spring"
                images="assets/images/spring.png"
            />
            <Footer/>
        </div>
    )
}