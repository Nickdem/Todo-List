import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Рандомный текст</p>
            <button onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}