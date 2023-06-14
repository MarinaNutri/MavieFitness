import React from 'react'
import './Footer.css'
import instagram from '../assets/instagram.png'
import whats from '../assets/whats.png'
import email from '../assets/email.png'
import correios from '../assets/correios.png'
import boleto from '../assets/boleto.png'
import pix from '../assets/pix.png'
import visa from '../assets/visa.png'
import master from '../assets/master.png'
import elo from '../assets/elo.png'
import hiper from '../assets/hiper.png'
import american from '../assets/american.png'
import mercado from '../assets/mercado.png'

const Footer = () => {
  return (
    <footer>
      <div className='atendimento'>
        <h1 className='titulosFooter'>Atendimento</h1>
        <p className='itemAtendimento'>Segunda - Sexta das 8:00 às 18:00</p>
        <p className='itemAtendimento'>Instagram <img src={instagram} alt='logo instagram' className='midias'/></p>
        <p className='itemAtendimento'>WhatsApp <img src={whats} alt='logo whatsApp' className='midias'/></p>
        <p className='itemAtendimento'>Email <img src={email} alt='logo email' className='midias'/></p>
      </div>
      <div className='formasPagamento'>
        <h1 className='titulosFooter'>Formas de Pagamento</h1>
        <img src={pix} alt='logo pix' className='icoPagamento'/>
        <img src={boleto} alt='logo boleto' className='icoPagamento'/>
        <img src={master} alt='logo master' className='icoPagamento'/>
        <img src={visa} alt='logo visa' className='icoPagamento'/>
        <img src={elo} alt='logo elo' className='icoPagamento'/>
        <img src={hiper} alt='logo hipercard' className='icoPagamento'/>
        <img src={american} alt='logo american express' className='icoPagamento'/>
        <img src={mercado} alt='logo mercado pago' className='icoPagamento'/>
      </div>
      <div className='formasEntrega'>
        <h1 className='titulosFooter'>Entrega</h1>
        <img src={correios} alt='logo correios' className='icoCorreios'/>
      </div>
    </footer>
  )
}

export default Footer