import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';


const Last = (props) => { 
     
    
    return (<div className="container p-3">
        <div className="card-body">
            <p>Thank you for initiating</p>
            <p>Your payment process will be completed in an hour time!</p>
        </div>
        <div className="card" style={{width:"80%",margin:"0px auto",padding:"10px"}}>
            <h6>Full name : {localStorage.getItem('user')}</h6>
            <h6>Gender : {localStorage.getItem('gender')} </h6>
            <h6>Level : {localStorage.getItem('level')} </h6>
            <h6>Contact : {props.phone_number} </h6>
            <h6>Hostel Name : {props.hostelName} </h6>
            <h6>Room type : {props.roomType}</h6>
            <h6>Room number : {props.roomNumber} </h6>
            <h6>Bed type : {props.Bed} </h6>
            <h6>Date : {`${new Date().toDateString()}` } </h6>
            <small className="text-danger">Note: Changes can't be made if submitted</small>
        </div>
</div>)
}

const mapStateToProps = state => ({
    roomType: state.book.room_type,
    roomNumber: state.book.room_number,
    Bed: state.book.bed,
    phone_number: state.book.phone_number,
});
export default connect(mapStateToProps)(Last);