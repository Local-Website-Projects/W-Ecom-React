import React from "react";
import './style.css';
import HomeSlider from "./slider";
import CatSlider from "../../components/catSlider";
import Products from "../../components/products";

const Home = () => {
    return (
        <>
            <HomeSlider></HomeSlider>
            <CatSlider></CatSlider>
            <section className='homeProducts'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Popular Products</h2>
                        <ul className='list list-inline filterTab mb-0'>
                            <li className='list-inline-item'>
                                <a className='cursor'>All</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Milks & Dairies</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Coffes & Teas</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Pet</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Foods</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Meats</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Vegetables</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Fruits</a>
                            </li>
                        </ul>
                    </div>
                    <div className='row productRow'>
                        <div className='item'>
                            <Products tag="hot" title="Hot"></Products>
                        </div>
                        <div className='item'>
                            <Products tag="sale" title="Sale"></Products>
                        </div>
                        <div className='item'>
                            <Products tag="new" title="New"></Products>
                        </div>
                        <div className='item'>
                            <Products tag="discount" title="-20%"></Products>
                        </div>
                        <div className='item'>
                            <Products></Products>
                        </div>
                        <div className='item'>
                            <Products></Products>
                        </div>
                        <div className='item'>
                            <Products></Products>
                        </div>
                        <div className='item'>
                            <Products></Products>
                        </div>
                        <div className='item'>
                            <Products></Products>
                        </div>
                        <div className='item'>
                            <Products></Products>
                        </div>
                    </div>
                </div>
            </section>

            <section className='homeProducts'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center'>
                        <h2 className='hd mb-0 mt-0'>Daily Best Sells</h2>
                        <ul className='list list-inline filterTab mb-0'>
                            <li className='list-inline-item'>
                                <a className='cursor'>Featured</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>Popular</a>
                            </li>
                            <li className='list-inline-item'>
                                <a className='cursor'>New added</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home