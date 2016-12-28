'use strict';

var Simpl = require('../lib/index');

console.log(Simpl);

var simpl = new Simpl({
    mode: 'sandbox',
    clientSecret: 'secret'
});

console.log(simpl);

simpl.createTransaction({
  "transaction_token": "7b9eb806a37e5ba6f2dfbf9d428cc5f4",
  "amount_in_paise": 1000,
  "items": [{
    "sku": "123123123",
    "quantity": 1,
    "unit_price_in_paise": 1000,
    "display_name": "apples"
    }],
  "shipping_address": {
    "line1": "Shipping line1",
    "line2": "Shipping line2",
    "city": "Mumbai",
    "state": "Maharastra",
    "pincode": "400072"
  },
  "billing_address": {
    "line1": "Shipping line1",
    "line2": "Shipping line2",
    "city": "Mumbai",
    "state": "Maharastra",
    "pincode":"400072"
    },
  "shipping_amount_in_paise": 0,
  "discount_in_paise": 0,
  "metadata":[
    {"key1": "value"},
    {"key1": "value"}
  ],
}, function (error, response) {
    console.log(error, response);
});
