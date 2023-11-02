import React from 'react'

/** Styles */
import loading from '../styles/loading.module.scss'

export const Loading = () => {
  return (
    <section className={loading.container}>
        <i className="bi bi-arrow-clockwise"></i>
    </section>
  )
}

export default Loading;
