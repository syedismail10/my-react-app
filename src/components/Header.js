import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/shoes-store.png';

const Header = () => {
  return (
    <div>
        {/* {top header} */}
        <div className="Announcement">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-ietms-center display-none">
                        <p>abc</p>
                        <p>def</p>
                    </div>
                    <div className="col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                    <Link to = ''>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to = ''>
                        <i className="fab fa-instagram"></i>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        {/* Header */}
        <div className="header">
            <div className="container">
                {/* {mobile header} */}
                <div className="mobile-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center">
                                <Link className='navbar-brand' to='/'>
                                    <img src='{logo}' alt="logo" />
                                </Link>
                            </div>
                            <div className="col-6 d-flex align-items-center justify-conetent-end Login-Register">
                                <div className="btn-group">
                                    <button
                                    type="button"
                                    className='name-button dropdown-toggle'
                                    data-toggle = 'dropdown'
                                    aria-haspopup = 'true'
                                    aria-expanded = 'false'
                                    >
                                        <i className="fas fa-user"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className='dropdown-item' to = '/profile'>Profile</Link>

                                        <Link className='dropdown-item' to = '#'>Logout</Link>
                                    </div>
                                </div>
                                <Link className='cart-mobile-icon' to = '/cart'>
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">4</span>
                                </Link>
                            </div>
                            <div className="col-12 d-flex align-items-center">
                                <form className="input-group">
                                    <input type="search" placeholder='Search' className="form-control rounded search" />
                                    <button type="submit" className="search-button">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {pc header} */}
                <div className="pc-header">
                    <div className="row">
                        <div className="col-md-3 col-4 d-flex align-items-center">
                            <Link className='navbar-brand' to= '/'>
                                <img src={logo} alt="logo" className='header-logo'/>
                            </Link>
                        </div>
                        <div className="col-md-6 col-8 d-flex align-items-center">
                            <form className="input-group">
                                <input type="search" placeholder='Search' className='form-control rounded search' />
                                <button type="submit" className='search-button'>Search</button>
                            </form>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                            <div className="btn-group">
                                <button type="button" className="name-button dropdown-toggle"
                                data-toggle = 'dropdown'
                                aria-haspopup= 'true'
                                aria-expanded = 'false'
                                >
                                    Hi, Admin Doe
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className='dropdown-item' to = '/profile'>Profile</Link>

                                        <Link className='dropdown-item' to = '#'>Logout</Link>
                                    </div>
                                </div>
                                <Link className='cart-mobile-icon' to = '/cart'>
                                    <i className="fas fa-shopping-bag"></i>
                                    <span className="badge">4</span>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Header