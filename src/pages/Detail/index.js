import React from 'react';
import { useDispatch } from 'react-redux';
import { MdPlace, MdEvent, MdEdit, MdDeleteForever } from 'react-icons/md';

import history from '~/services/history';
import { Container, Content, Header, Footer } from './styles';
import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

export default function Detail() {
  const meetup = history.location.state.meetup;
  const dispatch = useDispatch();

  function handleEditMeetup() {
    history.push('meetup', { meetup });
  }

  async function handleCancelMeetup() {
    dispatch(cancelMeetupRequest(meetup.id));
  }

  return (
    <Container>
      <Content>
        <Header>
          <span>{meetup.title}</span>
          <aside>
            <button className="blue" onClick={handleEditMeetup}>
              <MdEdit size={16} color="#fff" />
              Edit
            </button>
            <button className="red" onClick={handleCancelMeetup}>
              <MdDeleteForever size={16} color="#fff" />
              Cancel
            </button>
          </aside>
        </Header>
        <img src={meetup.file.url} alt="Banner"></img>

        <p> {meetup.description}</p>

        <Footer>
          <span>
            <MdEvent size={16} color="#AFA8B1" />
            {meetup.formattedDate}
          </span>
          <span>
            <MdPlace size={16} color="#AFA8B1" />
            {meetup.location}
          </span>
        </Footer>
      </Content>
    </Container>
  );
}
