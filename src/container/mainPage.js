import React,{ Component } from 'react';
import NavBar from '../component/navbar/navbar';
import RecentPost from '../component/recentPost/recentPost';
import PopularPost from '../component/popularPost/popularPost';

class MainPage extends Component {

    render() {
        return (
           <div className="text-center">
               <NavBar></NavBar>
               <RecentPost></RecentPost><br/>
               <PopularPost></PopularPost>
           </div> 
            
        )
    }
}

export default MainPage;