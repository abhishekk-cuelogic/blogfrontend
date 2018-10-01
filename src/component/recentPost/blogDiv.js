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
        <div className="col-sm-3">
          <div className="well">
            <img height="145px" width="257px" src={img} alt="blogimg"></img>
            <p><br/>
               <b>{this.props.post.title.slice(0,60)}</b> 
            </p>
            <button className="btn btn-success" onClick={this.increseView}>Read More</button>
          </div>
        </div>
    )
  }

    
}



export default withRouter(BlogDiv);