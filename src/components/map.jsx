import React,{useState,useEffect} from 'react';
import ReactMapGl,{Marker} from 'react-map-gl';
import Header from './header'
import Footer from './footer'
import { connect } from 'react-redux'

import { fetchData } from '../store/actions/actions';



const Map = (props) => { 

console.log(props.data)
    useEffect(() => { 
        props.dispatch(fetchData())
    },[])
    const [viewset, setVeiwSet] = useState({
    width: "100%",
    height: "80vh",
    latitude: 6.064593,
    longitude: -0.262835,
    zoom: 15
    })
    return <div>
        <Header />
        <ReactMapGl {...viewset} mapboxApiAccessToken="pk.eyJ1Ijoia2VsaXZpbiIsImEiOiJja2UzbmZwdXIwYjZpMnJsNnA0ZHRndTdlIn0.dzxHm9Nnj50hDXc03bR27g"
        mapStyle="mapbox://styles/kelivin/cke5mokht2a8q19oga0xnh2yy"
        onViewportChange={nextViewport => setVeiwSet(nextViewport)}
        >

        </ReactMapGl>
        <Footer />
    </div>
}
const mapStateToProps = state => ({
    data : state.data.datalist
})
export default connect(mapStateToProps)(Map);