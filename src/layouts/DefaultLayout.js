import React from 'react'
import Header from '../components/Header'

export default function DefaultLayout({children}) {
  return (
    <div>
        <Header />
        <div>{children}</div>
    </div>
  )
}
