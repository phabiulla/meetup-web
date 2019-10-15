import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import history from '~/services/history';
import { Container, Content } from './styles';
import BannerInput from './BannerInput';
import Datepicker from '~/components/Datepicker';
import {
  storeMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

export default function Meetup() {
  const user = useSelector(state => state.user.user);
  const { meetup } = history.location.state;
  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (meetup.id) {
      dispatch(updateMeetupRequest({ ...data, id: meetup.id }));
    } else {
      dispatch(storeMeetupRequest({ ...data, user_id: user.id }));
    }
  }

  return (
    <Container>
      <Content>
        <Form initialData={meetup} onSubmit={handleSubmit}>
          <BannerInput name="banner_id" required />

          <Input
            autoComplete="off"
            name="title"
            placeholder="Title"
            required
          ></Input>

          <Input
            multiline
            autoComplete="off"
            name="description"
            required
            placeholder="Description"
          ></Input>

          <Datepicker
            autoComplete="off"
            name="date"
            required
            placeholderText="Date"
          />

          <Input
            autoComplete="off"
            name="location"
            required
            placeholder="Location"
          ></Input>

          <button className="action">
            <MdAddCircleOutline size={20} color="#fff" />
            Save Meetup
          </button>
        </Form>
      </Content>
    </Container>
  );
}
