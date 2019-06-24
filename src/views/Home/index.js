import React, { useState } from 'react';
import { createUserApi } from '../../services/user';

import history from '../../history';

import { Container, Form, Title, Label, Input, Button, Error } from './styles';

const Home = () => {
  const [name, setUser] = useState('');
  const [error, setError] = useState(null);

  const createUser = async e => {
    e.preventDefault();
    setError(null);

    if (!name) {
      setError('Informe o seu nome');
    } else {
      try {
        const user = await createUserApi({ name });
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/leiloes');
      } catch (err) {
        setError('Ocorreu um problema ao criar o usuário');
      }
    }
  };

  return (
    <Container>
      <Title>Public Sale</Title>
      <Form onSubmit={createUser}>
        <Label>Digite seu nome: </Label>
        <Input
          value={name}
          onChange={({ target: { value } }) => setUser(value)}
        />
        <Button type="submit">Prosseguir</Button>
        <Error>{error}</Error>
      </Form>
    </Container>
  );
};

export default Home;
