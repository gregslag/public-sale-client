import styled, { css } from 'styled-components';
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

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: max-content;
  margin-bottom: 30px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Text = styled.span``;

export const Subtitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
  text-decoration: underline;
  width: 100%;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const Bid = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

export const Input = styled.input`
  border: 2px solid #eee;
  border-radius: 3px;
  height: 40px;
  width: 190px;
  padding: 2px 10px;
`;
export const Button = styled.button`
  background: ${colors.darkBlue};
  color: #fff;
  border: none;
  border-radius: 3px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`;
export const Error = styled.p`
  color: red;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 150px;
  border: 2px solid #eee;
  border-radius: 3px;
  margin: 10px;
  text-decoration: none;
  position: relative;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Choose = styled(Button)`
  position: absolute;
  top: 5px;
  right: 5px;
  margin: 0;
  height: 20px;
  width: 70px;
  font-size: 11px;

  ${({ chosen }) =>
    chosen &&
    css`
      background: green;
      cursor: auto;
    `}
`;
