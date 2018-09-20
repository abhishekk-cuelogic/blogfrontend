import React,{ Component } from 'react';
import NavBar from '../../component/navbar/navbar';
import Profile from '../../component/profile/profile';

class ProfilePage extends Component {

    render() {
        return (
           <div>
               <NavBar></NavBar>
               <Profile></Profile>
           </div> 
            
        )
    }
}

export default ProfilePage;