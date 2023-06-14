import React from 'react'
import { useState } from 'react'
import './Contato.css'
import emailjs from '@emailjs/browser'

const Contato = () => {
  const [name, setName] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault()

    if (name === '' || email === '' || message === ''){
      alert("Preencha todos os campos")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      numero: numero,
      email: email
    }

    emailjs.send("service_l9qe3w9", "template_d1yfsxf", templateParams,"FptgsAOgIG0jcqfzD").then((response) => {
      console.log("email enviado", response.status, response.text)
      setName("")
      setEmail("")
      setNumero("")
      setMessage("")
    }, (err) => {
      console.log("Erro:", err)
    })

  }
  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={(sendEmail)}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input 
          className="input"
          type="text"
          placeholder="Digite seu número de WhatsApp"
          onChange={(e) => setNumero(e.target.value)}
          value={numero}
        />  

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default Contato