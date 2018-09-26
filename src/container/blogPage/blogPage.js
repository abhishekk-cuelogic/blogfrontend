import React,{Component} from 'react';
import NavBar from '../../component/navbar/navbar';
import Blog from '../../component/blog/blog';

class BlogPage extends Component {

    render() {
        return(
            <div>
                <NavBar></NavBar>
                <Blog id={this.props.match.params.id}></Blog>
            </div>
        )
    }
}

export default BlogPage;