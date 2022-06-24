import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch( 
            activeNote( id, {
                date, title, body, url
            })
        );
    }
  return (
    <div className="journal__entry pointer"  >
        {
          (url)&&
          (
            <div className="journal__entry-picture"
            style={{
               backgroundImage:`url:(${url})`,
               backgroundSize: 'cover',
            }}>
                
            </div>
          )
        }
       
        <div className="journal__entry-body">
          <p className="journal__entry-title">New day</p>
          <p className="journal__entry-content">Lorem ipsum dolor sit amet consectetur adipisicing </p>

        </div>
        <div className="journal__entry-date-box">
         <span>Monday</span>
         <h4>28</h4>

        </div>
    </div>
  )
}

export default JournalEntry