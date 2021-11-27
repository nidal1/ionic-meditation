import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import AuthBase from '../components/AuthBase'

function Signup() {
    return (
        <IonPage>
            <IonContent fullscreen >
                <AuthBase showNameBtn btnText="SIGNUP" goTo="signin"/>
            </IonContent>
        </IonPage>
    )
}

export default Signup
