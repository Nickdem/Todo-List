import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1 className="about-title">Страница информации</h1>
      <h2 className="about-subtitle">Учебный мини-сайт - ToDo-list. </h2>
      <p className="about-text">
        Отличный помощник, когда вам нужно упорядочить свои повседневные дела, понять, чем нужно заняться.
        Текст-текст-текст.
      </p>
      <button className="about-btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  )
}
