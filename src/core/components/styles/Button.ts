import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0d8bf9;
  }

  &:disabled {
    opacity: 0.5;
  }
`
