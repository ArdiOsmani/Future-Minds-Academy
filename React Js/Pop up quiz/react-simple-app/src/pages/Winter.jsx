import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Winter(){

    return(

        <div className="container-fixed">
            <Header
            active1="undefined"
            active2="undefined"
            active3="udefined"
            active4="active"
            />
            <Hero 
                title="Winter"
                images="assets/images/winter.png"
            />
            <Footer/>
        </div>
    )
}