import styled from 'styled-components';
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
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

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
  color: #FFF;
  border: none;
  border-radius: 3px;
  width: 150px;
  height: 40px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`;
export const Error = styled.p`
  color: red;
`;