import styled from 'styled-components';
import { colors } from './stylesheets';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  position: relative;
`;

export const Button = styled.button`
  background: ${colors.darkBlue};
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 70px;
  height: 30px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;