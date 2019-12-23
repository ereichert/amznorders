import Papa from 'papaparse';
import Order from '@/models/Order';

export default class OrderParsingServices {
  private static readonly ORDER_DATE_IDX = 0;

  private static readonly ORDER_ID_IDX = 1;

  private static readonly PAYMENT_INSTRUMENT_TYPE_IDX = 2;

  private static readonly SHIPMENT_DATE_IDX = 6;

  private static readonly TOTAL_CHARGED_IDX = 20;

  static fromCSV = (csvOrders: string): Array<Order> => {
    const parsedOrders = Papa.parse(csvOrders);
    parsedOrders.data.shift(); // remove the headers
    return parsedOrders.data.map(order => new Order(
      order[OrderParsingServices.ORDER_DATE_IDX],
      order[OrderParsingServices.ORDER_ID_IDX],
      order[OrderParsingServices.PAYMENT_INSTRUMENT_TYPE_IDX],
      order[OrderParsingServices.SHIPMENT_DATE_IDX],
      order[OrderParsingServices.TOTAL_CHARGED_IDX],
    ));
  };
}
