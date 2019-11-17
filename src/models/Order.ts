export default class Order {
  orderId: string;

  paymentInstrumentType: string;

  shipmentDate: string;

  totalCharged: string;

  orderURL: string;

  constructor(orderDate: string,
    orderId: string,
    paymentInstrumentType: string,
    shipmentDate: string,
    totalCharged: string) {
    this.orderId = orderId;
    this.paymentInstrumentType = paymentInstrumentType;
    this.shipmentDate = shipmentDate;
    this.totalCharged = totalCharged;
    this.orderURL = process.env.VUE_APP_AMZN_ORDER_DETAILS_URL!.replace('{orderId}', orderId);
  }
}
