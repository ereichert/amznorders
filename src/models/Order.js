export default class Order {
    constructor(orderDate, orderId, paymentInstrumentType, shipmentDate, totalCharged) {
        this.orderId = orderId;
        this.paymentInstrumentType = paymentInstrumentType;
        this.shipmentDate = shipmentDate;
        this.totalCharged = totalCharged;
        this.orderURL = process.env.VUE_APP_AMZN_ORDER_DETAILS_URL.replace('{orderId}', orderId);
    }
}
//# sourceMappingURL=Order.js.map