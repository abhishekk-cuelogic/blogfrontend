import React, { Component } from 'react';
import axios from '../../axiosInstance';
import img from '/home/abhishek/Desktop/blogfrontend/src/images.png'

class Form extends Component {

    state = {
        fullName: '',
        contact: '',
        skills: '',
        imgURL : ''
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

    // b64toBlob = (b64Data, contentType, sliceSize) => {
    //     contentType = contentType || '';
    //     sliceSize = sliceSize || 512;

    //     var byteCharacters = atob(b64Data);
    //     var byteArrays = [];

    //     for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    //         var slice = byteCharacters.slice(offset, offset + sliceSize);

    //         var byteNumbers = new Array(slice.length);
    //         for (var i = 0; i < slice.length; i++) {
    //             byteNumbers[i] = slice.charCodeAt(i);
    //         }

    //         var byteArray = new Uint8Array(byteNumbers);

    //         byteArrays.push(byteArray);
    //     }

    //     var blob = new Blob(byteArrays, { type: contentType });
    //     return blob;
    // }

    updateProfile = () => {
        var formData = new FormData();

        let userName = localStorage.getItem('userName');
        let fname = this.state.fullName;
        let contact = this.state.contact;
        let skills = this.state.skills;
        let image = document.getElementById('img');
        let imagefile = image.files[0];

        // if (image.files.length === 0) {
        //     imagefile = img;
        //     var block = imagefile.split(";");
        //     var contentType = block[0].split(":")[1];
        //     var realData = block[1].split(",")[1];
        //     var blob = this.b64toBlob(realData, contentType);
        //     imagefile = blob;
        // } else {
        //     imagefile = image.files[0];
        // }
        console.log('=====>', imagefile);
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
                    fullName: res.data.doc.fullName,
                    contact: res.data.doc.contact,
                    skills: res.data.doc.skills,
                    imgURL :'http://localhost:2700/'+res.data.doc.profileImage
                })
                alert(res.data.message);
            })
            .catch(err => {
                alert(err);
            })

    }

    render() {
        console.log('render====>',this.state.imgURL);
        return (
            <div>
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