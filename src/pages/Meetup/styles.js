import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 40px auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    .react-datepicker-wrapper {
      width: 100% !important;
    }

    input {
      width: 100%;
      height: 40px;
      border: none;
      background: #261d2c;
      border-radius: 4px;
      margin-top: 10px;
      padding: 5px 15px;
      color: #fff;
      font-size: 14px;

      &::placeholder {
        color: #88838c;
      }
    }

    textarea {
      width: 100%;
      height: 200px;
      border: none;
      background: #261d2c;
      border-radius: 4px;
      margin-top: 10px;
      padding: 5px 15px;
      resize: none;
      color: #fff;
      font-size: 14px;

      &::placeholder {
        color: #88838c;
      }
    }

    button.action {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      color: #fff;
      background: #f84c69;
      transition: 0.2s background;

      &:hover {
        background: ${darken(0.05, '#f84c69')};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;
