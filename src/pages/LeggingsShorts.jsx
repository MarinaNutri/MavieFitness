import React from 'react'
import './Produtos.css'
import axios from 'axios'

const LeggingsShorts = () => {
  const itens = [
    {
      nome: "Short Mavie",
      cor: "Roxo",
      preço: "R$59,90",
      foto: "https://cbu01.alicdn.com/img/ibank/O1CN01HFPk442FbKqk8Mh6F_!!3374278898-0-cib.jpg"
    },
    {
      nome: "Top Mavie",
      cor: "Verde",
      preço: "R$59,90",
      foto: "https://cbu01.alicdn.com/img/ibank/O1CN01AvKVCs2FbKqiFRNmF_!!3374278898-0-cib.jpg"
    }
  
  ]
  return (
    <div className='boxProdutos'>
      <h1>Leggings e Shorts</h1>
      <ul className='todosProdutos'>
        {
          itens.map((item) => {
            return (
                <li className='itemProduto'>
                  <img src={item.foto} alt="imagem do produto"/>
                  <h3>{item.nome}</h3>
                  <p>Cor: {item.cor}</p> 
                  <p>Preço: {item.preço} no PIX</p>
                  <p>ou até 10x de {(item.preço)/10 }</p>
                </li>
            )
          })
        }

      </ul>
    </div>
  )
}
 
export default LeggingsShorts