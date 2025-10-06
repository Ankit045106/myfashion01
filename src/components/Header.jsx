import { Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='custom-header-section'>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-8 col-xl-8">
            <div className="custom-header-middle-cont">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="custom-header-nav-bar">
                      <ul className="custom-header-nav-links mb-0 ps-0">
                        <li className="custom-header-nav-link">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="custom-header-nav-link">
                          <Link to="/shop">Shop</Link>
                        </li>
                        <li className="custom-header-nav-link">
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li className="custom-header-nav-link">
                          <Link to="/about">About</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="d-none d-md-none d-lg-block d-xl-block col-lg-4 col-xl-4">
                    <div className="custom-header-user-nav-actions">
                      <ul className="custom-header-user-actions-links mb-0 ps-0">
                        <li className="custom-header-user-actions-link">
                          <Link to=""><Search /></Link>
                        </li>
                        <li className="custom-header-user-actions-link">
                          <Link to=""><ShoppingCart /></Link>
                        </li>
                        <li className="custom-header-user-actions-link">
                          <Link to=""><User /></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
