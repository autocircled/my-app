
"use client";

import Link from 'next/link'
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../public/assets/images/Genuine_License-Logo.svg'
import { BsSearch } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import './header.css';

const Header = () => {

    // const [show, setShow] = useState(false);


    // const showDropDown = () => {
    //     setShow(true);
    // }
    // const hideDropDown = () => {
    //     setShow(false);
    // }

    return (
        <div>
            <Navbar expand="md" className="bg-body-tertiary">
                <div className='container header__fix'>
                    <div className="navbar-brand logo__and__form">
                        <Link href="/">
                            {/* <img src={logo} alt="logo" /> */}
                            <Image 
                                src={logo}
                                alt="logo"
                                priority={true} 
                                width={190}
                            />
                        </Link>
                        <div>
                            <form className='header__form__and__search__icon'>
                                <span className='header__form__search__input'>
                                    <input type="text" placeholder='Search For Products' />
                                </span>
                                <span className='header__form__search__icon'>
                                    <BsSearch />
                                </span>
                            </form>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Link href='/' className="nav-link">Home</Link>
                            <NavDropdown
                                title="Shop"
                                id="basic-nav-dropdown"
                            >
                                <Link href='/category/operating-systems' className='dropdown-item'>Operating System</Link>
                                <Link href='/category/office-suites' className='dropdown-item'>Office Suites</Link>
                                <Link href='/category/antivirus' className='dropdown-item'>Anti Virus</Link>
                                <Link href='/category/download-managers' className='dropdown-item'>Download Managers</Link>
                                <Link href='/category/data-recovery-softwares' className='dropdown-item'>Data Recovery Softwares</Link>
                                <Link href='/category/others' className='dropdown-item'>Others</Link>
                            </NavDropdown>
                            <NavDropdown
                                title="My Account"
                                id="basic-nav-dropdown"
                            >
                                <Link href="/my-account" className='dropdown-item'>My Account</Link>
                                <Link href="/cart" className='dropdown-item'>Cart</Link>
                                <Link href="/checkout" className='dropdown-item'>Check Out</Link>
                            </NavDropdown>
                            <NavDropdown
                                title="More"
                                id="basic-nav-dropdown"
                            >
                                <Link href='/privacy-policy' className='dropdown-item'>Privacy Policy</Link>
                                <Link href='/returns-refund-policy' className='dropdown-item'>Return & Refund Policy</Link>
                                <Link href='/terms-conditions' className='dropdown-item'>Terms & Conditions</Link>
                                <Link href='/delivery-policy' className='dropdown-item'>Delivery Policy</Link>
                                <Link href='/knowledge-base' className='dropdown-item'>Knowledge Base</Link>
                            </NavDropdown>
                        </Nav>
                        <div className='header__price__items__cart'>
                            <span className='header__price '>
                                <span className=''>₹</span>
                                <span>0</span>
                            </span>
                            <span className='header__items ml__10'>
                                <span className='mr__3'>0</span>
                                <span>items</span>
                            </span>
                            <span className='header__cart ml__10'>
                                <BsBagFill />
                            </span>
                        </div>
                    </Navbar.Collapse>

                </div>
            </Navbar>
        </div>
    )
}

export default Header