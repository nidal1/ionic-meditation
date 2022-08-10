import { IonList } from "@ionic/react";

import "./TabOne.scss";
import calm from "../assets/images/calm.svg";
import relax from "../assets/images/relax.svg";
import focus from "../assets/images/focus.svg";
import anxious from "../assets/images/anxious.svg";
import mediation_img_1 from "../assets/images/mediation_img_1.svg";
import mediation_img_2 from "../assets/images/mediation_img_2.svg";
import play from "../assets/images/play.svg";
import TabBase from "./TabBase";

export default function TabOne() {
  return (
    <TabBase>
      <h2>Welcome back, Afreen!</h2>
      <p>How are you feeling today ?</p>

      <div className="feelings">
        <div className="feeling-container">
          <div className="img-container">
            <img src={calm} alt="" />
          </div>
          <p>Calm</p>
        </div>
        <div className="feeling-container">
          <div className="img-container">
            <img src={relax} alt="" />
          </div>
          <p>Relax</p>
        </div>
        <div className="feeling-container">
          <div className="img-container">
            <img src={focus} alt="" />
          </div>
          <p>Focux</p>
        </div>
        <div className="feeling-container">
          <div className="img-container">
            <img src={anxious} alt="" />
          </div>
          <p>Anxious</p>
        </div>
      </div>

      <IonList className="scroll-content mediation-list">
        <div className="mediation-item">
          <div className="left">
            <h3>Meditation 101</h3>
            <p>
              Techniques, Benefits, and <br /> a Beginner’s How-To
            </p>
            <button>
              <span>watch now</span>
              <img src={play} alt="" />
            </button>
          </div>
          <img src={mediation_img_1} alt="" />
        </div>

        <div className="mediation-item">
          <div className="left">
            <h3>Cardio Meditation</h3>
            <p>
              Basics of Yoga for Beginners <br /> or Experienced Professionals
            </p>
            <button>
              <span>watch now</span>
              <img src={play} alt="" />
            </button>
          </div>
          <img src={mediation_img_2} alt="" />
        </div>
      </IonList>
    </TabBase>
  );
}
