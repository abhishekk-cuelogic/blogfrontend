import React,{Component} from 'react';
import img from '/home/abhishek/Desktop/blogfrontend/src/images.png';
import Form from './form';
import axios from '../../axiosInstance';

class Profile extends Component {

    // state = {
    //     img : img
    // }


    // componentDidMount = () => {
    //     let url = '/profile/'+localStorage.getItem('userName');

    //     axios.get(url)
    //     .then(res => {
    //         if(res.data) {
    //             this.setState({
    //                 ...this.state,
    //                 img : 'http://localhost:2700/'+res.data.profileImage
    //             })
    //         }
    //     })
    // }

    render(){

       // console.log("renderImage========>",this.state.img);


        return(
            <div className="container">
                  <Form></Form>
            </div>
        )
    }
}

export default Profile;