import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;

  form {
    width: 100%;
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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      display: flex;
      width: 135px;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      height: 40px;
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      background: #f84c69;
      color: #fff;
      transition: background 0.2s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${darken(0.03, '#f84c69')};
      }
    }
  }
`;
