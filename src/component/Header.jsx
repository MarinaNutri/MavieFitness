import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import carrinho from  '../assets/carrinho.png'

const Header = () => {
  return (
    <header>
      <div className='imgheader'>
        <img src={logo} alt='logo da marca'className='imgLogo'/>
        <Link to='/carrinho' className='imgCarrinho'><img src={carrinho} alt='icone carrinho'/></Link>
      </div>
      <div className='links'>
        <Link to='/' className='navLink'>Home</Link>
        <Link to='/conjuntos' className='navLink'>Conjuntos</Link>
        <Link to='/tops' className='navLink'>Tops/Blusas</Link>
        <Link to='/leggings' className='navLink'>Legging/Short</Link>
        <Link to='/carrinho' className='navLink'>Carrinho</Link>
        <Link to='/carrinho' className='navLink'>Pagamento</Link>
        <Link to='/contato' className='navLink'>Contato</Link>
      </div>
    </header>
    
        
  )
}

export default Header