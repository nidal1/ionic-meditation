import { IonButton } from '@ionic/react';
import React from 'react'
import './Botton.scss';
function Botton({className, text, onBtnClick}) {
    return (
            <IonButton className={`btn ${className}`} onClick={onBtnClick}>
            {text}
            </IonButton>
    )
}

export default Botton
