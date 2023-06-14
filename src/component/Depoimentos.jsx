import React from 'react'
import './Depoimentos.css'
import estrelas from  '../assets/estrelas.png'

const Depoimentos = () => {
  return (
    <div className='depoimentos'>
    <div className="depo">
        <p className='fraseDepo'>"Simplesmente perfeito! Amei o tecido!!!"</p>
        <img src={estrelas} alt="icone de 5 estrelas" className='estrelas'/>
        <p className='nomeDepo'>Larissa Barcelos</p>
    </div>
    <div className="depo">
        <p className='fraseDepo'>"A legging veste muito bem. Vou comprar outras cores"</p>
        <img src={estrelas} alt="icone de 5 estrelas" className='estrelas'/>
        <p className='nomeDepo'>Carol Koerich</p>
    </div>
    <div className="depo">
        <p className='fraseDepo'>"Adorei o modelo de blusinha e o tecido é muito confortável"</p>
        <img src={estrelas} alt="icone de 5 estrelas" className='estrelas'/>
        <p className='nomeDepo'>Heloísa Sarkis</p>
    </div>
    <div className="depo">
        <p className='fraseDepo'>"Comprei um short e um top. Melhor compra da vida!"</p>
        <img src={estrelas} alt="icone de 5 estrelas" className='estrelas'/>
        <p className='nomeDepo'>Suellen Silva</p>
    </div>
</div>
  )
}

export default Depoimentos