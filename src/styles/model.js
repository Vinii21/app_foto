import styled from "styled-components";
import { motion } from "framer-motion";
import { HomePage } from "../assets/media_fichero";

export const Headerr = styled.header`
    width: 100%;
    height: 100vh;
    background: url('${HomePage.background}');
    background-repeat: no-repeat;
    background-position: center -120px;
    background-size: cover;
    background-attachment: fixed;

    @media screen and (max-width: 830px){
        height: 650px;
    }

    @media screen and (max-width: 500px){
        height: 500px;
    }
`;

export const ContendorHero = styled(motion.div)`
    position: relative;
    top: 130px;
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 
    opacity: 0;  

    h1{
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: bold;
        font-size: 40px;
        color: #fff;
        border: 1px solid #fff;
        padding: 20px;   
    }
    span{
        background-color: #fff;
        clip-path: polygon(50% 69%, 100% 35%, 100% 65%, 50% 100%, 50% 100%, 0 65%, 1% 35%);
        position: relative;
        top: 100px;
        width: 60px;
        height: 60px;   
    }
    .row{
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 830px){
        top: 100px;
        height: 100px;
        width: 600px;

        h1{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 500px) {
        height: 300px;
        width: 100%;
        justify-content: flex-start;

        h1{
            font-size: 20px;
        }

        span{
            display: none;
        }
    }
`;

export const ContenedorMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 830px){
        flex-direction: column;
    }
`;

export const Nav = styled(motion.nav)`
    margin-right: 50px;
    display: flex;

    li{
        list-style: none;
        color: #fff;
        a{
            padding: 0px 10px;
            font-family: 'Nanum Gothic', sans-serif;
            font-weight: bold;
            font-size: 18px;
            position: relative;
            top: -100px; 
            
        }
    }

    @media screen and (max-width: 830px){
        margin: 0px;
    }
`;

export const ContenedorLogo = styled.div`
    height: 100%;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff; 
    }
    img{
        width: 150px;
        margin: 40px 0px 0px 50px; 
    }
    span{
        font-family: 'Tangerine', sans-serif;
        font-weight: 600;
        font-size: 4rem;
        padding-top: 40px;  
    }

    .navbar-brand{
        position: relative;
        bottom: 20px;
        width: 200px;
        height: 60px;
        img{
            width: 90px;
        }
        span{
            font-size: 3.5rem;
        }
    }

    @media screen and (max-width: 830px){
        margin-bottom: 40px;
        z-index: 1;
        position: relative;

        a{
            margin-right: 120px;  
        }
    }

    @media screen and (max-width: 500px) {
        img{
            width: 60px;
        }
        span{
            font-size: 30px;
        }
    }
`;

export const ContenedorAcercaDe = styled.div`
    overflow: visible;
    position: relative;  
`;

export const ContenedorImg = styled(motion.div)`
    width: 50%;
    position: absolute;
    left: 200px;
    top: 30px;
    z-index: 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.421);

    img{
        vertical-align: top;
        width: 100%;   
    }

    @media screen and (max-width: 830px){
        width: 50%;
        position: absolute;
        left: 200px;
        top: -50px;
        z-index: 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.421);
    }
    
    @media screen and (max-width: 500px) {
        width: 70%;
        left: 15.5%;
        top: -30px;
    }

`;

export const ContenedorInfo = styled(motion.div)`
    background-color: #fff;
    padding: 30px;
    width: 30%;
    height: auto;
    position: relative;
    top: 360px;
    right: 260px;
    float: right;
    z-index: 1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.231);
    font-size: 14px;

    h2{
        font-weight: bold;
        font-size: 20px;
    }

    @media screen and (max-width: 830px){
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 180px;
    }
`;

export const ContenedorGaleria = styled.div`
    padding-top: 570px;

    @media screen and (max-width: 830px){
        padding-top: 400px;
    }

    @media screen and (max-width: 500px){
        padding-top: 450px;
    }
`;

export const ContenedorTitulo = styled.div`
    position: relative;
    top: 70px;
    text-align: center;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    width: 100vw;

    h2{
        font-size: 80px;
        font-family: 'Tangerine', sans-serif;

        @media screen and (max-width: 830px){
            font-weight: bold;
        }
        
    }
`;

export const Galerias = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 830px){
        width: 100%;
    }
    
    @media screen and (max-width: 500px){
        justify-content: flex-start;
    }
`;

export const ContenedorTarjeta = styled.div`
    height: 480px;
    width: 310px;
    margin: 10px;
    border-radius: 1%;

    @media screen and (max-width: 500px){
        height: 150px;
        width: 50%;
        margin: 0px;
    }

`;

export const FondoTarjeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.529);
    width: 100%;
    height: 100%;
    border-radius: 1%;

    &:hover{
        background-color: rgba(0, 0, 0, 0.429);
    }
`;

export const ContenedorInfoTarjeta = styled.div`
    padding: 30px;
    margin-bottom: 60px;
    font-family: 'Nanum Gothic', sans-serif;
    
    h3{
        font-family: 'Tangerine', sans-serif;
        font-weight: 900;
        font-size: 60px;
        padding-bottom: 5px;
        color: #fff; 
    }

    p{
        font-weight: 400;
        font-size: 15px;
        line-height: 23px;
        padding-bottom: 15px;
        color: #fff;
        height: 153px; 
    }

    .enlace{
        border: 2px solid #fff;
        padding: 10px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        background: rgba(0,0,0,0.4);
    }

    .enlace:hover{
        background: rgba(0,0,0,0.6); 
    }

    @media screen and (max-width: 500px) {
        padding-left: 20px;
        margin-bottom: 10px;

        h3{
            font-size: 35px; 
        }

        p{
            display: none;
        }
        .enlace{
            font-size: 12px;
            padding: 8px;
        }
    }
`;

export const ContenedorContacto = styled.div`
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 830px){
        width: 80%;
    }

    @media screen and (max-width: 500px){
        widht: 100%;
        height: 300px;
        margin: 0px;
        margin-top: 20px;
        margin-bottom: 100px;
        flex-direction: column;
    }
`;

export const ContenedorRedes = styled.div`
    height: 400px;
    width: 88px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2px solid rgb(105, 104, 104);
    border-left: 2px solid rgb(105, 104, 104);
    border-bottom: 2px solid rgb(105, 104, 104);

    span{
        margin-bottom: 20px
    }

    img{
        width: 30px;
        cursor: pointer;
    }

    @media screen and (max-width: 830px){
        width: 20%;

        img{
            width: 20px;
        }
    }

    @media screen and (max-width: 500px){
        height: 60px;
        width: 150px;
        flex-direction: row;
        border-right: 2px solid rgb(105, 104, 104);
        position: relative;
        left: 40px;

        span{
            padding: 5px;
        }
    }
`;

export const ContenedorInfoContacto = styled.div`
    width: 50%;
    height: 540px;
    position: relative;
    top: -5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(105, 104, 104);

    h2{
        width: 80%;
        margin: 0 auto;
        margin-bottom: 30px;
        font-weight: 900;
        text-align: center;
        font-size: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(50, 50, 60);
        color: rgb(48, 46, 46);
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10%;
        margin-bottom: 20px;
        width: 65%;
    }

    img{
        width: 60px;
        margin-right: 20px;
    }

    @media screen and (max-width: 830px){
        width: 100%;

        h2{
            font-size: 20px;  
        }

        div{
            padding: 0 5%; 
        }

        img{
            width: 40px;
            margin-right: 10px;
        }

        p{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 500px){
        height: 400px;
        width: 100vw;
        margin: 0 auto;

        h2{
            margin-top: 20px;
            padding-bottom: 10px;
        }

        div{
            justify-content: center;
        }
    }
`;

export const ContenedorMapa = styled.div`
    height: 400px;
    width: 600px;
    border-top: 2px solid rgb(105, 104, 104);
    border-right: 2px solid rgb(105, 104, 104);
    border-bottom: 2px solid rgb(105, 104, 104);
    
    @media screen and (max-width: 500px){
        display: none;
    }
`;

export const EtiquetaFooter = styled.footer`
    width: 100%;
    height: 200px;
    position: relative;
    margin-top: 100px;

    @media screen and (max-width: 500px){
        height: 100px;
        margin-top: 200px;
    }
`;

export const ContenedorFooter = styled.div`
    height: 100%;
    width: 100%;
    background-color: #333333;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 100px;

    div{
        display: flex;
        justify-content: center;
        height: 100px;
    }
`;

