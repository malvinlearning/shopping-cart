import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

export default function Navbar(){
    return (
        <header>
            <nav>
                <img className='logo' src={logo} alt="" />
                <a href="#">Home</a> 
                <a href="#">Shop</a> 
                <Icon className='icon' path={mdiCartOutline} size={1} />
            </nav>
        </header>
    )
}