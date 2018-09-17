import React,{ Component } from 'react';
import NavBar from '../component/navbar/navbar';
import BlogSummary from '../component/blogSummary/blogSummary';

class MainPage extends Component {

    render() {
        return (
           <div>
               <NavBar></NavBar>
               <BlogSummary></BlogSummary>
           </div> 
            
        )
    }
}

export default MainPage;