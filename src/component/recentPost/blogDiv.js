import React from 'react';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg';
import {Link} from 'react-router-dom';

const blogDiv = () => {
    return (
        <div className="col-sm-3">
          <div className="well">
            <img className="img-responsive" src={Img} alt="blogimg"></img>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s
            </p>
            <Link to="/blog"><button className="btn btn-success">Read More</button></Link>
          </div>
        </div>
    )
}



export default blogDiv;