import React, {Component} from 'react';
import NavBar from '../../components/navbar/navbar';
import BannerCarousel from "../../components/bannerCarousel/bannerCarousel";

class Home extends Component {
    render() {
        return (
            <div>
            <NavBar/>
                <BannerCarousel/>
            </div>
        );
    }
}

export default Home;