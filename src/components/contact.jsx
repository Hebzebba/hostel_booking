import React,{useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Header from './header'
import Footer from './footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/actions/actions';




const Contact = () => {
  const getUnique = (items, value) => {
		return [...new Set(items.map((item) => item[value]))];
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, []);
	const list = useSelector((state) => state.data);
	const { datalist, loading, error } = list;

	let types = getUnique(datalist, 'hostel_type');
	types = ['all', ...types];

return (
<div className="contact">
    <Header links={types}/>
    <div className="contact-form">
      <form>
        <p className="h4 text-center mb-4">Write to us</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text text-light">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text text-light">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text text-light">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text text-light">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </div>
            <Footer />
        </div>
      );
    };

    export default Contact;