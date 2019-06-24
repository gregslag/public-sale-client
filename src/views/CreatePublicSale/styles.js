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

export const Subtitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
  text-decoration: underline;
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

export const FormField = styled.div``;

export const Label = styled.p`
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 2px solid #eee;
  border-radius: 3px;
  height: 40px;
  width: 300px;
  padding: 2px 10px;
  margin-bottom: 10px;
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
  cursor: pointer;
  margin-top: 20px;
`;

export const Error = styled.p`
  color: red;
`;
