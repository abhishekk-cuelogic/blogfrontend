import React, {Component} from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';


const subscribeBlog = () => {
    return (
            <div>
                <div className="col-sm-3">
                    <div>
                    <p>John</p>
                    <img src={Ronaldo} className="img-responsive" alt="Avatar"></img>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div>
                        <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
                    </div>
                </div>
            </div>              
    )
}

export default subscribeBlog;