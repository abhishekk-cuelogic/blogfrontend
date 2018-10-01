import React, {Component} from 'react';
import PopularBlog from './popularBlog';
import Control from './carouselControl';
import Indicator from './carouselIndicator';
import SubscribePost from '../subScribePost/subScribePost';


class PopularPost extends Component {

    render() {

        return (
        <div className="row">
            <div className="col-sm-7">
                <h4 className="text center">Popular Post</h4>
                <div id="myCarousel" className="carousel slide well" data-ride="carousel">
                    <Indicator></Indicator>
                    <PopularBlog></PopularBlog>
                    <Control></Control>               
                </div>
            </div>
            <div className="col-sm-5">
                <h4 className="text center">You May Like</h4>
                <SubscribePost></SubscribePost>
            </div>
        </div>

        )
    }
}

export default PopularPost;