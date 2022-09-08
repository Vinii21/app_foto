import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import FormularioDatosHeader from "../componetesAdmin/FormularioDatosHeader";
import FormularioDatosAcercaDE from "./FormularioDatosAcercaDe";
import FormularioEditarServicios from "./FormularioEditarServicios";
import FormularioNuevaCategoria from "./FormularioNuevaCategoria";


const PaginaAdmin = () => {
    const [ activeTab, setActiveTab ] = useState("1");

    const cambiarTab = (numTab) => {
        if(activeTab !== numTab){
            setActiveTab(numTab);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col" style={{background:"rgba(259,259,259,0.9)"}}>

                        <Nav tabs className="pt-4">
                            <NavItem>
                                <NavLink className={(activeTab =="1"? "active" : "")} onClick={()=>cambiarTab("1")}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={(activeTab =="2"? "active" : "")} onClick={()=>cambiarTab("2")}>
                                    Section
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <FormularioDatosHeader />
                                <FormularioDatosAcercaDE />
                                <div className="row justify-content-center">
                                    <FormularioEditarServicios />
                                    <FormularioNuevaCategoria />
                                </div>
                            </TabPane>

                            <TabPane tabId="2">
                                <div className="container">
                                    <br/>
                                    Section section section
                                </div>
                            </TabPane>
                        </TabContent>

                    </div>
                </div>
            </div>
        </>
    );
}
 
export default PaginaAdmin;