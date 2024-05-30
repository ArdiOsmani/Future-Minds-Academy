import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Summer(){

    return(

        <div className="container-fixed">
            <Header
                active1="undefined"
                active2="active"
                active3="udefined"
                active4="undefined"
            />
            <Hero 
                title="Summer"
                images="assets/images/summer.png"
            />
            <Footer/>
        </div>
    )
}