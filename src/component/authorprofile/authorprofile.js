import React,{ Component } from 'react';
import NavBar from '../navbar/navbar';
import FeedBack from './feedback';
import ProfileService from '../../services/profileService';

class AuthorProfile extends Component {

    state = {
        profile : {}
    }

    componentWillMount = () => {
        let url ='/profile/'+this.props.match.params.userName;

        ProfileService.getProfile(url)
        .then(res => {
            this.setState({
                ...this.state,
                profile: res.data
            })
        })
        .catch(err => {
            alert(err);
        })
    }

    render () {

        const card={
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            maxWidth:'300px',
            margin: 'auto',
            textAlign:'left',
        }

        const title ={
            color:'grey',
            fontSize:'18px'
        }

        let img = null;
        let follower,following = 0
        

        if(this.state.profile !== undefined) {
            img = 'http://localhost:2700/'+this.state.profile.profileImage
            if(this.state.profile.followers !== undefined) {
                follower=this.state.profile.followers.length;
                following = this.state.profile.following.length
            }
            
        }

        return(
            <div>
            <NavBar/>
            <div style={card}>
                <img src={img} alt="John" style={{width:'100%'}}/>
                <h4 style={{textAlign : 'center'}}>{this.state.profile.userName}</h4>
                <p>Followers {follower}</p>
                <p>Following {following}</p>
            </div>
            <FeedBack userName={this.state.profile.userName}/>
            </div>
        )
    }
}

export default AuthorProfile;