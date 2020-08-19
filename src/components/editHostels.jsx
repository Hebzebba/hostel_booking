import React, { useEffect,useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteHostel } from '../store/actions/actions';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import EditHostelForm from './editHostelForm';


const EditHostels = (props) => {
const [modal,setModal] = useState(false)


const toggle = () => {
	setModal(!modal)

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
				// width: 300,
			},
			{
				label: 'Price',
				field: 'price',
				sort: 'asc',
				// width: 100,
			},
			{
				label: 'Edit',
				field: 'edit',
				sort: 'asc',
				// width: 50,
			},
			{
				label: 'Delete',
				field: 'delete',
				sort: 'asc',
				// width: 50,
			},
		],

		rows: datalist.map(dat => ({
			name: dat.hostel_name,
			price: dat.price,
			edit: <button className="btn btn-primary btn-sm" onClick={toggle}>Edit</button>,
			delete: <button className="btn btn-danger btn-sm" onClick={()=>deleteHostel(dat._id)}>Delete</button>,
		}))
	};

	
	return (
		<div>
		<MDBDataTable striped bordered small data={data} />
	 <MDBModal isOpen={modal} toggle={toggle} size="lg">
        <MDBModalHeader toggle={toggle}>Edit hostel</MDBModalHeader>
        <MDBModalBody>
          <EditHostelForm />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
			</MDBModal>
			</div>
	);
}

export default EditHostels;
