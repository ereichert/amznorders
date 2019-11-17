import { fireEvent, render } from '@testing-library/vue';
import Orders from '@/components/Orders.vue';
import * as OrderListTestData from '../../testdata/OrderListTestData';
test('When the Load Orders button is clicked, the correct number of Orders should be processed.', async () => {
    const { getByRole, getByLabelText, queryAllByText } = render(Orders);
    const ordersCSVTextArea = getByLabelText('Order CSV:');
    const loadOrdersButton = getByRole('button');
    await fireEvent.update(ordersCSVTextArea, OrderListTestData.orderCSV);
    await fireEvent.click(loadOrdersButton);
    const ordersList = queryAllByText(/\d{3}-\d{7}-\d{7}/);
    expect(ordersList.length).toEqual(OrderListTestData.numberOfTestRecords);
});
test('When the Orders view is loaded there should be an empty textarea for the Orders CSV.', async () => {
    const { getByLabelText } = render(Orders);
    const ordersCSVTextArea = getByLabelText('Order CSV:');
    expect(ordersCSVTextArea.textContent).toEqual('');
});
test('When the Orders view is loaded there should be a Load Orders button.', async () => {
    const { getByText } = render(Orders);
    getByText('Load Orders');
});
test('When the the Orders view is loaded it should not have any orders.', async () => {
    const { getByText } = render(Orders);
    const ordersSection = getByText('Amazon Orders');
    const ordersList = ordersSection.nextElementSibling;
    if (ordersList) {
        const ordersListItems = ordersList.getElementsByTagName('li');
        expect(ordersListItems.length).toEqual(0);
    }
    else {
        fail('The Amazon Orders list should have been defined but was not found in the DOM.');
    }
});
test('The Orders view should render.', () => {
    render(Orders);
});
//# sourceMappingURL=Orders.spec.js.map