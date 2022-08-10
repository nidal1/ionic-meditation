import TabBase from "./TabBase";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

import ProfileImg from "../assets/images/profile-img.png";
import Stats from "../assets/images/stats.png";
import { Redirect, Route } from "react-router-dom";
import "./TabThree.scss";
import { useState } from "react";
export default function TabThree() {
  const [selectedtab, setSelectedtab] = useState("innerTab1");

  return (
    <TabBase>
      <div className="main-container">
        <img className="profile-img" src={ProfileImg} alt="" />
        <h3>Afreen Khan</h3>
        <p>Lucknow, India</p>
        <div className="tab-container">
          <IonTabs
            className="profile-tabs"
            onIonTabsWillChange={(e) => setSelectedtab(e.detail.tab)}
          >
            <IonRouterOutlet>
              <Route
                exact
                path={`/main/tab3`}
                render={() => <Redirect to={`/main/tab3/innerTab1`} />}
              />
              <Route
                path={`/main/tab3/innerTab1`}
                component={() => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 235,
                        height: 271,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <img src={Stats} alt="" style={{ marginTop: 43 }} />
                    </div>
                  </div>
                )}
              />
              <Route
                path={`/main/tab3/innerTab2`}
                component={() => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 235,
                        height: 271,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <img src={Stats} alt="" style={{ marginTop: 43 }} />
                    </div>
                  </div>
                )}
              />
            </IonRouterOutlet>
            <IonTabBar slot="top">
              <IonTabButton
                tab="innerTab1"
                href={`/main/tab3/innerTab1`}
                style={{
                  borderBottomColor:
                    selectedtab == "innerTab1" ? "#95CBCF" : "#3A5051",
                }}
              >
                <IonLabel
                  style={{
                    color:
                      (selectedtab == "innerTab1" ? "white" : "#3A5051") +
                      " !important",
                  }}
                >
                  STATS
                </IonLabel>
              </IonTabButton>

              <IonTabButton
                tab="innerTab2"
                href={`/main/tab3/innerTab2`}
                style={{
                  color:
                    selectedtab != "innerTab1"
                      ? "white !important"
                      : "#3A5051 !important",
                  borderBottomColor:
                    selectedtab != "innerTab1" ? "#95CBCF" : "#3A5051",
                }}
              >
                <IonLabel>ACHIEVEMENTS</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </div>
      </div>
    </TabBase>
  );
}
