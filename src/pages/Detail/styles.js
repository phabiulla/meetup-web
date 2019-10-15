import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    height: 300px;
    background: #19141d;
  }

  p {
    width: 100%;
    color: #fff;
    margin: 10px 0;
    font-size: 16px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  span {
    color: #fff;
    font-weight: bold;
    font-size: 22px;
  }

  aside {
    display: flex;
    flex-direction: row;

    button.red {
      display: flex;
      align-content: center;
      padding: 7px 12px;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      color: #fff;
      transition: 0.2s background;
      background: #f84c69;

      &:hover {
        background: ${darken(0.05, '#f84c69')};
      }

      svg {
        margin-right: 5px;
      }
    }

    button.blue {
      display: flex;
      align-content: center;
      padding: 7px 12px;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      color: #fff;
      transition: 0.2s background;
      background: #4dbaf9;
      margin-right: 10px;

      &:hover {
        background: ${darken(0.05, '#4dbaf9')};
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20px;

  span {
    display: flex;
    align-content: center;
    align-items: center;
    color: #afa8b1;
    font-size: 14px;

    &:first-child {
      margin-right: 30px;
    }
  }

  svg {
    margin-right: 5px;
  }
`;
