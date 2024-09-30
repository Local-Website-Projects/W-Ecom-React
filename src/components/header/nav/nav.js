import React from "react";
import './nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {Link} from "@mui/material";
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
const Nav =() => {
    return (
        <>
            <div className='nav d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row position-relative'>
                        <div className='col-sm-2 part1 d-flex align-items-center'>
                            <Button className='greenBg text-white catTab'><WidgetsOutlinedIcon/>&nbsp; Browse All Categories <KeyboardArrowDownOutlinedIcon/></Button>
                        </div>
                        <div className='col-sm-8 part2 position-static'>
                            <nav>
                                <ul className='list list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <Button><Link>Home</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>About</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Shop</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Vendors</Link></Button>
                                    </li>
                                    <li className='list-inline-item position-static'>
                                        <Button><Link>Mega Menu <KeyboardArrowDownOutlinedIcon/></Link></Button>
                                        <div className='dropdown_menu megaMenu'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <h4 className='greenText'>Fruit & Vegetables</h4>
                                                    <ul className="megaMenuUl">
                                                        <li><Link to="/">Meat & Poultry</Link></li>
                                                        <li><Link to="">Fresh Vegetables</Link></li>
                                                        <li><Link to="">Herbs & Seasonings</Link></li>
                                                        <li><Link to="">Cuts & Sprouts</Link></li>
                                                        <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                                        <li><Link to="">Packaged Produce</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                    <h4 className='greenText'>Breakfast & Dairy</h4>
                                                    <ul className="megaMenuUl">
                                                        <li><Link to="">Milk & Flavoured Milk</Link></li>
                                                        <li><Link to="">Butter and Margarine</Link></li>
                                                        <li><Link to="">Eggs Substitutes</Link></li>
                                                        <li><Link to="">Marmalades</Link></li>
                                                        <li><Link to="">Sour Cream</Link></li>
                                                        <li><Link to="">Cheese</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                    <h4 className='greenText'>Meat & Seafoods</h4>
                                                    <ul className="megaMenuUl">
                                                        <li><Link to="">Breakfast Sausage</Link></li>
                                                        <li><Link to="">Dinner Sausage</Link></li>
                                                        <li><Link to="">Chicken</Link></li>
                                                        <li><Link to="">Sliced Deli Meat</Link></li>
                                                        <li><Link to="">Wild Caught Fillets</Link></li>
                                                        <li><Link to="">Crab and Shellfish</Link></li>
                                                    </ul>
                                                </div>
                                                <div className='col'>
                                                    <img
                                                        src='https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png'
                                                        className='w-100'/>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Blog</Link></Button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Pages <KeyboardArrowDownOutlinedIcon/></Link></Button>
                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li><Button><Link>About Us</Link></Button></li>
                                                <li><Button><Link>Contact</Link></Button></li>
                                                <li><Button><Link>My Account</Link></Button></li>
                                                <li><Button><Link>Login</Link></Button></li>
                                                <li><Button><Link>Register</Link></Button></li>
                                                <li><Button><Link>Forgot Password</Link></Button></li>
                                                <li><Button><Link>Reset Password</Link></Button></li>
                                                <li><Button><Link>Purchase Guide</Link></Button></li>
                                                <li><Button><Link>Privacy Policy</Link></Button></li>
                                                <li><Button><Link>Terms of Service</Link></Button></li>
                                                <li><Button><Link>404 Page</Link></Button></li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Button><Link>Contact</Link></Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-sm-2 part3 d-flex align-items-center'>
                            <div className='phno d-flex align-items-center'>
                                <span className=''><HeadsetMicOutlinedIcon/></span>
                                <div className='mx-2 info'>
                                    <h3 className='greenText mb-0'>1900 - 888</h3>
                                    <p className='mb-0'>24/7 Support Center</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nav