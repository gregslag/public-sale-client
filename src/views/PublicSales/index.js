import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { getPublicSalesApi } from '../../services/publicSale';
import { parseToMoneyBRL } from '../../utils/parser';

import {
  Container,
  Title,
  List,
  Item,
  Button,
  Header,
  Hint,
  Closed
} from './styles';

const PublicSales = () => {
  const [publicSales, setPublicSales] = useState([]);

  const getPublicSales = async () => {
    try {
      const data = await getPublicSalesApi();
      setPublicSales(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPublicSales();
  }, []);

  return (
    <Container>
      <Header>
        <Link to={'/novo-leilao'}>
          <Button>Novo leilão</Button>
        </Link>
        <Title>Leilões disponíveis</Title>
      </Header>
      <List>
        {publicSales.map(publicSale => {
          const isActive =
            moment().isBefore(publicSale.product.end) && publicSale.active;
          return (
            <Item key={publicSale._id} to={`/leilao/${publicSale._id}`}>
              {!isActive && <Closed>Encerrado</Closed>}
              <p>
                <b>Produto:</b> {publicSale.product.description}
              </p>
              <p>
                <b>Valor:</b> {parseToMoneyBRL(publicSale.product.value)}
              </p>
              <p>
                <b>Lances:</b> {publicSale.bids.length}
              </p>
              <Hint>
                <b>Aberto até:</b>{' '}
                {moment(publicSale.product.end).format('DD/MM/YYYY HH:mm:ss')}
              </Hint>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default PublicSales;
