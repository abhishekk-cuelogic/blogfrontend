import React,{Component} from 'react';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg'


class CommentDisplay extends Component {
    render() {
        return(
            <div className="col-sm-12">
                <div className="container-fluid">
                    <div className="col-sm-2 col-sm-offset-1 text-center">
                        <img src={Img} className="img-responsive img-circle" alt="Avatar" />
                    </div>
                    <div className="col-sm-9">
                        <h4><b>Abhishek Khutwad</b><small> Sep 29, 2015, 9:12 PM</small></h4>
                        <p>Keep up the GREAT work! I am cheering for you!!</p>
                        <br/>
                    </div>
                </div>
            </div>           
        )
    }
}

export default CommentDisplay;