// Library Imports:
import "./aterforsaljare.css";
import React from "react";

// Component Imports:

// Image Imports:

const Aterforsaljare = () => {
  return (
    <div className="flexbox-aterforsaljare-container">
      <h1 id="aterforsaljare-heading">HITTA ÅTERFÖRSÄLJARE</h1>
      <div className="flexbox-aterforsaljare-item-container">
        <div className="flexbox-aterforsaljare-item flexbox-aterforsaljare-item-1">
          <h3 id="aterforsaljare-heading">Mobility Motors Sätra</h3>
          <a id="aterforsaljare-tel" href="tel:+46769999999">
            0769999999
          </a>
          <a id="aterforsaljare-email" href="mailto:leads@mbil.se">
            Skicka e-post
          </a>
          <span id="aterforsaljare-address">
            Murmästarvägen 1, 127 35 Skärholmen
          </span>
          <a
            id="aterforsaljare-directions"
            target="_blank"
            href="https://www.google.com/maps/place/Nissan+Mobility+Motors/@59.2863413,17.9400254,14z/data=!3m1!4b1!4m5!3m4!1s0x465f768d7250cc63:0x58e907aa428449a9!8m2!3d59.2863356!4d17.9400305"
          >
            Se vägbeskrivning
          </a>
        </div>
        <div className="flexbox-aterforsaljare-item flexbox-aterforsaljare-item-2">
          <h3 id="aterforsaljare-heading">Mobility Motors Bromma</h3>
          <a id="aterforsaljare-tel" href="tel:+46769999999">
            0769999999
          </a>
          <a id="aterforsaljare-email" href="mailto:leads@mbil.se">
            Skicka e-post
          </a>
          <span id="aterforsaljare-address">
            Ulvsundavägen 112, 168 67 Bromma
          </span>
          <a
            id="aterforsaljare-directions"
            target="_blank"
            href="https://www.google.com/maps/place/Nissan+Mobility+Motors+Bromma/@59.3468911,17.9572676,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9dfeb2bb8bbd:0xa6c0480b7aaa1dfc!8m2!3d59.3471366!4d17.9593193"
          >
            Se vägbeskrivning
          </a>
        </div>
        <div className="flexbox-aterforsaljare-item flexbox-aterforsaljare-item-3">
          <h3 id="aterforsaljare-heading">Mobility Motors XXX</h3>
          <a id="aterforsaljare-tel" href="tel:+46769999999">
            0769999999
          </a>
          <a id="aterforsaljare-email" href="mailto:leads@mbil.se">
            Skicka e-post
          </a>
          <span id="aterforsaljare-address">
            Sveavägen 46, 111 34 Stockholm
          </span>
          <a
            id="aterforsaljare-directions"
            target="_blank"
            href="https://www.google.com/maps/place/Nissan+Mobility+Motors/@59.2863413,17.9400254,14z/data=!3m1!4b1!4m5!3m4!1s0x465f768d7250cc63:0x58e907aa428449a9!8m2!3d59.2863356!4d17.9400305"
          >
            Se vägbeskrivning
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aterforsaljare;
