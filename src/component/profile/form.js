import React, {Component} from 'react';


class Form extends Component {

    render() {
        return(
            <div className="col-sm-8 col-sm-offset-2">
                <div className="jumbotron">
                        <form className="form-horizontal" autoComplete="off">
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" id="email"/>
                                </div>
                                <div className="form-group">
                                    <label for="fname">Full Name</label>
                                    <input type="text" className="form-control" id="fname"/>
                                </div>
                                <div className="form-group">
                                    <label for="fname">Contact</label>
                                    <input type="text" className="form-control" id="contact"/>
                                </div>
                                <div className="form-group">
                                <label>Skills</label>
                                 <textarea className="form-control rounded-0" id="skills" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Upload Image</label>
                                    <input type="file" id="img"/>     
                                </div>
                                <div className="form-group">
                                    <label for="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="password"/>
                                </div>
                                <button className="btn btn-success" id="btnreg">Update</button>
                            </form>
                </div>
                </div>
   
        )

       
        
    }
}

export default Form;