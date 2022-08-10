import { useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import home_tab from "../assets/images/home_tab.svg";
import usr_tab from "../assets/images/usr_tab.svg";
import sounds_tab from "../assets/images/sounds_tab.svg";

import home_tab_selected from "../assets/images/home_tab_selected.svg";
import usr_tab_selected from "../assets/images/usr_tab_selected.svg";
import sounds_tab_selected from "../assets/images/sounds_tab_selected.svg";

import "./MainContainer.scss";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
function MainContainer() {
  const [selectedtab, setSelectedtab] = useState("tab1");
  return (
    <div className="container">
      <IonReactRouter>
        <IonTabs onIonTabsWillChange={(e) => setSelectedtab(e.detail.tab)}>
          <IonRouterOutlet>
            <Route exact path="/main/tab1" component={() => <TabOne />} />
            <Route exact path="/main/tab2" component={() => <TabTwo />} />
            <Route exact path="/main/tab3" component={() => <TabThree />} />
            <Route
              exact
              path="/main"
              render={() => <Redirect to="/main/tab1" />}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" class="tab-bar">
            <IonTabButton tab="tab1" href="/main/tab1" class="tab-bar-button">
              <img
                src={selectedtab == "tab1" ? home_tab_selected : home_tab}
                alt=""
              />
            </IonTabButton>

            <IonTabButton tab="tab2" href="/main/tab2" class="tab-bar-button">
              <img
                src={selectedtab == "tab2" ? sounds_tab_selected : sounds_tab}
                alt=""
              />
            </IonTabButton>

            <IonTabButton tab="tab3" href="/main/tab3" class="tab-bar-button">
              <img
                src={selectedtab == "tab3" ? usr_tab_selected : usr_tab}
                alt=""
              />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </div>
  );
}

export default MainContainer;
