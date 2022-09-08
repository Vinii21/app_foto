import React from "react";
import Header from './Header';
import AcercaDe from './Acerca_de';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Footer from './Footer'


const Home = (props) => {

    return (
        <>
            <Header/>
                <main>
                    <AcercaDe/>
                    <Galeria setActiveTab={props.setActiveTab}/>
                    <Contacto />
                </main>
                <Footer />
        </>
    );
}
 
export default Home;