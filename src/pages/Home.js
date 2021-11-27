import {
  IonContent,
  IonPage
} from '@ionic/react';
import { useHistory } from 'react-router';

import logo_lg from '../assets/images/logo_lg.svg'
import BgImgContainer from '../components/BgImgContainer';
import Botton from '../components/Botton';
import DontHaveAccount from '../components/DontHaveAccount';

import home_bg from '../assets/images/home_bg.svg'
import './Home.scss';

const Home = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen >
        <BgImgContainer bgimgurl={home_bg}>
          <div className="home_inner_items">
            <img src={logo_lg} alt="" />
            <h1>WELCOME</h1>
            <p className="sub_heading">Do meditation. Stay focused.<br /> Live a healthy life.</p>
            <Botton className="home_btn" text="Login With Email" onBtnClick={() => history.push('/login')} />
            <DontHaveAccount goTo="signup"/>
          </div>
        </BgImgContainer>
      </IonContent>
    </IonPage>
  );
};

export default Home;