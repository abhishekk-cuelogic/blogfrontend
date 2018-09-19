import React from 'react';
import Ronaldo from '/home/abhishek/Desktop/blogfrontend/src/ronaldo.jpeg';
import Img from '/home/abhishek/Desktop/blogfrontend/src/img.jpg';
import {Link} from 'react-router-dom';


const popularBlog = () => {

    return (
            <Link to="/blog"><div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img className="img-responsive" src={Ronaldo} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>Sell $</h3>
                            <p>Money Money.</p>
                        </div>      
                    </div>

                    <div className="item">
                        <img className="img-responsive" src={Img} alt="Imag"></img>
                        <div className="carousel-caption">
                            <h3>More Sell $</h3>
                            <p>Lorem ipsum...</p>
                        </div>      
                    </div>
           </div></Link>
    )
}

export default popularBlog;