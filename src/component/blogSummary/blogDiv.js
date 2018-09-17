import React from 'react';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg'

const blogDiv = () => {
    return (
        <div class="col-sm-3">
          <div class="well">
            <img className="img-responsive" src={Img} alt="blogimg"></img>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s
            </p>
            <button className="btn btn-success">Read More</button>
          </div>
        </div>
    )
}



export default blogDiv;