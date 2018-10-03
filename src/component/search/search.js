import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';

class Search extends Component {


    componentWillReceiveProps = () => {
        let catagory=window.location.href.split('/')[4];
        let url = '/post/catagory/'+catagory;

        axios.get(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentWillMount = () => {
        let catagory=window.location.href.split('/')[4];
        let url = '/post/catagory/'+catagory;

        axios.get(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div>
                <NavBar></NavBar>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="panel panel-success">
                            <div class="panel-heading">BLACK FRIDAY DEAL</div>
                            <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive"  alt="Image" />
                                <div class="panel-footer">Buy 50 mobiles and get a gift card</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="panel panel-success">
                            <div class="panel-heading">BLACK FRIDAY DEAL</div>
                            <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive"  alt="Image" />
                                <div class="panel-footer">Buy 50 mobiles and get a gift card</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="panel panel-success">
                            <div class="panel-heading">BLACK FRIDAY DEAL</div>
                            <div class="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive"  alt="Image" />
                                <div class="panel-footer">Buy 50 mobiles and get a gift card</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>   
        )
    }
}

export default Search;

