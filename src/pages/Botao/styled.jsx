import styled from 'styled-components'

export const AreaBotao = styled.div`
  font-family: Helvetica;
`;
export const AreaVoz = styled.div`
  background-color: #dbdbdb;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50rem;
`;
export const Button = styled.button`
  background-color: #e40000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #a00202;
  }
`;