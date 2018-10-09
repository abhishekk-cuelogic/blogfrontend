import React from 'react';
import {Link} from 'react-router-dom';
import axios from '../../axiosInstance';


class AllPosts extends React.Component {


    deletePost = (id) => {
        let url = '/post/'+id;

        axios.delete(url)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert(err);
        })

    }



    render() {

        let img='http://localhost:2700/'+this.props.post.image;
        let blogUrl = '/blog/'+this.props.post._id;
        return (
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-3">
                        <div>
                            <img src={img} className="img-responsive" alt="Avatar"></img>
                        </div>
                    </div>
                    <div className="col-sm-9">
                    <Link to={blogUrl}><div className="text-left" style={{ color: 'black' }}>
                            <p>{this.props.post.date}</p>
                            <b><p>{this.props.post.title}</p></b>
                        </div></Link>
                        <button type="button" class="btn btn-default" onClick={()=>this.deletePost(this.props.post._id)}>
                            <span class="glyphicon glyphicon-trash"></span> DELETE
                        </button>
                    </div> 
                </div>
                </div>
        )
    }
}

export default AllPosts;