export const parseToMoneyBRL = value => (value
  ? Number(parseFloat(value).toFixed(2)).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  : '-');