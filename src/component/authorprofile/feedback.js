import React, { Component } from 'react';
import axios from '../../axiosInstance';
import Modal from '../modal/modal';

class FeedBack extends Component {

    state = {
        response: '',
        show: false
    }

    fade = () => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                show: false
            })
        }, 2000)
    }


    sendFeedback = () => {
        if(localStorage.getItem('userName') === null) {
            this.setState({
                ...this.state,
                response: 'you need to Signin to give feedback',
                show: true
            })
            this.fade();
        } else {
            let url='/profile/feedback/'+this.props.userName;
            let userName = localStorage.getItem('userName');
            let feed = document.getElementById('feed').value;

            axios.post(url,{
                userName:userName,
                feed:feed
            })
            .then(res=>{
                this.setState({
                    ...this.state,
                    response: res.data,
                    show: true
                })
                this.fade();
            })
            .catch(err=> {
                alert(err);
            })
        }
    }


    render() {
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return (
            <div class="container-fluid text-center">
            {message}
            <p><b>Give FeedBack</b></p>  
            <form class="form col-sm-4 col-sm-offset-4">
                <textarea class="form-control" rows="5" id="feed"></textarea>
                <div>
                    <button type="button" class="btn btn-danger" onClick={this.sendFeedback}>Send</button>
                 </div>
            </form>
          </div>
                )
            }
}

export default FeedBack;