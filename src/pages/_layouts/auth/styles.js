import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #26212f, #3f2844);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border-radius: 4px;
      border: 0;
      height: 44px;
      background: rgba(0, 0, 0, 0.3);
      padding: 0 15px;
      margin-bottom: 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f84c69;
      align-self: flex-start;
      margin: -5px 0 10px;
      font-weight: bold;
    }

    button {
      height: 44px;
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      background: #f84c69;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f84c69')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 15px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
