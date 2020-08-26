import React, { useEffect} from 'react';
import Header from './header'
import Footer from './footer'
import { fetchData } from '../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const About = (props) => {

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


    return <div>
        <Header links={types} />
        <div className="about-banner"></div>
        <div className="about-content">
            <div className="about-img">
                <img src="images/nelson1.png" alt="" width="100%"/>
            </div>
            <div className="about-text">
                <h3>About-Us</h3>
                <p>
                    This website is an  online booking service which aid
                    students of Koforidua Technical University to make a 
                    reservation of hostels.
                    We have over 20 hostels which suits the preference of every students.
                </p>
            </div>
        </div>
        <Footer />
    </div>
}
 
export default About;