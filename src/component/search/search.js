import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';

class Search extends Component {

    state = {
        posts: []
    }

    componentWillReceiveProps = () => {
        let catagory = window.location.href.split('/')[4];
        let url = '/post/catagory/' + catagory;

        axios.get(url)
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    posts: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentWillMount = () => {
        let catagory = window.location.href.split('/')[4];
        let url = '/post/catagory/' + catagory;

        axios.get(url)
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    posts: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    increseView = (id) => {
        let url = '/post/view/'+id;
        let posturl = '/blog/'+id;
  
        axios.put(url)
        .then(res => {
          this.props.history.push(posturl);
        })
        .catch(error => {
          console.log(error);
        })
    }


    render() {


        let searchResults = this.state.posts.map(obj => {

            let img = 'http://localhost:2700/'+obj.image
            return <div class="col-sm-4">
                   <a onClick={()=>this.increseView(obj._id)}><div class="panel panel-success">
                        <div class="panel-heading"><b>{obj.catagory}</b></div>
                        <div class="panel-body"><img src={img}  height='150px' width='320px' alt="Image" />
                            <div class="panel-footer">{obj.title}</div>
                        </div>
                    </div></a>
            </div>
        })

        return (
            <div>
                <NavBar></NavBar>
                <div class="container">
                    <div class="row">
                        {searchResults}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;

