import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <div className="logo">M</div>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Logout
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
