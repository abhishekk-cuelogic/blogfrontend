import React,{ Component } from 'react';
import NavBar from '../../component/navbar/navbar';
import RecentPost from '../../component/recentPost/recentPost';
import PopularPost from '../../component/popularPost/popularPost';
import Footer from '../../component/footer/footer';
import { connect } from 'react-redux';
import postService from '../../services/postService';


class MainPage extends Component {

    componentDidMount = () => {

        postService.getRecentPost()
        .then(res =>{
            this.props.getPosts(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
       
        return (
           <div className="text-center">
               <NavBar></NavBar>
               <RecentPost recentPosts={this.props.recentPosts}></RecentPost><hr/>
               <PopularPost></PopularPost><hr/>
               <Footer></Footer>
           </div> 
            
        )
    }
}

const mapStateToProps = state => {
    return {
        recentPosts : state.mainReducer.recentPosts,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: (allPost) =>dispatch({type:"getPosts", payload:allPost}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage) ;