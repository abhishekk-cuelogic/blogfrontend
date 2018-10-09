import React, { Component } from 'react';
import axios from '../../axiosInstance';

class UserMessage extends Component {

    state = {
        messages: []
    }

    componentWillMount = () => {
        let userName = localStorage.getItem('userName');
        let url = '/profile/message/' + userName;

        axios.get(url)
            .then(res => {
                console.log('message====>', res.data);
                if(res.data){
                    this.setState({
                        ...this.state,
                        messages: res.data
                    })
                }      
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        let usermessages = null;

        if(this.state.messages !== undefined) {
            usermessages = this.state.messages.map((obj,index) => {
                let c='active text-left'
                if(index%2 == 0) {
                    c='success text-left'
                }
                return <tbody>
                            <tr class={c}>
                                <td><b>UserName:{obj.userName}</b><br/><b>Message:{obj.msg}</b></td>
                            </tr>
                        </tbody>
            })
        }
        

        return (
            <div class="container">
                <br /><br />
                <table class="table">
                    <thead>
                        <tr>
                            <th><h3>Messages</h3></th>
                        </tr>
                    </thead>
                    {usermessages}
                </table>
            </div>

        )
    }
}

export default UserMessage;