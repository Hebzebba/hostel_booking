import React, { useEffect,useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteHostel } from '../store/actions/actions';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import EditHostelForm from './editHostelForm';


const EditHostels = (props) => {
	const [modal, setModal] = useState(false)
	const [hostel_id, setHostel_Id] = useState();


const toggle = (id) => {
	setModal(!modal)
	setHostel_Id(id)
}
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchData());
	}, []);

	const list = useSelector((state) => state.data);
	const { datalist } = list;
	

	const data = {
		columns: [
			{
				label: 'Hostel name',
				field: 'name',
				sort: 'asc',
				
			},
			{
				label: 'Price',
				field: 'price',
				sort: 'asc',
				
			},
			{
				label: 'Edit',
				field: 'edit',
				sort: 'asc',
				
			},
			{
				label: 'Delete',
				field: 'delete',
				sort: 'asc',
			
			},
		],

		rows: datalist.map(dat => ({
			name: dat.hostel_name,
			price: dat.price,
			edit: <button className="btn btn-primary btn-sm" onClick={()=>toggle(dat._id)}>Edit</button>,
			delete: <button className="btn btn-danger btn-sm" onClick={()=>deleteHostel(dat._id)}><a href="/dashboard" className="text-light">Delete</a></button>,
		}))
	};

	
	return (
		<div>
		<MDBDataTable striped bordered small data={data} />
	 <MDBModal isOpen={modal} toggle={toggle} size="lg">
        <MDBModalHeader toggle={toggle}>Edit hostel</MDBModalHeader>
        <MDBModalBody>
          <EditHostelForm hostelId={hostel_id} />
        </MDBModalBody>
	</MDBModal>
			</div>
	);
}

export default EditHostels;
