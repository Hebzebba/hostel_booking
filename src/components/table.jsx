import React, { useEffect } from 'react';
import {connect} from 'react-redux'

import { MDBDataTable } from 'mdbreact';
import { fetchBookedData } from '../store/actions/actions';


const TableData = (props) => {

	useEffect(() => { 
		props.dispatch(fetchBookedData())
	}, []);
	
	console.log(props.data)

	const data = {
		columns: [
			{
				label: 'Name',
				field: 'name',
				sort: 'asc',
				width: 150,
			},

			{
				label: 'Gender',
				field: 'gender',
				sort: 'asc',
				width: 200,
			},
			{
				label: 'Level',
				field: 'level',
				sort: 'asc',
				width: 100,
			},
			{
				label: 'Hostel Name',
				field: 'hostelName',
				sort: 'asc',
				width: 100,
			},
			{
				label: 'Hostel Type',
				field: 'hosteltype',
				sort: 'asc',
				width: 150,
			},
			{
				label: 'Room Type',
				field: 'roomtype',
				sort: 'asc',
				width: 150,
			},
			{
				label: 'Room Number',
				field: 'roomnumber',
				sort: 'asc',
				width: 150,
			},
			{
				label: 'Mobile Number',
				field: 'mobilenumber',
				sort: 'asc',
				width: 150,
			},
			{
				label: 'Date',
				field: 'date',
				sort: 'asc',
				width: 100,
			},
			{
				label: 'Confirm',
				field: 'confirm',
				sort: 'asc',
				width: 150,
			},
		],

		rows: props.data.map(dat => ({
			name: dat.full_name,
			gender: dat.gender,
			level: dat.level,
			hostelName:dat.hostelName,
			hosteltype: dat.hostel_type,
			roomtype: dat.room_type,
			roomnumber:dat.room_code,
			mobilenumber:dat.tel_number,
			date: dat.date,
			confirm: <button className="btn btn-danger btn-sm">Confirm</button>
		}))
	};

	return <MDBDataTable striped bordered small data={data} />;
};
const mapStateToProps = state => ({
	data:state.bookedData.bookData
})
export default connect(mapStateToProps)(TableData);
