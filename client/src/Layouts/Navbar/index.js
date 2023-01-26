import React from 'react'
import "./index.scss"
function Navbar() {
    return (
        <>
            <div className='main_nav'>
                <div className='nav'>
                    <div className='logo'>
                        <img src='https://preview.colorlib.com/theme/aroma/img/logo.png' alt='logo' />
                    </div>
                    <div className='links'>
                        <ul className='ul'>
                            <li><a href='/' id='goy'>Home</a></li>
                            <li><a href='#'>Shop</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Pages</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='iconandbutton'>
                        <div className='icons'>
                        <div><i className="fa-solid fa-magnifying-glass"></i></div>
                        <div><i className="fa-solid fa-cart-shopping"></i></div>
                        </div>
                        <div className='btn'>
                        <a><button>Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar