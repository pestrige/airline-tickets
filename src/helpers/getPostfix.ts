const postfixs = ['пересадка', 'пересадки', 'пересадок'];

export const getPostfix = (value: number) => {
  const lastChar = value % 10;
  if (value > 10 && value < 20) {
    return postfixs[2];
  }
  if (lastChar > 1 && lastChar < 5) {
    return postfixs[1];
  }
  if (lastChar === 1) {
    return postfixs[0];
  }
  return postfixs[2];
};
