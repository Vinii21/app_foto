import styled from "styled-components";
import { Fuentes, Colores } from "../CCS";

export const HeaderSection = styled.header`
    background: ${Colores.DarkCool};
    padding-bottom: 20px;
    position: fixed;
    z-index: 100;
`;

export const ContenedorNavSection = styled.div`

   ul{

    li{
        

        a{
         color: ${Colores.white};
     
         &:hover{
             color: ${Colores.white};
         }
        }
        
    }
   }

`

export const MainSection = styled.main`
    padding-top: 12%;
    position: relative;
    height: auto;
    z-index: 1;
    font-family: ${Fuentes.NamunGothic};
`;