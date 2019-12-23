import { OrderParsingServices, ParsingResult } from '@/services/OrderParsingServices';
import * as OrderListTestData from '../../testdata/OrderListTestData';

test('When an error occurs during parsing, the OrderParsingServices.fromCSV '
  + 'returns a result with an error.', () => {
  const parsingResult: ParsingResult = OrderParsingServices.fromCSV('');

  expect(parsingResult.hasErrors()).toBeTruthy();
});

test('When no errors occur during parsing, OrderParsingServices.fromCSV '
  + 'returns a result without errors.', () => {
  const parsingResult = OrderParsingServices.fromCSV(OrderListTestData.orderCSV);

  expect(parsingResult.hasErrors()).toBeFalsy();
});

test('When no errors occur during parsing, OrderParsingServices.fromCSV '
  + 'returns the right number of Orders.', () => {
  const parsingResult = OrderParsingServices.fromCSV(OrderListTestData.orderCSV);

  expect(parsingResult.orders.length).toEqual(OrderListTestData.numberOfTestRecords);
});
