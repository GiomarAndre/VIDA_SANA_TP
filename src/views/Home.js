import * as React from 'react';
import menu from '../components/assets/menu.png'
import logo from '../components/assets/logo_vida_sana.jpg'
import { Link } from "react-router-dom"

const Home = () => {

   
        return (
            <>
                <div className='header-main'>
                    <div className='menu container'>
                    <img src={logo} className='logo-main'/>
                        <input type='checkbox' id='menu'></input>
                        <label className='menu'>
                            <img src={menu} className='menu-icono'/>
                        </label>
                        <nav className='navbar'>
                        </nav>
                    </div>
                </div>
                <div className='subheader-main'>
                    <div className='container'>
                        <ul>
                            <li className=''><Link to="/">USUARIO</Link></li>
                            <li className=''><Link to="/">REPORTE DE PESOS</Link></li>
                            <li className=''><Link to="/">REGISTRO DE EJERCICIOS</Link></li>
                            <li className=''><Link to="/">REPORTE DE PASOS</Link></li>
                            <li className=''><Link to="/">REPORTE DE EJERCICIOS</Link></li>
                        </ul>
                    </div>               
                </div>
                <div className='main'>
                    <div className='container'>
                        <h1>¡Hola admin!</h1>
                        <div className='msg-principal'>
                            <p>¡Bienvenido a Vida Sana, tu compañero en el camino hacia un estilo de vida más saludable! 
                                Aquí encontrarás herramientas, consejos y motivación para lograr tus metas de bienestar. ¡Comencemos juntos este emocionante viaje hacia una vida más saludable y activa</p>
                        </div>
                    </div>
                </div>
            </>
        )
  
}

export default Home