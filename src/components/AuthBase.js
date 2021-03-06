import { IonButton, IonInput, IonItem } from '@ionic/react';
import React from 'react';
import Botton from './Botton';


import login_bg from '../assets/images/login_bg.svg';
import logo_sm from '../assets/images/logo_sm.svg';
import BgImgContainer from './BgImgContainer';
import DontHaveAccount from './DontHaveAccount';
import { Link } from 'react-router-dom';
import './AuthBase.scss';

function AuthBase({ showNameBtn = false, showForgotPasswordLink = false, btnText, goTo, headingText, subheading }) {
    
    return (
        <BgImgContainer bgimgurl={login_bg}>
            <div className="auth_base_inner_items">
                <img src={logo_sm} alt="" />
                <h2>{headingText}</h2>
                <p className="sub_heading">{subheading}</p>

                {showNameBtn && (<IonItem className="auth_input_container">
                    <IonInput type="text" placeholder="Name" className="auth_input" />
                </IonItem>)}


                <IonItem className="auth_input_container">
                    <IonInput type="email" placeholder="Email Address" className="auth_input" />
                </IonItem>

                <IonItem className="auth_input_container">
                    <IonInput type="password" placeholder="Password" className="auth_input" />
                </IonItem>
                {showForgotPasswordLink && (
                    <p className="auth_forgot_password">
                        <Link to="">Forgot password?</Link>
                    </p>
                )}

                <Botton text={btnText} className="auth_btn" />
                <DontHaveAccount goTo={goTo}/>
            </div>

        </BgImgContainer>
    )
}

export default AuthBase
