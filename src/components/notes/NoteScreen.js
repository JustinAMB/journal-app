import React from 'react'
import  NotesAppBar from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
const { active:note } = useSelector( state => state.notes );
const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active:note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title, id } = formValues;
  
  const activeId = useRef(note.id);

  useEffect(() => {

      if (note.id !== activeId.current) {
          reset(note);
          activeId.current = note.id
      }

  }, [note, reset])

  useEffect(() => {

      dispatch(activeNote(formValues.id, {...formValues }));

  }, [formValues, dispatch])


  const handleDelete = () => {
      dispatch(startDeleting(id));
  }
  return (
    <div className="notes__main-content">
      <NotesAppBar/>
      <div className="notes__content">
        <input type="text" className="notes__title-input"  placeholder="Some awesome title" name="title" value={title} onchange={handleInputChange}/>
        <textarea className="notes__textarea" placeholder="what happened today" name="body" value={body} onchange={handleInputChange}></textarea>

        {
            (note.url) &&
            ( 
              <div className = "notes__image" >
                <img src = { note.url }
                alt = "imagen" />
              </div>
            )
        }
        
      </div>
      <button className = "btn btn-danger"
      onClick = { handleDelete }
        >
        Delete </button>
    </div>
  )
}

export default NoteScreen