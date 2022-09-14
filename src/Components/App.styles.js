import styled from "styled-components";

export const Container = styled.div`
    background-color: #32465A;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Box =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    background-color: #45586b;
    padding: 45px 20px;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 0px rgba(255, 255, 255, 0.822);
    -webkit-box-shadow: 1px 1px 5px 0px rgba(167, 163, 163, 0.829);
    -moz-box-shadow: 1px 1px 5px 0px rgba(255, 255, 255, 0.836);
`

export const Title =  styled.h1`
    margin-bottom: 30px;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.932);
`

export const Inputs =  styled.input`
    height: 38px;
    border-radius: 5px;
    max-width: 300px;
    width: 250px;
    margin: 24px 0;
    padding: 0 7px;
    outline: none;
    border: 1px solid #8d8b8b;
    font-size: 15px;
`
export const Links = styled.a`
    text-decoration: none;
    background-color: #304050;
    color: rgba(255, 255, 255, 0.932);
    padding: 5px;
    border: none;
    border-radius: 8px;
    width: 150px;
    padding: 10px 5px;
    text-align: center;
    margin-bottom: 8px;
    font-size: 18px;

    &:hover{
        background-color: #30405071;
    }
`

