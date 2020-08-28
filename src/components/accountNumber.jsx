import React from 'react';



const AccountNumber = (props) => { 
    
    return <>
        <div style={{width:"50%",margin:"0px auto"}}>
            <h6>Bank name : <b>{props.bankName}</b></h6>
            <input type="number" style={{ width: "100%", border: "0.5px solid blue", paddingLeft: "30px", borderRadius: "2px" }} placeholder="Account number" defaultValue={props.accountNumber} disabled={true}/>
        </div>
    </>
}

export default AccountNumber;