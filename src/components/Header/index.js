import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {
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
              <strong>Phabiulla Nascimento</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/happy.png"
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
