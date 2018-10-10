import React,{Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from '../../axiosInstance';
import validator from 'validator';
import Modal from '../modal/modal';


class BlogForm extends Component {

    state={
        content:null,
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

    validate = (title,authorname,catagory) => {
        
        var imagefile = document.getElementById('img');

          if(validator.isEmpty(title)) {
              this.setState({
                ...this.state,
                response: 'plese Enter Title',
                show: true
                })
            this.fade();
              return false;
          }

          if(validator.isEmpty(authorname)) {
              this.setState({
                ...this.state,
                response: 'plese enter AuthorName',
                show: true
            })
            this.fade();
              return false;
          }

          if(validator.isEmpty(catagory)) {
              this.setState({
                ...this.state,
                response: 'plese enter Catagory',
                show: true
            })
            this.fade();
              return false;
          }

          if(imagefile.files.length === 0) {
              this.setState({
                ...this.state,
                response: 'Plese attach Imagefile to your Blog',
                show: true
            })
            this.fade();
              return false;
          }

          if(this.state.content === null) {
              this.setState({
                ...this.state,
                response: 'Content need to be long and Meaningful',
                show: true
            })
            this.fade();
              return false;
          }

          return true;

    }


    handleEditorChange = (e) => {
        this.setState({content: e.target.getContent()})
      }

    postBlog = () => {

        var formData = new FormData();

        let userName=localStorage.getItem('userName');
        let title=document.getElementById('title').value;
        let authorName=document.getElementById('aname').value;
        let catagory=document.getElementById('catagory').value;
        let content=this.state.content;
        var imagefile = document.getElementById('img');
        var videofile = document.getElementById('video');

        if(this.validate(title,authorName,catagory)) {
            formData.append('userName',userName);
            formData.append('title',title);
            formData.append('authorName',authorName);
            formData.append('catagory',catagory);
            formData.append('content',content);
            formData.append("myImage", imagefile.files[0]);
            formData.append("myImage",videofile.files[0]);

        axios.post('/post', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }})
            .then(res => {
                this.setState({
                    ...this.state,
                    response: res.data,
                    show: true
                })
                this.fade();
            })
            .catch( err => {
                alert(err);
            })
        
        let activity = 'You posted blog '+title+' on '+new Date();

        axios.put('/useractivity',{
            userName:userName,
            activity:activity
        })
        .then(res => {})
        .catch(err => {alert(err);})

        console.log(this.state.content);
        }        
    }


    render() {
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return (
            <div className="col-sm-8 col-sm-offset-2">
            {message}
            <div>
                    <form className="form-horizontal" autoComplete="off">
                            <div className="form-group">
                                <label for="email">Title</label>
                                <input type="text" className="form-control" id="title" name='title'/>
                            </div>
                            <div className="form-group">
                                <label for="fname">Author Name</label>
                                <input type="text" className="form-control" id="aname" name='authorname'/>
                            </div>
                            <div className="form-group">
                                <label for="fname">Catagory</label>
                                <input type="text" className="form-control" id="catagory" name='catagory'/>
                            </div>
                            <div className="form-group">
                            <label>Content</label>
                                <Editor
                                    initialValue="<p>Use Shift+Enter for Single line Spacing</p>"
                                    init={{
                                    plugins: 'link image code',
                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                                    editor_css : "/content_css.css"
                                    }}
                                    onChange={this.handleEditorChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Upload Image</label>
                                <input type="file" id="img" name='myImage'/>     
                            </div>
                            <div className="form-group">
                                <label>Upload Video</label>
                                <input type="file" id="video" name='myImage'/>     
                            </div>
                            <button type="button" className="btn btn-success" onClick={this.postBlog}>Post Blog</button>
                        </form>
            </div>
            </div>
        )
    }
}

export default BlogForm;