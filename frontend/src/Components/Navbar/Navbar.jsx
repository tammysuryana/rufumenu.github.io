import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="py-4 d-lg-flex">
                        <div id="logo">
                            <h1> <a href="index.html"><span className="fa fa-align-center" aria-hidden="true"></span>RUFU</a></h1>
                        </div>
                        <label for="drop" className="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul className="menu mt-2 ml-auto">
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="#about" className="scroll">About</a></li>
                            <li><a href="#menu" className="scroll">Menu</a></li> 
                            <li>
                             </li>
                            <li><a href="#testimonials" className="scroll">Reviews</a></li>
                            <li><a href="#contact" className="scroll">Contact</a></li>
                        </ul> 
                    </nav>
        </div>
    )
}
