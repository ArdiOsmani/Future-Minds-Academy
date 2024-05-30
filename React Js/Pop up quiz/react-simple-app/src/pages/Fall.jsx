import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Fall(){

    return(

        <div className="container-fixed">
            <Header
                active1="undefined"
                active2="undefined"
                active3="active"
                active4="undefined"
            />
            <Hero 
                title="Fall"
                images="assets/images/fall.png"
            />
            <Footer/>
        </div>
    )
}