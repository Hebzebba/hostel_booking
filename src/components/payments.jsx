import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function Payment(props) {
	const [value, setValue] = useState();
	return (
		<div className="conatiner m-3">
			<div className=" card p-3">
				<div className="card-title">
					Payment method offline mobile money payment
				</div>
				<div className="card-body">
					<p>Thank you for initiating your payment</p>
					<p>Make payment for your booking by following the steps below</p>
					<p>1. Dial *170#</p>
					<p>2. Select Option 2 (MoMoPay & Bill Pay)</p>
					<p>3. Select option 1 (MoMoPay)</p>
					<p>4. Enter Merchant ID - {props.merchant_id}</p>
					<p>5. Enter Amount </p>
					<p>6. Enter reference (Index Number) </p>
					<p>7. Confirm payment and enter your pin</p>
				</div>
			</div>
		</div>
	);
}

export default Payment;
