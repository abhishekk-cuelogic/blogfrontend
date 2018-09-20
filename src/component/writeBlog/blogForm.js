import React,{Component} from 'react';
import BlogEditor from './blogEditor';


class BlogForm extends Component {
    render() {
        return (
            <div className="col-sm-8 col-sm-offset-2">
            <div>
                    <form className="form-horizontal" autoComplete="off">
                            <div className="form-group">
                                <label for="email">Title</label>
                                <input type="text" className="form-control" id="title"/>
                            </div>
                            <div className="form-group">
                                <label for="fname">Author Name</label>
                                <input type="text" className="form-control" id="aname"/>
                            </div>
                            <div className="form-group">
                                <label for="fname">Tags</label>
                                <input type="text" className="form-control" id="tags"/>
                            </div>
                            <div className="form-group">
                            <label>Content</label>
                               <BlogEditor></BlogEditor>
                            </div>
                            <div className="form-group">
                                <label>Upload Image</label>
                                <input type="file" id="img"/>     
                            </div>
                            <button className="btn btn-success" id="btnreg">Post Blog</button>
                        </form>
            </div>
            </div>
        )
    }
}

export default BlogForm;