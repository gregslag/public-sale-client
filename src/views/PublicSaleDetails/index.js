import React, { useEffect, useState } from 'react';
import moment from 'moment';

import {
  getPublicSaleApi,
  sendBidApi,
  closePublicSaleApi,
  chooseBidApi
} from '../../services/publicSale';
import { parseToMoneyBRL } from '../../utils/parser';

import {
  Container,
  Title,
  Details,
  Detail,
  Label,
  Text,
  Subtitle,
  List,
  Item,
  Input,
  Button,
  Header,
  Bid,
  Error,
  Choose
} from './styles';

const PublicSaleDetails = ({ match }) => {
  const [user, setUser] = useState({});
  const [publicSale, setPublicSale] = useState({});
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const getPublicSale = async () => {
    try {
      const { id } = match.params;
      const data = await getPublicSaleApi(id);
      setPublicSale(data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendBid = async () => {
    setError('');
    if (!value) {
      setError('Digite um valor para efetuar o lance');
    } else {
      try {
        await sendBidApi({ user, value }, publicSale._id);
        setValue('');
        getPublicSale();
      } catch (err) {
        console.log(err);
        setError(err.response.data.error);
      }
    }
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    setUser(userId);
    getPublicSale();
  }, []); // eslint-disable-line

  const closePublicSale = async () => {
    setError('');
    try {
      await closePublicSaleApi(publicSale._id);
      getPublicSale();
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  const choose = async bidId => {
    setError('');
    try {
      await chooseBidApi(publicSale._id, bidId);
      getPublicSale();
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  const { product = {}, seller = {} } = publicSale;
  const { bids = [] } = publicSale;

  const isActive = moment().isBefore(product.end) && publicSale.active;
  return (
    <Container>
      <Error>{error}</Error>
      <Title>Detalhes do leilão</Title>
      <Details>
        <Detail>
          <Label>Vendedor: </Label>
          <Text>{seller.name}</Text>
        </Detail>
        <Detail>
          <Label>Criado em: </Label>
          <Text>
            {moment(publicSale.created).format('DD/MM/YYYY HH:mm:ss')}
          </Text>
        </Detail>
        <Detail>
          <Label>Aberto até: </Label>
          <Text>{moment(product.end).format('DD/MM/YYYY HH:mm:ss')}</Text>
        </Detail>

        <Subtitle>Produto</Subtitle>
        <Detail>
          <Label>Descrição: </Label>
          <Text>{product.description}</Text>
        </Detail>
        <Detail>
          <Label>Valor: </Label>
          <Text>{parseToMoneyBRL(product.value)}</Text>
        </Detail>
      </Details>
      {user === seller._id && isActive && (
        <Button type="button" onClick={closePublicSale}>
          Encerrar
        </Button>
      )}
      <Header>
        {user !== seller._id && isActive && (
          <Bid>
            <div>
              <Input
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
              />
              <Button type="button" onClick={sendBid}>
                Lance
              </Button>
            </div>
          </Bid>
        )}

        <Subtitle>Lances</Subtitle>
      </Header>
      {bids.length ? (
        <List>
          {bids.map(bid => (
            <Item key={bid._id}>
              {user === seller._id && isActive && (
                <Choose onClick={() => choose(bid._id)}>Escolher</Choose>
              )}
              {bid.chosen && (
                <Choose chosen onClick={() => {}}>
                  Escolhido
                </Choose>
              )}
              <Detail>
                <Label>Usuário: </Label>
                <Text>{bid.user.name}</Text>
              </Detail>
              <Detail>
                <Label>Valor: </Label>
                <Text>{parseToMoneyBRL(bid.value)}</Text>
              </Detail>
              <Detail>
                <Label>Data: </Label>
                <Text>{moment(bid.date).format('DD/MM/YYYY HH:mm:ss')}</Text>
              </Detail>
            </Item>
          ))}
        </List>
      ) : (
        <p>Este leilão não recebeu nenhum lance :(</p>
      )}
    </Container>
  );
};

export default PublicSaleDetails;
