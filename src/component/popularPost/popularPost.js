import React, {Component} from 'react';
import PopularBlog from './popularBlog';
import Control from './carouselControl';
import Indicator from './carouselIndicator';

class PopularPost extends Component {

    render() {

        return (
            <div className="container">
            <h3>Popular Post</h3><br/>
            <div className="row">
            <div className="col-sm-8 ">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <Indicator></Indicator>
                    <PopularBlog></PopularBlog>
                    <Control></Control>               
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default PopularPost;