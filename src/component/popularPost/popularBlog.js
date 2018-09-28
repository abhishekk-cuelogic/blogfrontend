import React, { Component } from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../../axiosInstance';


class PopularBlog extends Component {

    state = {
        popularPost : []
    }

    componentDidMount = () => {
        axios.get('/post/popular')
        .then(res => {
            this.setState({
                popularPost : [...res.data]
            })
        })
        .catch(err => {
            alert(err);
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
             firstLink = 'blog/'+this.state.popularPost[0]._id

             secondCatagory = this.state.popularPost[1].catagory;
             secondTitle = this.state.popularPost[1].title;
             secondImage = 'http://localhost:2700/'+this.state.popularPost[1].image;
             secondLink = 'blog/'+this.state.popularPost[1]._id

             thirdCatagory = this.state.popularPost[2].catagory;
             thirdTitle = this.state.popularPost[2].title;
             thirdImage = 'http://localhost:2700/'+this.state.popularPost[2].image;
             thirdLink = 'blog/'+this.state.popularPost[2]._id
        }



        return (
            <div className="carousel-inner" role="listbox">

                    <div className="item active">
                    <Link to={firstLink}>
                        <img className="img-responsive" src={firstImage} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>{firstCatagory}</h3>
                            <p>{firstTitle}</p>
                        </div>
                        </Link>      
                    </div>
                    
                     <div className="item">
                     <Link to={secondLink}>
                        <img className="img-responsive" src={secondImage} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>{secondCatagory}</h3>
                            <p>{secondTitle}</p>
                        </div>
                        </Link>      
                    </div>

                    <div className="item">
                    <Link to={thirdLink}>
                        <img className="img-responsive" src={thirdImage} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>{thirdCatagory}</h3>
                            <p>{thirdTitle}</p>
                        </div>
                        </Link>       
                    </div>
           </div>
    )}
}

const mapStateToProps = state => {
    return {
        popularPost : state.mainReducer.popularPosts 
    }
}

export default connect(mapStateToProps)(PopularBlog);