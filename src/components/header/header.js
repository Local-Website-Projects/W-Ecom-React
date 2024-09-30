import React, {useEffect, useRef, useState} from "react";
import './header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from "../selectDrop/select";
import axios from "axios";
import PlaceIcon from '@mui/icons-material/Place';
import CompairIcon from '../../assets/images/iconCompare.svg';
import WishlistIcon from '../../assets/images/icon-heart.svg';
import CartIcon from '../../assets/images/icon-cart.svg';
import User from '../../assets/images/icon-user.svg';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {ClickAwayListener} from "@mui/material";
import Nav from "./nav/nav";

const Header = () => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [category, setCategory] = useState(['Milks and Dairies', 'Wines & Drinks', 'Clothing & beauty', 'Fresh Seafood', 'Pet Foods & Toy', 'Fast Food', 'Baking material', 'Vegetables', 'Fresh Fruit', 'Bread and Juice']);
    const countryList = [];

    // Fetching countries data
    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries');
    }, []);

    const getCountry = async (url) => {
        try {
            const res = await axios.get(url);
            if (res?.data?.data) {
                res.data.data.forEach(item => {
                    countryList.push(item.country);
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className='headerWrapper'>
                <header>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <img src={Logo} alt="logo"/>
                            </div>
                            <div className='col-sm-5 pt-2'>
                                <div className='headerSearch d-flex align-items-center'>
                                    <Select data={category} placeholder={'All Categories'}></Select>
                                    <div className='search'>
                                        <input type='text' placeholder='Search for items...'/>
                                        <SearchIcon className='searchIcon cursor'></SearchIcon>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-5 d-flex align-items-center'>
                                <div className='ml-auto d-flex align-items-center'>
                                    <div className='countryWrapper d-flex align-items-center'>
                                        <PlaceIcon className='locationIcon'/>
                                        <Select data={countryList} placeholder={'Your Location'}></Select>
                                    </div>
                                    <ClickAwayListener onClickAway={() => setIsOpenDropDown(false)}>
                                        <ul className='list list-inline mb-0 headerTabs'>
                                            <li className='list-inline-item'>
                                                <img src={CompairIcon} alt='compare'/>
                                                <span className='badge bg-success rounded-circle'>3</span>
                                                <span>Compare</span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <img src={WishlistIcon} alt='wishlist'/>
                                                <span className='badge bg-success rounded-circle'>2</span>
                                                <span>Wishlist</span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <img src={CartIcon} alt='cart'/>
                                                <span className='badge bg-success rounded-circle'>0</span>
                                                <span>Cart</span>
                                            </li>
                                            <li className='list-inline-item'>
                                                <img src={User} alt='user'/>
                                                <span onClick={() => setIsOpenDropDown(!isOpenDropDown)}>
                                                    Account
                                                </span>
                                                {isOpenDropDown && (
                                                    <ul className='dropdownMenu'>
                                                        <li>
                                                            <Button>
                                                                <PersonOutlineOutlinedIcon className='icon align-items-center'/>
                                                                My Account
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button>
                                                                <RoomOutlinedIcon className='icon align-items-center'/>
                                                                Order Tracking
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button>
                                                                <BookmarkBorderOutlinedIcon className='icon align-items-center'/>
                                                                My Voucher
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button>
                                                                <FavoriteBorderOutlinedIcon className='icon align-items-center'/>
                                                                My Wishlist
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button>
                                                                <SettingsOutlinedIcon className='icon align-items-center'/>
                                                                Settings
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button>
                                                                <LogoutOutlinedIcon className='icon align-items-center'/>
                                                                Log Out
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                        </ul>
                                    </ClickAwayListener>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Nav />
            </div>
        </>
    );
}

export default Header;
