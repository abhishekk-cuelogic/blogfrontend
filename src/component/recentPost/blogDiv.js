import React, { Component } from 'react';
import axios from '../../axiosInstance';
import { withRouter } from 'react-router'

class  BlogDiv extends Component {


  increseView = () => {
      let url = '/post/view/'+this.props.post._id;
      let posturl = '/blog/'+this.props.post._id;

      axios.put(url)
      .then(res => {
        this.props.history.push(posturl);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    let img= 'http://localhost:2700/'+this.props.post.image;
    return (
        <div className="col-sm-3" style={{textAlign : 'left'}}>
           <p><b>{this.props.post.catagory}</b></p>
          <div>
            <img height="145px" width="270px" src={img} alt="blogimg"></img>
            <p><br/>
               <h4><b>{this.props.post.title.slice(0,60)}</b></h4>
               <b>{this.props.post.date}</b> 
            </p><br/>
            
            <button className="btn btn-default btn-block" onClick={this.increseView}>Read More</button>
          </div>
        </div>
    )
  }

    
}



export default withRouter(BlogDiv);