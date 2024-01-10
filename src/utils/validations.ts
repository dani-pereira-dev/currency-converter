const isPositiveNumber = (cadena: string) => {
  const regex = /^[+]?(?:\d*\.\d+|\d+)$/;
  return regex.test(cadena);
};

export const amountValidation = (amount: string) => isPositiveNumber(amount);

export const avoidPositiveAndNegativeSigns = (
  event: React.KeyboardEvent<HTMLDivElement>,
) => {
  const keyPressed = event.key;

  if (keyPressed === '-' || keyPressed === '+') {
    event.preventDefault();
  }
};
