import styled from "styled-components";
import background from '../../images/retro-furnish.png'
import { TypeAnimation } from 'react-type-animation';

export const TitleContainer = styled.div`
    /* background: #0c0c0c; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 200px; 
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
    font-size:24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Inconsolata', monospace;
    
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const TitleH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-family: 'Space Mono', monospace;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`


export const TitleContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`