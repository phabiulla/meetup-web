import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, MdKeyboardArrowRight } from 'react-icons/md';
import pt from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import history from '~/services/history';

import api from '~/services/api';
import { Container, Content, MeetupHeader, MeetupList } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(m => {
        return {
          ...m,
          formattedDate: format(parseISO(m.date), "dd 'de' MMMM', às' H'h'", {
            locale: pt,
          }),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  function handleNewOrEditMeetup(meetup) {
    history.push('/meetup', { meetup: meetup });
  }

  function handleDetailMeetup(meetup) {
    history.push('/meetup-detail', { meetup: meetup });
  }

  return (
    <Container>
      <Content>
        <MeetupHeader>
          <label>My Meetups</label>
          <button onClick={() => handleNewOrEditMeetup({})}>
            <MdAddCircleOutline size={20} color="#fff" />
            New Meetup
          </button>
        </MeetupHeader>

        <MeetupList>
          {meetups.map(meetup => (
            <li key={meetup.id} onClick={() => handleDetailMeetup(meetup)}>
              <label>{meetup.title}</label>
              <span>
                {meetup.formattedDate}
                <MdKeyboardArrowRight size={20} color="#fff" />
              </span>
            </li>
          ))}
        </MeetupList>
      </Content>
    </Container>
  );
}
