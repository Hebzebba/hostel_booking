import React from 'react';



const TigoPayment = (props) => { 
    return <>
        <div style={{width:"50%" ,margin:"10px auto"}}>
        <div className="card p-3">
                <div className="card-title text-primary">Tigo cash payment process</div>
                <div className="card-body">
                    <p>1. Dial *110#</p>
                    <p>2. Select Option 1 (Send cash)</p>
                    <p>3. Enter Hostel Number</p>
                    <p>4. Enter Amount </p>
                    <p>5. Enter PIN</p>
                    <p>6. Press 1 to confirm</p>

                </div>
            </div>
     </div>
 </>
}

export default TigoPayment;