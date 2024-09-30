import React from "react";
import './style.css';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import {Link} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';

const Products = (props) => {
    return (
        <>
            <div className='productThumb'>
                {
                    props.tag != null &&
                    <span className={`badge ${props.tag}`}>{props.title}</span>
                }
                <Link>
                <div className='imageWraper'>
                        <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg'
                             className='w-100'/>
                        <div className='overlay'>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item mb-0'>
                                    <Tooltip title="Add to Wishlist" placement="top">
                                        <a className='cursor'><FavoriteBorderOutlinedIcon/></a>
                                    </Tooltip>
                                </li>
                                <li className='list-inline-item mb-0'>
                                    <Tooltip title="Compare" placement="top">
                                        <a className='cursor'><CompareArrowsOutlinedIcon/></a>
                                    </Tooltip>
                                </li>
                                <li className='list-inline-item mb-0'>
                                    <Tooltip title="Quick View" placement="top">
                                        <a className='cursor'><RemoveRedEyeOutlinedIcon/></a>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>
                <div className='info'>
                    <span className='d-block catName'>Snack</span>
                    <h4 className='title'><Link> Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
                    <span className='brand d-block'>by <Link>NestFood</Link></span>
                    <div className='d-flex align-items-center mt-3'>
                        <div className='d-flex align-items-center'>
                            <span className='price greenText'>$28.85</span><span className='oldPrice'><del>$32.8</del></span>
                        </div>
                        <Button style={{marginLeft: "auto"}}><ShoppingCartOutlinedIcon/> Add</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products