import React,{ Component } from 'react';
import NavBar from '../../component/navbar/navbar';
import RecentPost from '../../component/recentPost/recentPost';
import PopularPost from '../../component/popularPost/popularPost';
import Footer from '../../component/footer/footer';


class MainPage extends Component {

    render() {
        return (
           <div className="text-center">
               <NavBar></NavBar>
               <RecentPost></RecentPost><hr/>
               <PopularPost></PopularPost><hr/>
               <Footer></Footer>
           </div> 
            
        )
    }
}

export default MainPage;