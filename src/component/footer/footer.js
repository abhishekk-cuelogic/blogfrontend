import React, { Component } from 'react';
import Archive from './archivesearch'; 
import axios from '../../axiosInstance';

class Footer extends Component {

    state = {
        posts : []
    }


    searchSelected = (e) => {
        
        let url = '/post/year/'+e.target.value;

        axios.get(url)
        .then(res => {
            console.log('data search====>',res.data);
            this.setState({
                ...this.state,
                posts : res.data
            })
        })
        .catch(err => {
            alert(err);
        })

    }

    render() {

        let archive = null;

        console.log('archiverender====>',this.state.posts);

        if(this.state.posts) {
            archive = this.state.posts.map(obj => {
                return <Archive post={obj} />
            })
        }


        return (
            <div>
                <footer className="container-fluid text-center well">
                <div class="form-group col-sm-4" style={{textAlign : 'left'}}>
                    <label><h4><b>ARCHIVE</b></h4></label>
                    <select class="form-control" id="sel1" onChange={(e)=>this.searchSelected(e)}>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                    </select>
                </div>
                <div id="google_translate_element" className="pull-right"></div> 
            </footer>
            {archive}
            </div>
            
                )
            }
        }
        
export default Footer;