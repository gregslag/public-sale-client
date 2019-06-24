import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Home from './views/Home';
import PublicSales from './views/PublicSales';
import PublicSaleDetails from './views/PublicSaleDetails';
import CreatePublicSale from './views/CreatePublicSale';

import PublicRoute from './containers/PublicRoute';
import ProtectedRoute from './containers/ProtectedRoute';

import GlobalStyles from './stylesheets/global';

import history from './history';

import { Container, Content } from './styles';

const AppRouter = () => (
  <Container>
    <Content>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <PublicRoute path="/" exact component={Home} />
          <ProtectedRoute path="/leiloes" component={PublicSales} />
          <ProtectedRoute path="/novo-leilao" component={CreatePublicSale} />
          <ProtectedRoute path="/leilao/:id" component={PublicSaleDetails} />
        </Switch>
      </Router>
    </Content>
  </Container>
);

export default AppRouter;
