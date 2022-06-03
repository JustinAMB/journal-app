import React from 'react'

const JournalEntry = () => {
  return (
    <div className="journal__entry">
        <div className="journal__entry-picture"
        style={{
           backgroundImage:url('https://static.videezy.com/system/resources/thumbnails/000/042/456/original/Sky-night-rotation-space-background.jpg'),
           backgroundSize: 'cover',
        }}>
            
        </div>
        <div className="journal__entry-body">
          <p className="journal__entry-title">New day</p>
          <p className="journal__entry-content">Lorem ipsum dolor sit amet consectetur adipisicing </p>

        </div>
    </div>
  )
}

export default JournalEntry