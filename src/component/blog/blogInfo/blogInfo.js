import React,{Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class BlogInfo extends Component {
    render() {
        let image = 'http://localhost:2700/'+this.props.image;
        let content=this.props.postContent;
        return(
            <div className="col-sm-12">
                <div className="container-fluid">
                    <h1 className="text-left"><b>{this.props.title}</b></h1>
                </div><br/>
                <div className="container-fluid"> 
                 <img src={image} className="img-responsive" alt="Avatar" />
                </div><br/>
                <div className="container-fluid"> 
                { ReactHtmlParser(content) }
                </div>     
            </div>
        )
    }
}

export default BlogInfo;