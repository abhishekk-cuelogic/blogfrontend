import React,{Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import Modal from '../modal/modal';

class EditBlog extends Component {

    state = {
            title : '',
            authorName :'',
            catagory : '',
            postContent:'',
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

    handleEditorChange = (e) => {
        this.setState({postContent: e.target.getContent()})
      }


    componentWillMount = () => {
        let id=window.location.href.split('/')[4];
        let url='/post/getone/'+id;

        axios.get(url)
        .then(res=>{
            console.log('post==>dtat',res.data);
            this.setState({
                ...this.state,
                title:res.data.title,
                authorName:res.data.authorName,
                catagory:res.data.catagory,
                postContent:res.data.postContent
            })
        })
        .catch(err => {
            alert(err);
        })
    }

    getData = (e, id) => {
        let data = e.target.value;

        if (id === 'title') {
            this.setState({
                ...this.state,
                title: data
            })
        }

        if (id === 'authorName') {
            this.setState({
                ...this.state,
                authorName: data
            })
        }

        if (id === 'catagory') {
            this.setState({
                ...this.state,
                catagory: data
            })
        }
    }

    updateBlog = () => {
        let id=window.location.href.split('/')[4];
        let url = '/post/'+id


        let title=this.state.title;
        let authorName=this.state.authorName;
        let catagory=this.state.catagory;
        let content=this.state.postContent;

        axios.put(url, {
            title:title,
            authorName:authorName,
            catagory:catagory,
            postContent:content
        })
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
    }


    render() {
        let content = this.state.postContent;
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return(
            <div>
            <NavBar></NavBar>
            {message}
             <h2 className="text-center">Edit the Blog</h2>
            <div className="col-sm-8 col-sm-offset-2">
            <div>
                    <form className="form-horizontal" autoComplete="off">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" id="title" name='title' value={this.state.title} onChange={(e)=>this.getData(e,'title')}/>
                            </div>
                            <div className="form-group">
                                <label>Author Name</label>
                                <input type="text" className="form-control" id="aname" name='authorname' value={this.state.authorName} onChange={(e)=>this.getData(e,'authorName')}/>
                            </div>
                            <div className="form-group">
                                <label>Catagory</label>
                                <input type="text" className="form-control" id="catagory" name='catagory' value={this.state.catagory} onChange={(e)=>this.getData(e,'catagory')}/>
                            </div>
                            <div className="form-group">
                            <label>Content</label>
                                <Editor
                                    initialValue={content}
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
                            <button type="button" className="btn btn-success" onClick={this.updateBlog}>Update Blog</button>
                        </form>
            </div>
            </div>
            </div>

        )
    }
}

export default EditBlog;