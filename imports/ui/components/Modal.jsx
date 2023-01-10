import React from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({isOpened, children, onClose}) => {
    if (!isOpened){
        return null
    }
    return createPortal (
        <div>
            <div className='overlay'></div>
            <div className='modal'>
                <div className='modal-area'>                    
                    <div className='modal-content'>{children}</div>
                </div>
            </div>            
        </div>,
        document.getElementById('modal')
    )
}