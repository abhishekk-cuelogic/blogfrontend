import React,{Component} from 'react';
//import BlogEditor from './blogEditor';
import { Editor } from '@tinymce/tinymce-react';
import axios from '../../axiosInstance';

class BlogForm extends Component {

    state={
        content:null
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

        formData.append('userName',userName);
        formData.append('title',title);
        formData.append('authorName',authorName);
        formData.append('catagory',catagory);
        formData.append('content',content);
        formData.append("myImage", imagefile.files[0]);

        axios.post('/post', formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }})
            .then(res => {
                alert(res);
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


    render() {
        return (
            <div className="col-sm-8 col-sm-offset-2">
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
                            <button type="button" className="btn btn-success" onClick={this.postBlog}>Post Blog</button>
                        </form>
            </div>
            </div>
        )
    }
}

export default BlogForm;