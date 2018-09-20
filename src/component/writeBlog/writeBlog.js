import React,{Component} from 'react';
import BlogForm from './blogForm';
import NavBar from '../navbar/navbar';

class WriteBlog extends Component {
    render() {

        return(
            <div>
                <NavBar></NavBar>
                <h2 className="text-center">Write the Blog</h2>
                <BlogForm></BlogForm>
            </div>
            
        )
    }
}

export default WriteBlog;