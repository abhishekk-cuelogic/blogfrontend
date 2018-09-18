import React,{Component} from 'react';

class Comment extends Component {
    render() {

        return(
            <div className="col-sm-12">
                <div className="container-fluid">
                   <h4><b>Leave a Comment</b></h4>
                </div>
                <form role="form">
                    <div className="form-group container-fluid">
                      <textarea className="form-control" rows="3" required></textarea>
                    </div>
                    <div className="container-fluid">
                       <button type="submit" className="btn btn-success">Submit</button>
                    </div>    
                </form>
                <br/><br/>
                <div className="container-fluid">
                   <p><span class="badge">2</span><b>Comments:</b></p><br/>
                </div>   
            </div>
                    
        )
    }
}

export default Comment;