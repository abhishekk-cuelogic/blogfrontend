import React,{ Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import axios from '../../../axiosInstance';
import Modal from '../../modal/modal';

class Rating extends Component {

    state = {
        rating : 1,
        rate : false,
        response: '',
        show: false
    }

    fade = () => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                show: false
            })
        }, 2000)
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
            this.setState({
                ...this.state,
                response: 'You need to Sign In to rate this blog',
                show: true
            })
            this.fade();          
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
                this.setState({
                    ...this.state,
                    response: 'You alredy Rated this post',
                    show: true
                })
                this.fade();
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
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return (
            <div>
            {message}
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        Post: state.blogReducer.Post
    }
}

export default connect(mapStateToProps)(Rating);