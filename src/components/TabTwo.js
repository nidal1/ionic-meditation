import TabBase from "./TabBase";
import { IonButton } from "@ionic/react";
import albumArt from "../assets/images/album-art.svg";
import alt from "../assets/images/alt.svg";
import prev from "../assets/images/prev.svg";
import next from "../assets/images/next.svg";
import repeat from "../assets/images/repeat.svg";
import play from "../assets/images/play-music.svg";
import pause from "../assets/images/pause-music.svg";
import timer from "../assets/images/timer.png";

import "./TabTwo.scss";

export default function TabTwo() {
  return (
    <TabBase>
      <div className="main-container">
        <img className="album-img" src={albumArt} alt="" />
        <h3>Painting Forest</h3>
        <p>By: Painting with Passion</p>

        <img className="timer-img" src={timer} alt="" />
        <div className="buttons">
          <IonButton className="music-btn">
            <img src={alt} alt="" />
          </IonButton>
          <IonButton className="music-btn">
            <img src={prev} alt="" />
          </IonButton>
          <IonButton className="music-btn toggle-btn">
            <img src={pause} alt="" />
          </IonButton>
          <IonButton className="music-btn">
            <img src={next} alt="" />
          </IonButton>

          <IonButton className="music-btn">
            <img src={repeat} alt="" />
          </IonButton>
        </div>
      </div>
    </TabBase>
  );
}
