import React from 'react';
import { MDBDataTable } from 'mdbreact';

const TableData = () => {
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
		rows: [
			{
				name: 'Howard Hatfield',
				gender: 'Male',
				level: '100',
				hosteltype: 'Mixed',
				roomtype: '1 in a room',
				roomnumber: 'A401',
				date: '2008/12/16',
				confirm: <button>Confirm</button>,
			},
			{
				name: 'Howard Hatfield',
				gender: 'Male',
				level: '100',
				hosteltype: 'Mixed',
				roomtype: '1 in a room',
				roomnumber: 'A401',
				date: '2008/12/16',
			},
			{
				name: 'Howard Hatfield',
				gender: 'Male',
				level: '100',
				hosteltype: 'Mixed',
				roomtype: '1 in a room',
				roomnumber: 'A401',
				date: '2008/12/16',
			},
			{
				name: 'Seth Gregory',
				gender: 'Female',
				level: '200',
				hosteltype: 'Boys',
				roomtype: '2 in a room',
				roomnumber: 'A403',
				date: '2008/12/16',
			},
		],
	};

	return <MDBDataTable striped bordered small data={data} />;
};

export default TableData;
