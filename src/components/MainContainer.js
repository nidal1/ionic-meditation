import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonTab, IonToolbar, IonTitle, IonContent, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import home_tab from '../assets/images/home_tab.svg';
import usr_tab from '../assets/images/usr_tab.svg';
import sounds_tab from '../assets/images/sounds_tab.svg';

import './MainContainer.scss';
import TabBase from './TabBase';
function MainContainer() {
    return (
        <div className='container'>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/main/tab1" component={() => <TabBase />} exact={true} />
                        <Route exact path="/main/tab2" component={() => <TabBase />} exact={true} />
                        <Route exact path="/main/tab3" component={() => <TabBase />} />
                        <Route path="/main" render={() => <Redirect to="/main/tab1" />} exact />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom" class='tab-bar'>
                        <IonTabButton tab="schedule" href="/main/tab1" class='tab-bar-button'>
                            <img src={home_tab} alt="" />
                        </IonTabButton>

                        <IonTabButton tab="speakers" href="/main/tab2" class='tab-bar-button'>
                            <img src={sounds_tab} alt="" />
                        </IonTabButton>

                        <IonTabButton tab="map" href="/main/tab3" class='tab-bar-button'>
                            <img src={usr_tab} alt="" />
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </div>
    )
}

export default MainContainer