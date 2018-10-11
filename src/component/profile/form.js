import React, { Component } from 'react';
import axios from '../../axiosInstance';
import img from '/home/abhishek/Desktop/blogfrontend/src/images.png';
import Modal from '../modal/modal';

class Form extends Component {

    state = {
        fullName: '',
        contact: '',
        skills: '',
        imgURL : '',
        response: '',
        show: false
    }


    componentDidMount = () => {
        let userName = localStorage.getItem('userName');
        let url = '/profile/' + userName;

        axios.get(url)
            .then(res => {
                console.log('componentDidmount======>', res.data);

                if (!res.data) {
                    this.setState({
                        ...this.state,
                        fullName: '',
                        contact: '',
                        skills: '',
                        imgURL:img
                    })
                } else {
                    this.setState({
                        ...this.state,
                        fullName: res.data.fullName,
                        contact: res.data.contact,
                        skills: res.data.skills,
                        imgURL :'http://localhost:2700/'+res.data.profileImage
                    })
                }


            })
            .catch(err => {
                alert(err);
            })
    }


    getData = (e, id) => {
        let data = e.target.value;
        console.log("getData=====>", data, id);

        if (id === 'fullName') {
            this.setState({
                ...this.state,
                fullName: data
            })
        }

        if (id === 'contact') {
            this.setState({
                ...this.state,
                contact: data
            })
        }

        if (id === 'skills') {
            this.setState({
                ...this.state,
                skills: data
            })
        }


    }
    fade = () => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                show: false
            })
        }, 2000)
    }

    updateProfile = () => {
        var formData = new FormData();

        let userName = localStorage.getItem('userName');
        let fname = this.state.fullName;
        let contact = this.state.contact;
        let skills = this.state.skills;
        let image = document.getElementById('img');
        let imagefile = image.files[0];

        formData.append('userName', userName);
        formData.append('fullName', fname);
        formData.append('contact', contact);
        formData.append('skills', skills);
        formData.append("myImage", imagefile);

        axios.post('/profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            .then(res => {
                console.log('updated data====>',res.data);
                this.setState({
                    ...this.state,
                    fullName: res.data.post.fullName,
                    contact: res.data.post.contact,
                    skills: res.data.post.skills,
                    imgURL :'http://localhost:2700/'+res.data.post.profileImage,
                    response: res.data.message,
                    show: true
                })
                this.fade();
            })
            .catch(err => {
                alert(err);
            })

    }

    render() {
        console.log('render====>',this.state.imgURL);
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return (         
            <div>
                 {message}
                <div className="col-sm-4 col-sm-offset-4">
                    <img src={this.state.imgURL} className="img-responsive img-rounded" alt="Avatar" /><br /><br />
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div>
                        <form className="form-horizontal" autoComplete="off">
                            <div className="form-group">
                                <label>UserName</label>
                                <input type="email" className="form-control" id="email" value={localStorage.getItem('userName')} />
                            </div>
                            <div className="form-group">
                                <label>fullName</label>
                                <input type="text" className="form-control" id="fname" value={this.state.fullName} onChange={(e) => this.getData(e, 'fullName')} />
                            </div>
                            <div className="form-group">
                                <label>Contact</label>
                                <input type="text" className="form-control" id="contact" value={this.state.contact} onChange={(e) => this.getData(e, 'contact')} />
                            </div>
                            <div className="form-group">
                                <label>Skills</label>
                                <textarea className="form-control rounded-0" id="skills" rows="3" value={this.state.skills} onChange={(e) => this.getData(e, 'skills')}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Upload Image</label>
                                <input type="file" id="img" />
                            </div>
                            <button type="button" className="btn btn-success" onClick={this.updateProfile} >Update</button>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}

export default Form;