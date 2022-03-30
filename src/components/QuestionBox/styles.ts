import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid #9999;
  margin: 10px auto;
  width: 100%;
  overflow: hidden;
  height: auto;
  min-height: 150px;
  padding: 10px;
  border-radius: 10px;
`;

export const Body = styled.p`
  width: 90%;
  padding: 10px;
  color: #333;
`;

export const Author = styled.p`
  text-transform: lowercase;
  color: #e2e2e2;
`;

export const Button = styled.button`
  border: none;
  background-color: #c44536;
  color: #fff;
  padding: 5px;
  border-radius: 50px;
`;
