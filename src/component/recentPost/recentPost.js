import React,{Component} from 'react';
import BlogDiv from './blogDiv';


class RecentPost extends Component {

    render() {

        return (
            <div className="container-fluid bg-3 text-center"> 
            <h3>Recent Post</h3><br/>   
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