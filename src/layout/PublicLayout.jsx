import React from 'react'
import Header from '../components/Header'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            <main className="flex w-full   items-center justify-center">
          {children}
        </main>
        </div>
    )
}

export default PublicLayout
