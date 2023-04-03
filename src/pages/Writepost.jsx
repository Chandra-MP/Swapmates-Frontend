import React from 'react'
import '../styles/write.scss'
import formbuild from '../images/form_build-2.jpg'
import { Link } from  'react-router-dom'

const Writepost = () => {
  return (
    <div>
      <header className="header" id="header">
            <nav className="nav container">
                <Link to='/posts' className="nav__logo"> SwapMate <i className="bi bi-house-fill"></i></Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="login.html" className="nav__link">
                                <i className="bi bi-person-circle"></i>
                                <span style={{color:"gray"}}>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Theme change button --> */}
                {/* <!-- <i className="bi bi-moon change-theme" id="theme-button"></i>

                <a href="#" className="button nav__button">
                    Subscribe
                </a> -->*/}
            </nav> 
            <hr className="down-hr" />
        </header>

        {/* <!--==================== MAIN ====================-->? */}
        <main className="mainwrite">
            <section className="filter">
                <div className="in-nav">
                    Filter To Be Applied
                </div>
                <div className="filter-cont">
                    <h4>BHK Type</h4>
                    <div className="filt-button">
                        <div className="filt-2">
                            <button className="button-2">1 RK</button>
                            <button className="button-2">1 BHK</button>
                            <button className="button-2">2 BHK</button>
                        </div>
                        <div className="filt-2">
                            <button className="button-2">3 BHK</button>
                            <button className="button-2">4 BHK</button>
                            <button className="button-2">4+ BHK</button>
                        </div>
                    </div>
                    
                    <h4>Preferred Tenants</h4>
                    <div className="check">
                        <div className="check-2">
                            <label className="container-2">Family
                                <input type="checkbox" name="radio" />  
                                <span className="check"></span>  
                            </label>  
                        </div>
                        <div className="check-2">
                            <label className="container-2">Bachelor
                                <input type="checkbox" name="radio" />  
                                <span className="check"></span>  
                            </label>  
                        </div>
                        <div className="check-2">
                            <label className="container-2">Company
                                <input type="checkbox" name="radio" />  
                                <span className="check"></span>  
                            </label>  
                        </div>
                    </div>
                    <h4>Furnishing</h4>
                    <div className="check">
                        <div className="check-2">
                            <label className="container-2">Full
                                <input type="checkbox" name="radio" />  
                                <span className="check"></span>  
                            </label>  
                        </div>
                        <div className="check-2">
                            <label className="container-2">Semi
                                <input type="checkbox" name="radio" />  
                                <span className="check"></span>  
                            </label>  
                        </div>
                        <div className="check-2">
                            <label className="container-2">None
                                <input type="checkbox" name="radio" />  
                                <span className="check"></span>  
                            </label>  
                        </div>
                        
                    </div>


                </div>
            </section>
            <section className="main-secwrite">
                <form>
                    <ul className="form-style-1">
                        <li><label>Property Type <span className="required">*</span></label>
                            <div className="items">
                                <div className="items-1">
                                Pg/Hostel <input type="checkbox"/></div>
                                <div className="items-1">
                                Villa<input type="checkbox" /></div>
                                <div className="items-1">
                                Flats<input type="checkbox" /></div>
                            </div>
                        </li>
                        <li>
                            <label>Title <span className="required">*</span></label>
                            <input type="text" name="field3" className="text-1" />
                        </li>
                        <li>
                            {/* <!-- <label>Subject</label>
                            <select name="field4" className="field-select">
                            <option value="Advertise">Advertise</option>
                            <option value="Partnership">Partnership</option>
                            <option value="General Question">General</option>
                            </select> --> */}

                            <label>Bedrooms <span className="required">*</span></label>
                            <input type="number" name="bedrooms" className="number-1" min="1" />
                        </li>
                        
                        <li>
                            <label>Bathrooms <span className="required">*</span></label>
                            <input type="number" name="bathrooms" className="number-1" min="0" />
                        </li>

                        <li>
                            <label>Roommates (Currently Living) <span className="required">*</span></label>
                            <input type="number" name="bathrooms" className="number-1" min="0" />
                        </li>

                        <li>
                            <label>Age of the Property <span className="required">*</span></label>
                            <input type="text" name="year_built" className='number-1' />
                        </li>

                        <li>
                            <label>Photos & Videos</label>
                            <input type="file" name="" id=""  className='number-1'/>
                        </li>

                        <li>
                            <label>Description <span className="required">*</span></label>
                            <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Submit" />
                        </li>
                    </ul>
                    </form>

                    <div className="image">
                        <img src={formbuild} alt="" srcset="" className='postadimg'/>
                    </div>
            </section>
            <section className="quick-link"></section>
        </main>
        
    </div>
  )
}

export default Writepost
