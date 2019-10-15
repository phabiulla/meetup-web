import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;

  label {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: #19141d;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    margin-bottom: 10px;
    align-self: center;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    margin: 15px;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    color: #5e5c62;
  }

  input {
    display: none;
  }
`;
