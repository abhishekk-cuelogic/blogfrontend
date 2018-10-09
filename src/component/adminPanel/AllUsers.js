import React from 'react';
import axios from '../../axiosInstance';

class AllUsers extends React.Component {

    deleteUser = (userName) =>{
        let url = '/'+userName;

        axios.delete(url)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert(err);
        })

    } 


    render() {

        let img='http://localhost:2700/'+this.props.profile.profileImage;
        return (
            <div className="container">
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