import React,{Component} from 'react';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg'


class CommentDisplay extends Component {
    render() {

        console.log("commentDisplay======>",this.props.comment);
        return(
            <div className="col-sm-12">
                <div className="container-fluid">
                    <div className="col-sm-2 col-sm-offset-1 text-center">
                        <img src={Img} className="img-responsive img-circle" alt="Avatar" />
                    </div>
                    <div className="col-sm-9">
                        <h5><b>{this.props.userName}</b><small> {this.props.date}</small></h5>
                        <p>{this.props.comment}</p>
                        <br/>
                    </div>
                </div>
            </div>           
        )
    }
}

export default CommentDisplay;