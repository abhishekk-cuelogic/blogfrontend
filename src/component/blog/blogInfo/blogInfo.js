import React,{Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';

class BlogInfo extends Component {

    render() {
        let image = 'http://localhost:2700/'+this.props.Post.image;
        let content=this.props.Post.postContent;
        let video = null;
        let videourl = 'http://localhost:2700/'+this.props.Post.video;

        if(this.props.Post.video) {
             video = <video width="320" height="240" controls>
                         <source src={videourl} type="video/mp4" />
                         <source src={videourl} type="video/wmv" />
                         <source src={videourl} type="video/ogg" />
                         Your browser does not support the video tag.
                        </video>
        }

        return(
            <div className="col-sm-12">
                <div className="container-fluid">
                    <h1 className="text-left"><b>{this.props.Post.title}</b></h1>
                </div><br/>
                <div className="container-fluid"> 
                 <img src={image} className="img-responsive" alt="Avatar" />
                </div><br/>
                <div className="container-fluid"> 
                { ReactHtmlParser(content) }
                </div> 
                <div className="container-fluid col-sm-4 col-sm-offset-3"> 
                    {video}
                </div><br/>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Post : state.blogReducer.Post
    }
}

export default connect(mapStateToProps)(BlogInfo);