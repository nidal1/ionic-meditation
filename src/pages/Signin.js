import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import AuthBase from '../components/AuthBase'

function Signin() {
    return (
        <IonPage>
            <IonContent fullscreen >
                <AuthBase showForgotPasswordLink btnText="LOGIN" goTo="signup"/>
            </IonContent>
        </IonPage>
    )
}

export default Signin
