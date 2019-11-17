const orderCSV = `Order Date,Order ID,Payment Instrument Type,Website,Purchase Order Number,Ordering Customer Email,Shipment Date,Shipping Address Name,Shipping Address Street 1,Shipping Address Street 2,Shipping Address City,Shipping Address State,Shipping Address Zip,Order Status,Carrier Name & Tracking Number,Subtotal,Shipping Charge,Tax Before Promotions,Total Promotions,Tax Charged,Total Charged,Buyer Name,Group Name
10/30/19,748-6211750-6593305,Gift Certificate/Card and Visa - 1234,Amazon.com,,emailaddress@domain.local,11/09/19,The Order Creator,1234 Street Address,,City,VA,55555,Shipped,AMZN_US(TBA98674299527830030),$44.83,$0.00,$2.29,$6.72,$2.29,$40.40,buyername,
10/30/19,388-1627616-4893117,Gift Certificate/Card and Visa - 1234,Amazon.com,,emailaddress@domain.local,11/11/19,The Order Creator,1234 Street Address,,City,VA,55555,Shipped,AMZN_US(TBA21838939110764879),$16.09,$0.00,$0.77,$3.22,$0.77,$13.64,buyername,
10/30/19,637-3652294-0990928,Visa - 1234 and Gift Certificate/Card,Amazon.com,,emailaddress@domain.local,11/11/19,The Order Creator,1234 Street Address,,City,VA,55555,Shipped,AMZN_US(TBA01422901009683603),$14.49,$0.00,$0.74,$2.17,$0.74,$13.06,buyername,
10/30/19,584-0938792-2159957,Visa - 1234 and Gift Certificate/Card,Amazon.com,,emailaddress@domain.local,11/11/19,The Order Creator,1234 Street Address,,City,VA,55555,Shipped,AMZN_US(TBA81893363177593299),$18.99,$0.00,$0.97,$2.85,$0.97,$17.11,buyername,
10/30/19,202-4450693-6947429,Gift Certificate/Card and Visa - 1234,Amazon.com,,emailaddress@domain.local,11/09/19,The Order Creator,1234 Street Address,,City,VA,55555,Shipped,AMZN_US(TBA15305329044903647),$47.90,$0.00,$1.00,$7.19,$1.00,$41.71,buyername,`;
const numberOfTestRecords = orderCSV.split('\n').length - 1; // subtract one for the headers.

export {
  orderCSV,
  numberOfTestRecords,
};
