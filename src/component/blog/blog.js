import React,{ Component } from 'react';
import AuthorInfo from './authorInfo/authorInfo';
import BlogInfo from './blogInfo/blogInfo';
import Comment from './comment/comment';
import CommentDisplay from './comment/commentDisplay';
import axios from '../../axiosInstance';


class Blog extends Component {

    state = {
        Post : {}
    }

    componentWillMount = () => {
        let url = '/post/id/'+this.props.id;

        axios.get(url)
        .then(response => {
            this.setState({
                ...this.state,
                Post: response.data
            });
        })
        .catch(error => {
            console.log(error);
        })
    }


    render() {
        console.log('render blog======>',this.state.Post)
        return(
                <div className="container">
                    <div className="col-sm-9 col-sm-offset-1">
                        <AuthorInfo 

                        authorName={this.state.Post.authorName}
                        date={this.state.Post.date} 

                        /><hr/>

                        <BlogInfo
                        
                        title={this.state.Post.title}
                        image={this.state.Post.image} 
                        postContent={this.state.Post.postContent}
                        
                        />
                        <Comment></Comment>
                        <CommentDisplay></CommentDisplay>
                        <CommentDisplay></CommentDisplay>
                    </div>
                </div>       
        )
    }
}

export default Blog;