import React from 'react'
import Sidebar from './Sidebar'

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
        <Sidebar/>
        <main>
          <h1>journal app</h1>
        </main>
    </div>
  )
}

export default JournalScreen