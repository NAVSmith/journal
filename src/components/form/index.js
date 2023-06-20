import React from 'react'
import "./entryForm.css";


export default function Form({children , handleSubmit}) {
  return (
    <>
    <form className="entry-form" onSubmit={handleSubmit}>
            {children}    
    </form>
    </>
  )
}


