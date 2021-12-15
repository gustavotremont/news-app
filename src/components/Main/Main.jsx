import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<p> soy la home </p>} exact />  
          <Route path="/form" element={<p> aquí el formulario </p>} /> 
          <Route path="/list" element={<p> soy las noticias </p>} /> 
        </Routes>
      </main>
    )
  }
}