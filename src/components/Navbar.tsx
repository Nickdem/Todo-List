import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar: React.FC = () => (
  <nav>
    <h2>React + TypeScript</h2>
    <ul>
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Инфо</NavLink>
        </li>
    </ul>
  </nav>
)
