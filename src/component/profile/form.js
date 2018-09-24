import React, {Component} from 'react';
import axios from '../../axiosInstance';


class Form extends Component {


    updateProfile = () => {

        var formData = new FormData();

        let userName=localStorage.getItem('userName');
        let fname=document.getElementById('fname').value;
        let contact=document.getElementById('contact').value;
        let skills=document.getElementById('skills').value;
        var imagefile = document.getElementById('img');

        formData.append('userName',userName);
        formData.append('fullName',fname);
        formData.append('contact',contact);
        formData.append('skills',skills);
        formData.append("myImage", imagefile.files[0]);

        axios.post('/profile', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }})
            .then(res => {
                alert(res);
            })
            .catch( err => {
                alert(err);
            })

    }

    render() {
        return(
            <div className="col-sm-8 col-sm-offset-2">
                <div>
                        <form className="form-horizontal" autoComplete="off">
                                <div className="form-group">
                                    <label for="email">UserName</label>
                                    <input type="email" className="form-control" id="email" value={localStorage.getItem('userName')} />
                                </div>
                                <div className="form-group">
                                    <label for="fname">Full Name</label>
                                    <input type="text" className="form-control" id="fname"/>
                                </div>
                                <div className="form-group">
                                    <label for="fname">Contact</label>
                                    <input type="text" className="form-control" id="contact"/>
                                </div>
                                <div className="form-group">
                                <label>Skills</label>
                                 <textarea className="form-control rounded-0" id="skills" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Upload Image</label>
                                    <input type="file" id="img"/>     
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.updateProfile} >Update</button>
                            </form>
                </div>
                </div>
   
        )

       
        
    }
}

export default Form;