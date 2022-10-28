import styled from "styled-components";
import background from '../../images/retro-furnish.png'
import { TypeAnimation } from 'react-type-animation';

export const TitleContainer = styled.div`
    /* background: #0c0c0c; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    flex: 1; 
    height: 1000px;
    position: relative;
    z-index: 1;
    background-image: url(${background});
    
    ::after{
        content: '';
        background-color: rgba(0, 0, 0, 0.75);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`
export const TitleH2 = styled(TypeAnimation)` 
    margin-top: 24px;
    color: hotpink;
    font-size:20px;
    text-align: center;
    max-width: 600px;
    font-family: 'Inconsolata', monospace;
    
    @media screen and (max-width: 990px) {
        font-size: 18px;
    }

    @media screen and (max-width: 850px) {
        font-size: 16px;
    }

    /* @media screen and (max-width: 730px) {
        transform: rotate(-90deg);
    } */

`

export const TitleH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;
    font-family: 'Space Mono', monospace;
    @media screen and (max-width: 1013px) {
        font-size: 32px;
    }

    @media screen and (max-width: 850px) {
        font-size: 28px;
    }

    /* @media screen and (max-width: 730px) {
        transform: rotate(-90deg);
    } */
`


export const TitleContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: rotate(-90deg);
    @media screen and (max-width: 730px) {
        transform: rotate(-90deg);
    }
`