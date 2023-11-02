import React from 'react'

/** Styles */
import breadcrumb from '../styles/breadcrumb.module.scss'

export const Breadcrumb = ({categories}: {categories: string[]}) => {
  return (
    <div className={breadcrumb.container}>
        <ul>
        {
            categories ? categories.map((category: string)=>(
            <li key={category}>{category}</li>
            )) : ''
        }
        </ul>
    </div>
  )
}

export default Breadcrumb;