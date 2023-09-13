import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './arbellb.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className="flex flex-wrap items-center justify-between border-solid border-2 border-white p-4">
  
      
      <NavLink to="/" className="LogoLink">
        <img src={logo} alt="logo" width="180px" className="p-2 m-2"/>  
      </NavLink> 
    
      
      <div className="productCat flex flex-col md:flex-row md:items-center md:space-x-4">
        <NavLink to={`/categoria/Fragancias`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
          Fragancias
        </NavLink>
        <NavLink to={`/categoria/Maquillaje`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
          Maquillaje
        </NavLink>
        <NavLink to={`/categoria/Cuidado Facial`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
          Cuidado Facial
        </NavLink>
        <NavLink to={`/Todos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
          Todos los productos
        </NavLink>
      </div>
      
      <CartWidget/>
    </nav>
  )
  
}

export default NavBar;