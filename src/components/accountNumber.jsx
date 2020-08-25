import React from 'react';



const AccountNumber = (props) => { 
    return <>
        <div style={{width:"50%",margin:"0px auto"}}>
        <h6>Bank name</h6>
            <input type="number" style={{ width: "100%", border: "0.5px solid blue", padding: "10px",borderRadius:"2px" }} placeholder="Account number" />
        </div>
    </>
}

export default AccountNumber;