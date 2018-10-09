import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Archive extends Component {
    render() {
        let img = 'http://localhost:2700/'+this.props.post.image;
        let blogUrl = '/blog/'+this.props.post._id;
        return(
        <Link to={blogUrl}><div className="col-sm-3" style={{textAlign : 'left', color:'black'}}>
          <div>
            <img height="145px" width="270px" src={img} alt="blogimg"></img>
            <p><br/>
               <h4><b>{this.props.post.title.slice(0,60)}</b></h4>
               <b>{this.props.post.date}</b> 
            </p><br/>
          </div>
        </div></Link>
        )
    }
}

export default Archive;