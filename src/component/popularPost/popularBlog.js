import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axiosInstance';
import { withRouter } from 'react-router';
import postService from '../../services/postService';

class PopularBlog extends Component {

    state = {
        popularPost : []
    }

    componentDidMount = () => {
        
        postService.getPopularPost()
        .then(res =>{
            this.setState({
                popularPost : [...res.data]
            })
        })
        .catch(err => {
            alert(err);
        })
    }

    increseView = (link) => {
       
        let url = '/post/view/'+link;
        let posturl = '/blog/'+link;
  
        axios.put(url)
        .then(res => {
          this.props.history.push(posturl);
        })
        .catch(error => {
          console.log(error);
        })
    }



    render() {

        console.log("Popularblog render======>",this.props.popularPost);
        let firstCatagory,firstTitle,firstImage,secondCatagory,secondTitle,secondImage,thirdCatagory,thirdTitle,thirdImage=null;
        let firstLink ="";
        let secondLink="";
        let thirdLink="";

        if(this.state.popularPost.length !== 0) {
             firstCatagory = this.state.popularPost[0].catagory;
             firstTitle = this.state.popularPost[0].title;
             firstImage = 'http://localhost:2700/'+this.state.popularPost[0].image;
             firstLink = this.state.popularPost[0]._id

             secondCatagory = this.state.popularPost[1].catagory;
             secondTitle = this.state.popularPost[1].title;
             secondImage = 'http://localhost:2700/'+this.state.popularPost[1].image;
             secondLink = this.state.popularPost[1]._id

             thirdCatagory = this.state.popularPost[2].catagory;
             thirdTitle = this.state.popularPost[2].title;
             thirdImage = 'http://localhost:2700/'+this.state.popularPost[2].image;
             thirdLink = this.state.popularPost[2]._id
        }



        return (
            <div className="carousel-inner" role="listbox">

                    <div className="item active">
                    <a onClick={()=>this.increseView(firstLink)}>
                        <img className="img-responsive" src={firstImage} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>{firstCatagory}</h3>
                            <b><p>{firstTitle}</p></b>
                        </div>
                        </a>      
                    </div>
                    
                     <div className="item">
                     <a onClick={()=>this.increseView(secondLink)}>
                        <img className="img-responsive" src={secondImage} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>{secondCatagory}</h3>
                            <b><p>{secondTitle}</p></b>
                        </div>
                        </a>      
                    </div>

                    <div className="item">
                    <a onClick={()=>this.increseView(thirdLink)}>
                        <img className="img-responsive" src={thirdImage} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>{thirdCatagory}</h3>
                            <b><p>{thirdTitle}</p></b>
                        </div>
                        </a>       
                    </div>
           </div>
    )}
}

const mapStateToProps = state => {
    return {
        popularPost : state.mainReducer.popularPosts 
    }
}

export default withRouter(connect(mapStateToProps)(PopularBlog));