import styled from 'styled-components';

export const styles = {
  card: {
    display: 'inline-block',
    width: '80%',
    zIndex: 1,
  },
  warningBox: {
    alignSelf: 'end',
    fontSize: 'var(--font-size-small)',
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--color-text-warning-box)',
    margin: '12px 0',
  },
  amountField: {
    paddingBottom: 20,
  },
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Value = styled.p`
  font-size: var(--font-size-extra-large);
`;
export const ExchangeRatePerUnit = styled.p`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-normal);
  color: var(--color-unit-result);
  margin: 20px 0;
`;
export const WarningBox = styled.p`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-normal);
  color: var(--color-unit-result);
`;
export const LastUpdate = styled.p`
  align-self: end;
  font-size: var(--font-size-extra-small);
  font-weight: var(--font-weight-light);
`;
