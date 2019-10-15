import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  background: #18161f;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    div.logo {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #3f2844;
    }

    a {
      font-weight: bold;
      color: ${lighten(0.2, '#3f2844')};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${lighten(0.2, '#3f2844')};
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    width: 60px;
    height: 35px;
    border: 0;
    border-radius: 4px;
    padding: 5px;
    margin-left: 15px;
    font-weight: bold;
    color: #fff;
    background: #f84c69;
    transition: 0.2s background;

    &:hover {
      background: ${darken(0.05, '#f84c69')};
    }
  }
`;
