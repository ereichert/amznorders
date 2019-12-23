import Papa from 'papaparse';
import Order from '@/models/Order';

export class ParsingResult {
  orders: Array<Order> = [];

  errors: Array<string> = [];

  constructor(orders: Array<Order>, errors: Array<string> = []) {
    this.orders = orders;
    this.errors = errors;
  }

  hasErrors(): boolean {
    return this.errors.length !== 0;
  }
}

export class OrderParsingServices {
  private static readonly ORDER_DATE_IDX = 0;

  private static readonly ORDER_ID_IDX = 1;

  private static readonly PAYMENT_INSTRUMENT_TYPE_IDX = 2;

  private static readonly SHIPMENT_DATE_IDX = 6;

  private static readonly TOTAL_CHARGED_IDX = 20;

  static fromCSV = (csvOrders: string): ParsingResult => {
    const parsedOrders = Papa.parse(csvOrders);
    let parsingResult: ParsingResult;
    if (parsedOrders.errors.length === 0) {
      parsedOrders.data.shift(); // remove the headers
      const orders = parsedOrders.data.map(order => new Order(
        order[OrderParsingServices.ORDER_DATE_IDX],
        order[OrderParsingServices.ORDER_ID_IDX],
        order[OrderParsingServices.PAYMENT_INSTRUMENT_TYPE_IDX],
        order[OrderParsingServices.SHIPMENT_DATE_IDX],
        order[OrderParsingServices.TOTAL_CHARGED_IDX],
      ));

      parsingResult = new ParsingResult(orders);
    } else {
      const errorMessages = parsedOrders.errors.map(error => error.message);
      parsingResult = new ParsingResult([], errorMessages);
    }
    return parsingResult;
  };
}
