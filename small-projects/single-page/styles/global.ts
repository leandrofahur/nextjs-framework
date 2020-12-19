import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  body {      
    font-family: Open-Sans, Helvetica, Sans-Serif;
    line-height: 1.7;
  }

  a {
    color: #222;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
`;

export const Header = styled.header`
  background: url("../cover.jpeg") no-repeat center center/cover;

  &.alt {
    height: 10vh;
    background: none;
    background-color: #222;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

export const Footer = styled.footer`
  height: 50px;
  background-color: #222;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
  height: 100vh;
`;

export const Form = styled.form`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: auto;
`;

export const Input = styled.input`
  padding: 12px;
  margin: 5px;
  border: none;
  outline: none;
  border-radius: 8px;
  width: 300px;
  margin: auto;
`;

export const Button = styled.button.attrs((/* props */) => ({ tabIndex: 0 }))`
  display: inline-block;
  padding: 0.8rem 1.2rem;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 1.1rem;
  width: 300px;
  margin: auto;

  &:hover {
    opacity: 0.8;
  }

  &.primary {
    background-color: #ff4d00;
    color: #fff;
  }
`;
