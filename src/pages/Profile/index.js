import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Content>
        <Form initialData={user} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo"></Input>
          <Input name="email" placeholder="Seu endereço de e-mail"></Input>

          <hr />

          <Input
            type="password"
            name="oldPassword"
            placeholder="Sua senha atual"
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="Nova senha"
          ></Input>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmação de senha"
          ></Input>

          <button type="submit">
            <MdAddCircleOutline size={24} color="#fff" />
            Salvar perfil
          </button>
        </Form>
      </Content>
    </Container>
  );
}
