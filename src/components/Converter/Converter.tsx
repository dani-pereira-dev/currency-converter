import { Alert, Button, Card, InputAdornment, TextField } from '@mui/material';

import {
  Container,
  ExchangeRatePerUnit,
  LastUpdate,
  ResultContainer,
  Value,
  styles,
} from './style';
import ButtonIcon from '../../assets/button.svg';
import { Dropdown } from '../Dropdown/Dropdown';
import { useConverter, useCurrencyList, useValidation } from '../../hooks';
import { useCoverterContext } from '../../store/converter';
import { errorMessage } from '../../constants';
import { avoidPositiveAndNegativeSigns } from '../../utils';

export const Converter = () => {
  const { currencies, dropDownsOptions } = useCurrencyList();
  const { amount, setAmount, from, setFrom, to, setTo } = useCoverterContext();
  const { convertedAmount, rate } = useConverter(amount, from, to);
  const { error } = useValidation(amount);

  const invertSelection = () => {
    setTo(from);
    setFrom(to);
  };

  return (
    <Card elevation={3} style={styles.card} className="card">
      <Container id="converter-container">
        <TextField
          type="number"
          label="Amount"
          variant="outlined"
          error={!!error}
          helperText={error ? errorMessage : null}
          className="input"
          style={styles.amountField}
          disabled={!dropDownsOptions}
          onKeyDown={avoidPositiveAndNegativeSigns}
          value={amount}
          onChange={event => {
            const amount = event.target.value;
            setAmount(amount);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{from.symbol}</InputAdornment>
            ),
          }}
        />
        <Dropdown
          label="From"
          onChange={event => {
            const selectedFrom = event.target.value;
            const from = currencies[selectedFrom];
            setFrom({ currency: selectedFrom, ...from });
          }}
          options={dropDownsOptions || []}
          disabled={!dropDownsOptions}
          value={from.currency}
        />
        <Button disabled={!dropDownsOptions} onClick={invertSelection}>
          <img src={ButtonIcon} alt="Invert selection" />
        </Button>
        <Dropdown
          label="To"
          onChange={event => {
            const selectedTo = event.target.value;
            const to = currencies[selectedTo];
            setTo({ currency: selectedTo, ...to });
          }}
          options={dropDownsOptions || []}
          disabled={!dropDownsOptions}
          value={to.currency}
        />
      </Container>
      <ResultContainer>
        <Value>{`${amount || 0} ${from.name} =`}</Value>
        <Value>{`${convertedAmount || 0} ${to.name}`}</Value>
        <ExchangeRatePerUnit>{`1 ${from.currency} = ${rate} ${to.currency}`}</ExchangeRatePerUnit>
        <Alert severity="info" icon={false} style={styles.warningBox}>
          We use the mid-market rate for our Converter. This is for
          informational <br />
          purposes only. You won’t receive this rate when sending money.
        </Alert>
        <LastUpdate>
          {`${from.name} to ${to.name} conversion — Last updated Dec 15, 2022, 19:17 UTC`}
        </LastUpdate>
      </ResultContainer>
    </Card>
  );
};
