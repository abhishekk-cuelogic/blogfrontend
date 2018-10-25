import React, { Component } from 'react';
import userActivity from '../../services/userActivityService';

class UserActivity extends Component {

    state = {
        userActivity: []
    }

    componentWillMount = () => {
        let userName = localStorage.getItem('userName');
        let url = '/useractivity/' + userName;

        userActivity.getUserActivity(url)
        .then(res => {
            console.log('useractivity====>', res.data);
                if(res.data){
                    this.setState({
                        ...this.state,
                        userActivity: res.data.useractivity
                    })
                }      
        })
        .catch(err => {
            alert(err);
        })
    }

    render() {
        let userActivity = null;

        if(this.state.userActivity !== undefined) {
             userActivity = this.state.userActivity.map((obj,index) => {
                let c='active text-left'
                if(index%2 == 0) {
                    c='success text-left'
                }
                return <tbody>
                            <tr class={c}>
                                <td><b>{obj.activity}</b></td>
                            </tr>
                        </tbody>
            })
        }
        

        console.log('state==>',this.state.userActivity);

        return (
            <div class="container">
                <br /><br />
                <table class="table">
                    <thead>
                        <tr>
                            <th><h3>UserActivity</h3></th>
                        </tr>
                    </thead>
                    {userActivity}
                </table>
            </div>

        )
    }
}

export default UserActivity;