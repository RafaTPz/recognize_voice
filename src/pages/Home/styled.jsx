import styled from 'styled-components'

export const AreaHome = styled.div`
  font-family: Arial, sans-serif;
`;

export const AreaVoz = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;