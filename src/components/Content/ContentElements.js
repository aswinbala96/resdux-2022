import styled from 'styled-components';


export const ContentSpace = styled.div`
    background: transparents;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
    top: 0;
    z-index: 10;
    width: 100%;
    /* max-width: 1100px; */
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const ContentCointainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    width:100%;
    padding: 20px 10px;
    max-width: 90%;
`

export const SidePanel = styled.div`
    color: black;
    flex: 1.4;
    /* background-color: black; */
    /* display: flex; */
    /* align-items: center; */
    margin-left: 24px;
    /* font-weight: bold; */
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100% !important;
    overflow: scroll;    
    @media screen and (max-width: 960px){
        font-size: 10px;
        margin-left: -5px;
    }
` 
export const MainPanel = styled.div`
    color: black;
    justify-self: flex-start;
    flex: 5;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding-left: 24px;
    font-weight: bold;
    text-decoration: none;
    border-left: 2px solid darkgrey;
    /* :hover{
        transition: 0.4s ease-in-out;
        color: hotpink;
    } */
    height: 100%;
` 

