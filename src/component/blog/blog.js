import React,{ Component } from 'react';
import AuthorInfo from './authorInfo/authorInfo';
import BlogInfo from './blogInfo/blogInfo';
import Comment from './comment/comment';
import CommentDisplay from './comment/commentDisplay';


class Blog extends Component {
    render() {
        return(
                <div className="container">
                    <div className="col-sm-9 col-sm-offset-1">
                        <AuthorInfo></AuthorInfo><hr/>
                        <BlogInfo></BlogInfo>
                        <Comment></Comment>
                        <CommentDisplay></CommentDisplay>
                        <CommentDisplay></CommentDisplay>
                    </div>
                </div>       
        )
    }
}

export default Blog;