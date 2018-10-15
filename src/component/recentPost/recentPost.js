import React,{Component} from 'react';
import BlogDiv from './blogDiv';


class RecentPost extends Component {

    render() {
        console.log('Recentpost render====>',this.props.recentPosts[0]);

        let blogDiv = this.props.recentPosts.map( (post,index) => {
            return(
                <BlogDiv key={index} post={post} />
            )
        })
        return (
            <div className="container-fluid bg-3 text-center"> 
            <h4><b>Recent Post</b></h4> <hr/>  
            <div className="row ">
                {blogDiv}
            </div>
          </div>
        )
    }
}


export default RecentPost;