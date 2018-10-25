import React, {Component} from 'react';
import { withRouter } from 'react-router';
import postService from '../../services/postService';
import PostControl from '../../services/postControlService';


class SubscribeBlog extends Component {

    state = {
        posts : []
    }

    componentDidMount = () => {
    
        postService.getYMLPost()
        .then(res => {
            this.setState({
                ...this.state,
                posts : res.data
            })
        })
        .catch(err => {
            alert(err);
        })
    }

    increseView = (id) => {
        let postUrl = '/blog/'+id;
        let url = '/post/view/'+id;

        PostControl.increseView(url)
        .then(res => {
            this.props.history.push(postUrl);
        })
        .catch(err => {
            alert(err);
        })

    }


    render() {

        let yml = this.state.posts.map(obj => {
            let img= "http://localhost:2700/"+obj.image;
            return(
                <div>
            <a onClick={()=>this.increseView(obj._id)}><div className="row ">
                <div className="col-sm-3">
                    <div>
                    <img src={img} className="img-responsive" alt="Avatar"></img>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="text-left" style={{color:'black'}}>
                        <b><p>{obj.catagory}</p></b>
                        <p>{obj.title}</p>
                    </div>
                </div>
            </div></a> 
            <br/><hr/></div>       
            )
           
        })
        
        return (
            <div>
                {yml}
            </div>             
    )
    } 
}

export default withRouter(SubscribeBlog);