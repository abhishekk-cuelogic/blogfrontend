import React,{ Component } from 'react';
import SubscribeBlog from './subscribeBlog';


class SubscribePost extends Component {

    render() {
        return (
            <div className="row well">
                <SubscribeBlog></SubscribeBlog>
            </div>
        )
    }
}

export default SubscribePost;