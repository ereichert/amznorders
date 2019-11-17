import OrderParsingServices from '@/services/OrderParsingServices';
import * as OrderListTestData from '../../testdata/OrderListTestData';
test('OrderparsingService.fromCSV returns the right number of Orders.', () => {
    const orders = OrderParsingServices.fromCSV(OrderListTestData.orderCSV);
    expect(orders.length).toEqual(OrderListTestData.numberOfTestRecords);
});
//# sourceMappingURL=OrderParsingServices.spec.js.map