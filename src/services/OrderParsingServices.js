import Papa from 'papaparse';
import Order from '@/models/Order';
export default class OrderParsingServices {
}
OrderParsingServices.ORDER_DATE_IDX = 0;
OrderParsingServices.ORDER_ID_IDX = 1;
OrderParsingServices.PAYMENT_INSTRUMENT_TYPE_IDX = 2;
OrderParsingServices.SHIPMENT_DATE_IDX = 6;
OrderParsingServices.TOTAL_CHARGED_IDX = 20;
OrderParsingServices.fromCSV = (csvOrders) => {
    const parsedOrders = Papa.parse(csvOrders);
    parsedOrders.data.shift();
    return parsedOrders.data.map(order => new Order(order[OrderParsingServices.ORDER_DATE_IDX], order[OrderParsingServices.ORDER_ID_IDX], order[OrderParsingServices.PAYMENT_INSTRUMENT_TYPE_IDX], order[OrderParsingServices.SHIPMENT_DATE_IDX], order[OrderParsingServices.TOTAL_CHARGED_IDX]));
};
//# sourceMappingURL=OrderParsingServices.js.map