import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../stylesheets';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  border: 2px solid #eee;
  border-radius: 3px;
  margin: 10px;
  color: #565656;
  text-decoration: none;
  position: relative;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.p`
  width: 100%;
`;
export const Input = styled.input`
  border: 2px solid #eee;
  border-radius: 3px;
  height: 40px;
  width: 300px;
  padding: 2px 10px;
`;
export const Button = styled.button`
  background: ${colors.darkBlue};
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 150px;
  height: 40px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  margin-right: 40px;
`;
export const Error = styled.p`
  color: red;
`;

export const Hint = styled.p`
  font-size: 11px;
`;

export const Closed = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
  margin: 0;
  height: 20px;
  width: 70px;
  font-size: 10px;
  cursor: auto;
  background: red;
`;