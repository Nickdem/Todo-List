import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav className="navigation">
    <h2 className="navigation__title">ToDo</h2>
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <NavLink className="navigation__list-link" activeClassName="navigation__list-link--selected" exact to="/">Список дел</NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink className="navigation__list-link" activeClassName="navigation__list-link--selected" to="/about">Инфо</NavLink>
      </li>
    </ul>
  </nav>
)
