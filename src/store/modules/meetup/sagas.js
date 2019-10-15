import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

export function* storeMeetup({ payload }) {
  try {
    const {
      title,
      description,
      location,
      date,
      banner_id,
      user_id,
    } = payload.data;

    yield call(api.post, 'meetups', {
      title,
      description,
      location,
      date,
      banner_id,
      user_id,
    });
    toast.success('Meetup created successfully!');

    history.push('/dashboard');
  } catch (err) {
    toast.error('Error creating new meetup, check your data.');
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, title, description, location, date, banner_id } = payload.data;

    yield call(api.put, `meetups/${id}`, {
      title,
      description,
      location,
      date,
      banner_id,
    });

    toast.success('Meetup updated successfully!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Error updating meetup, check your data.');
  }
}

export function* cancelMeetup({ payload }) {
  try {
    yield call(api.delete, `meetups/${payload.id}`);

    toast.success('Meetup canceled successfully!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Error canceling meetup, check your data.');
  }
}

export default all([
  takeLatest('@meetup/STORE_MEETUP_REQUEST', storeMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
