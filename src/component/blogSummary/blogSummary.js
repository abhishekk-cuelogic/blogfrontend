import React,{Component} from 'react';
import BlogDiv from './blogDiv';


class BlogSummary extends Component {

    render() {

        return (
            <div class="container-fluid bg-3 text-center">    
            <h3>Recent Post</h3><br/>
            <div class="row">
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
                <BlogDiv></BlogDiv>
            </div>
          </div>
        )
    }
}

export default BlogSummary;