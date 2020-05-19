import React, { useEffect } from 'react';
import paymaya from 'paymaya-js-sdk';

type Props = {};

//dummy data
enum ShippingType {
  ST = 'ST',
  SD = 'SD',
}

const exampleCheckoutObject = {
  totalAmount: {
    value: 100,
    currency: 'PHP',
    details: {
      discount: 0,
      serviceCharge: 0,
      shippingFee: 0,
      tax: 0,
      subtotal: 100,
    },
  },
  buyer: {
    firstName: 'John',
    middleName: 'Paul',
    lastName: 'Doe',
    birthday: '1995-10-24',
    customerSince: '1995-10-24',
    sex: 'M',
    contact: {
      phone: '+639181008888',
      email: 'merchant@merchantsite.com',
    },
    shippingAddress: {
      firstName: 'John',
      middleName: 'Paul',
      lastName: 'Doe',
      phone: '+639181008888',
      email: 'merchant@merchantsite.com',
      line1: '6F Launchpad',
      line2: 'Reliance Street',
      city: 'Mandaluyong City',
      state: 'Metro Manila',
      zipCode: '1552',
      countryCode: 'PH',
      shippingType: ShippingType.ST, // ST - for standard, SD - for same day
    },
    billingAddress: {
      line1: '6F Launchpad',
      line2: 'Reliance Street',
      city: 'Mandaluyong City',
      state: 'Metro Manila',
      zipCode: '1552',
      countryCode: 'PH',
    },
  },
  items: [
    {
      name: 'Canvas Slip Ons',
      quantity: 1,
      code: 'CVG-096732',
      description: 'Shoes',
      amount: {
        value: 100,
        details: {
          discount: 0,
          serviceCharge: 0,
          shippingFee: 0,
          tax: 0,
          subtotal: 100,
        },
      },
      totalAmount: {
        value: 100,
        details: {
          discount: 0,
          serviceCharge: 0,
          shippingFee: 0,
          tax: 0,
          subtotal: 100,
        },
      },
    },
  ],
  redirectUrl: {
    success: 'http://localhost:3000/status/success',
    failure: 'http://localhost:3000/status/failure',
    cancel: 'http://localhost:3000/status/cancel',
  },
  requestReferenceNumber: '1551191039',
  metadata: {},
};
//end of dummy data

const Checkout = (props: Props): JSX.Element => {
  useEffect(() => {
    paymaya.init('pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah', true);
    paymaya.createCheckout(exampleCheckoutObject);
  }, []);

  return (
    <div>
      <h1>Checking out</h1>
      <div style={{ display: 'flex', flexFlow: 'column ' }}>
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
