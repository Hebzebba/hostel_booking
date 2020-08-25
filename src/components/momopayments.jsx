import React from 'react';



const MomoPayment = (props) => { 
return  <>
        <div style={{width:"50%" ,margin:"10px auto"}}>
        <div className="card p-3">
                <div className="card-title text-primary">Tigo cash payment process</div>
                <div className="card-body">
                    <p>1. Dial *170#</p>
                    <p>2. Select option 2 (MoMoPay & Bill Pay)</p>
                    <p>3. Select option 1 (MoMoPay)</p>
                    <p>4. Enter Merchant ID – 673601</p>
                    <p>5. Enter amount</p>
                    <p>6. Enter reference (Email)</p>
                    <p>7. Confirm payment and enter your PIN
Kindly note that this booking will fail after 2 days so act now.
</p>
                    <p>6. Press 1 to confirm</p>
                </div>
            </div>
     </div>
 </>
}

export default MomoPayment;