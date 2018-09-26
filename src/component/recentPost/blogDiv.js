import React from 'react';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg';
import {Link} from 'react-router-dom';

const blogDiv = (props) => {

    let img= "http://localhost:2700/"+props.post.image;
    let posturl = '/blog/'+props.post._id

    return (
        <div className="col-sm-3">
          <div className="well">
            <img height="145px" width="257px" src={img} alt="blogimg"></img>
            <p><br/>
               <b>{props.post.title.slice(0,60)}</b> 
            </p>
            <Link to={posturl}><button className="btn btn-success">Read More</button></Link>
          </div>
        </div>
    )
}



export default blogDiv;