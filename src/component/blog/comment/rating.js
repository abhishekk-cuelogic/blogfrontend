import React,{ Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import axios from '../../../axiosInstance';

class Rating extends Component {

    state = {
        rating : 1,
        rate : false
    }

    componentDidMount = () => {
        let id=window.location.href.split('/')[4];
        let url='/post/rating/all/'+id;
        let userName = localStorage.getItem('userName');

        console.log(url);

        axios.get(url)
        .then(res => {
            console.log(res.data);
            res.data.forEach(obj => {
                if(obj.userName === userName) {
                    this.setState({
                        ...this.state,
                        rate:true
                    })
                }
                
            });
        })
        .catch(err => {
            alert(err);
        })
    }

    onStarClick(nextValue, prevValue, name) {
        if(localStorage.getItem('token') === null){
            alert('You need to Sign In to rate this blog');          
        } else {
            let url = '/post/rating/'+this.props.Post._id;
            let userName = localStorage.getItem('userName');
            let activity = 'You Rated on ' + this.props.Post.title + ' on ' + new Date();

            if(!this.state.rate) {
                this.setState({rating: nextValue});

                axios.put(url,{
                    userName : userName,
                    ratingData : nextValue
                })
                .then(res =>{
                    this.setState({
                        ...this.setState,
                        rate:true
                    })
                })
                .catch(err =>{
                    alert(err);
                })
            } else {
                alert('You alredy Rated this post');
            }
            
            axios.put('/useractivity',{
                userName : userName,
                activity: activity
            })
            .then(res => {})
            .catch(err => {alert(err);})
        }
        
      }
     
    render() {
        let rating  = this.state.rating;
        console.log('render===>',this.props.Post);
        return (
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
        )
        
    }
}

const mapStateToProps = state => {
    return {
        Post: state.blogReducer.Post
    }
}

export default connect(mapStateToProps)(Rating);