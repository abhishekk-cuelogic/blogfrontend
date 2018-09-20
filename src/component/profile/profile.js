import React,{Component} from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';
import Form from './form';

class Profile extends Component {

    render(){

        return(
            <div className="container">
                <div className="col-sm-9 col-sm-offset-1">
                <div className="col-sm-4 col-sm-offset-4">
                    <img src={Ronaldo} className="img-responsive img-rounded" alt="Avatar" /><br/><br/>
                </div>
                <div>
                  <Form></Form>
                </div>   
                </div>
              
            </div>
        )
    }
}

export default Profile;