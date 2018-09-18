import React, {Component} from 'react';
import PopularBlog from './popularBlog';
import Control from './carouselControl';
import Indicator from './carouselIndicator';
import SubscribePost from '../subScribePost/subScribePost';

class PopularPost extends Component {

    render() {

        return (
        <div className="row">
            <div className="col-sm-6 well">
                <h4 className="text center">Popular Post</h4>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <Indicator></Indicator>
                    <PopularBlog></PopularBlog>
                    <Control></Control>               
                </div>
            </div>
            <div className="col-sm-4 col-sm-offset-1">
                <h4 className="text center">Subscription</h4>
                <SubscribePost></SubscribePost>
                <SubscribePost></SubscribePost>
                <SubscribePost></SubscribePost>
            </div>
        </div>

        )
    }
}

export default PopularPost;