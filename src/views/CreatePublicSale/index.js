import React, { useState } from 'react';
import moment from 'moment';

import { createPublicSaleApi } from '../../services/publicSale';

import {
  Container,
  Title,
  Form,
  Label,
  Input,
  FormField,
  Button,
  Error
} from './styles';

import history from '../../history';

const CreatePublicSale = ({ match }) => {
  const [product, setProduct] = useState({
    description: '',
    value: 1,
    end: ''
  });
  const [error, setError] = useState(null);

  const createPublicSale = async e => {
    e.preventDefault();
    try {
      const seller = JSON.parse(localStorage.getItem('user'))._id;
      await createPublicSaleApi({
        product: { ...product, end: moment(product.end) },
        seller
      });
      history.push('/leiloes');
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  const setField = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  return (
    <Container>
      <Title>Novo Leilão</Title>
      <Form onSubmit={createPublicSale}>
        <FormField>
          <Label>Qual o produto que você deseja leiloar?</Label>
          <Input
            name="description"
            value={product.description}
            onChange={setField}
          />
        </FormField>
        <FormField>
          <Label>Qual o valor inicial?</Label>
          <Input name="value" value={product.value} onChange={setField} />
        </FormField>
        <FormField>
          <Label>Até quando o leilão ficará aberto?</Label>
          <Input
            name="end"
            type="date"
            value={product.end}
            onChange={setField}
          />
        </FormField>
        <Button type="submit">Criar</Button>
        <Error>{error}</Error>
      </Form>
    </Container>
  );
};

export default CreatePublicSale;
