import React,{Component} from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';

class AuthorInfo extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="col-sm-2 text-center">
                    <img src={Ronaldo} className="img-responsive img-rounded" alt="Avatar" />
                </div>
                <div className="col-sm-10">
                    <h4><b>{this.props.authorName}</b><small> {this.props.date}</small></h4>
                    <button type="button" class="btn btn-default btn-sm">
                      <span class="glyphicon glyphicon-thumbs-up"></span> Like
                    </button>
                    <button type="button" class="btn btn-default btn-sm">
                        Views {this.props.views}
                    </button>
                    <br/>
                </div>
            </div>
        )
    }
}

export default AuthorInfo;