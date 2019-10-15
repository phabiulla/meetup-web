import styled from 'styled-components';
import { lighten, darken } from 'polished';

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
`;

export const MeetupHeader = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 30px;
    color: #fff;
    font-weight: bold;
  }

  button {
    border-radius: 4px;
    background: #f84c69;
    color: #fff;
    border: 0;
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
    transition: 0.2s background;

    &:hover {
      background: ${darken(0.05, '#f84c69')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const MeetupList = styled.ul`
  padding: 40px 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  li {
    width: 100%;
    border-radius: 4px;
    background: #261f2d;
    padding: 15px 25px 15px 30px;
    color: #fff;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 10px;
    transition: 0.2s background;

    &:hover {
      cursor: pointer;
      background: ${lighten(0.01, '#261f2d')};
    }

    label {
      font-size: 16px;
      font-weight: bold;
    }

    span {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #8f8992;

      svg {
        margin-left: 30px;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
