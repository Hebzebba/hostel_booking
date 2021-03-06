import React,{useState,useEffect} from 'react';
import ReactMapGl,{Marker} from 'react-map-gl';
import Header from './header'
import Footer from './footer'
import { connect,useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import { fetchData } from '../store/actions/actions';



const Map = (props) => { 
    const getUnique = (items, value) => {
		return [...new Set(items.map((item) => item[value]))];
	};

    useEffect(() => { 
        props.dispatch(fetchData())
    },[])

    const list = useSelector((state) => state.data);
	const { datalist } = list;

    let types = getUnique(datalist, 'hostel_type');
	types = ['all', ...types];


    const [viewset, setVeiwSet] = useState({
    width: "100%",
    height: "80vh",
    latitude: 6.064593,
    longitude: -0.262835,
    zoom: 15
    })
    return <div>
        <Header links={types}/>
        <ReactMapGl {...viewset} mapboxApiAccessToken="pk.eyJ1Ijoia2VsaXZpbiIsImEiOiJja2UzbmZwdXIwYjZpMnJsNnA0ZHRndTdlIn0.dzxHm9Nnj50hDXc03bR27g"
        mapStyle="mapbox://styles/kelivin/cke5mokht2a8q19oga0xnh2yy"
        onViewportChange={nextViewport => setVeiwSet(nextViewport)}
        >
            {props.data.map(result => (
                <Marker key={result._id} latitude={result.latitude} longitude={result.longitude}>
                    <Link to={`/details/${result._id}`}>
                        <small className="text-light">{result.hostel_name}</small>
                    <button className="marker">
                        <img src="images/marker.png" width="100%" alt=""/>
                        </button>
                    </Link>
                </Marker>
            ))}
        </ReactMapGl> 
        <Footer />
    </div>
}
const mapStateToProps = state => ({
    data : state.data.datalist
})
export default connect(mapStateToProps)(Map);