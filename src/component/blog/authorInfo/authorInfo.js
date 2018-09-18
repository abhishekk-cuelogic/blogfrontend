import React,{Component} from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';

class AuthorInfo extends Component {
    render() {

        return(
            <div className="container-fluid">
                <div className="col-sm-2 text-center">
                    <img src={Ronaldo} className="img-responsive img-circle" alt="Avatar" />
                </div>
                <div className="col-sm-10">
                    <h4><b>Abhishek Khutwad</b><small> Sep 29, 2015, 9:12 PM</small></h4>
                    <p>Keep up the GREAT work! I am cheering for you!!</p>
                    <br/>
                </div>
            </div>
        )
    }
}

export default AuthorInfo;