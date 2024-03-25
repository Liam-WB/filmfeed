import React from 'react'
import NoResults from '../assets/no-results.png'
import NFstyles from '../styles/NotFound.module.css'
import Asset from './Asset'

const NotFound = () => {
  return (
    <div className={NFstyles}>
        <Asset src={NoResults} message="Sorry, the page you're looking for doesn't exist"></Asset>
    </div>
  )
}

export default NotFound