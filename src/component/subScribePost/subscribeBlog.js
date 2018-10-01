import React, {Component} from 'react';
import axios from '../../axiosInstance';
import { withRouter } from 'react-router';


class SubscribeBlog extends Component {

    state = {
        posts : []
    }


    componentDidMount = () => {
        axios.get('/post/yml')
        .then(res => {
            console.log('subscibe=====>',res.data);
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

        axios.put(url)
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
            <a onClick={()=>this.increseView(obj._id)}><div className="row well">
                <div className="col-sm-3">
                    <div>
                    <img src={img} className="img-responsive" alt="Avatar"></img>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div>
                        <b><p>{obj.title}</p></b>
                    </div>
                </div>
            </div></a>         
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