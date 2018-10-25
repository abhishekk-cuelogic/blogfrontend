import React, { Component } from 'react';
import Modal from '../modal/modal';
import PostControl from '../../services/postControlService';

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
        if (localStorage.getItem('userName') === null) {
            this.setState({
                ...this.state,
                response: 'you need to Signin to give feedback',
                show: true
            })
            this.fade();
        } else {
            let url = '/profile/feedback/' + this.props.userName;
            let userName = localStorage.getItem('userName');
            let feed = document.getElementById('feed').value;

            if (feed !== '') {


                PostControl.sendFeedBack(url, userName, feed)
                    .then(res => {
                        this.setState({
                            ...this.state,
                            response: res.data,
                            show: true
                        })
                        this.fade();
                    })
                    .catch(err => {
                        alert(err);
                    })
            } else {
                this.setState({
                    ...this.state,
                    response: 'Plese enter FeedBack',
                    show: true
                })
                this.fade();
            }

        }
    }

    sendMessage = () => {
        if (localStorage.getItem('userName') === null) {
            this.setState({
                ...this.state,
                response: 'you need to Signin to send Message',
                show: true
            })
            this.fade();
        } else {
            let url = '/profile/message/' + this.props.userName;
            let userName = localStorage.getItem('userName');
            let msg = document.getElementById('msg').value;


            if (msg !== '') {
                PostControl.sendMessage(url, userName, msg)
                    .then(res => {
                        this.setState({
                            ...this.state,
                            response: res.data,
                            show: true
                        })
                        this.fade();
                    })
                    .catch(err => {
                        alert(err);
                    })
            } else {
                this.setState({
                    ...this.state,
                    response: 'Plese enter message',
                    show: true
                })
                this.fade();
            }

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
                    <br />
                </form>
                <div class="container-fluid text-center">
                    <form class="form-inline">
                        <input type="text" class="form-control" size="50" placeholder="send message" id='msg' />
                        <button type="button" class="btn btn-danger" onClick={this.sendMessage}>Send Message</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FeedBack;