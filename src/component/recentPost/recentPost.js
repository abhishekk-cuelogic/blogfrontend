import React,{Component} from 'react';
import BlogDiv from './blogDiv';


class RecentPost extends Component {

    render() {

        return (
            <div className="container-fluid bg-3 text-center"> 
            <h4>Recent Post</h4>   
            <div className="row">
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
            </div>
          </div>
        )
    }
}

export default RecentPost;