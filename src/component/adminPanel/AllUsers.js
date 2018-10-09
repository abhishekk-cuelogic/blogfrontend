import React from 'react';
import axios from '../../axiosInstance';
import Modal from '../modal/modal';

class AllUsers extends React.Component {

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

    deleteUser = (userName) =>{
        let url = '/'+userName;

        let token=localStorage.getItem('token');

        const data = {
            token: token
        }

        axios.delete(url,{data})
        .then(res => {
            this.setState({
                ...this.state,
                response: res.data,
                show: true
            })
            this.fade();
        })
        .catch(err => {
            this.setState({
                ...this.state,
                response: err,
                show: true
            })
            this.fade();
        })

    } 


    render() {

        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }

        let img='http://localhost:2700/'+this.props.profile.profileImage;
        return (
            <div className="container">
                {message}
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-3">
                        <div>
                            <img src={img} className="img-responsive" alt="Avatar"></img>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="text-left" style={{ color: 'black' }}>
                            <b><p>{this.props.profile.userName}</p></b>
                        </div>
                        <button type="button" class="btn btn-default" onClick={()=>this.deleteUser(this.props.profile.userName)}>
                            <span class="glyphicon glyphicon-trash"></span> DELETE
                        </button>
                    </div>
                    
                </div>
                </div>
        )
    }
}

export default AllUsers;