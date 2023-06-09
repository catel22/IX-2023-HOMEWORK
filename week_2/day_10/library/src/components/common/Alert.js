// common alert component to notify the user
// ex. incorrect password

import React from 'react'

export default function Alert({
    show,
    onHide,
    className,
    children,
    variant = 'danger',
    ...others
}) {
    //use empty braces because react needs to return a single thing
    // we have multiple items
  return (<div>
    {
        show ? (<div {...others} className={"alert d-flex justify-content-between alert-" + variant + ' ' + className} role="alert">
        <div>{children}</div>

        {
            onHide ? (
                <div onClick={onHide} style={{cursor: 'pointer'}}>X</div>
            ) : (<></>)
        }
    </div>) : (<></>) 
    }
  </div>)
}
