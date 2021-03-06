// Library Imports:
import "./mainkontakt.css";
import React, { Component } from "react";

// Component Imports:

// Image Imports:

export default class MainKontakt extends Component {
  state = {
    step: 1,
    status: "Not Submit",
    name: "",
    tel: "",
    email: "",
    modell: "",
    aterforsaljare: "",
    forfragan: "",
  };

  buttonCheck = () => {
    setTimeout(() => {
      const { step } = this.state;
      if (step == 1) {
        const kontaktButton = document.getElementById(
          "selection-kontakt-button"
        );
        const provkorningButton = document.getElementById(
          "selection-provkorning-button"
        );
        provkorningButton.style.opacity = "1";
        kontaktButton.style.opacity = "0.5";
      } else if (step == 2) {
        const kontaktButton = document.getElementById(
          "selection-kontakt-button"
        );
        const provkorningButton = document.getElementById(
          "selection-provkorning-button"
        );
        provkorningButton.style.opacity = "0.5";
        kontaktButton.style.opacity = "1";
      }
    }, 0);
  };

  onClick = (value) => (e) => {
    this.buttonCheck();
    const { step } = this.state;
    this.setState({
      step: value,
    });
  };

  render() {
    // const { step } = this.state;
    const {
      step,
      status,
      name,
      tel,
      email,
      modell,
      aterforsaljare,
      forfragan,
    } = this.state;
    const values = { name, tel, email, modell, aterforsaljare, forfragan };

    const handleSubmit = async (e) => {
      console.log("Triggered form handleSubmit.");
      e.preventDefault();
      // this.setState({ step: 9999999 });
      // const serviceID = "xxx";
      // const templateID = "xxx_form";
      // const templateParams = {
      //   name: values.name,
      //   tel: values.tel,
      //   email: values.email,
      //   modell: values.modell,
      //   aterforsaljare: values.aterforsaljare,
      //   forfragan: values.forfragan,
      // };
      // window.emailjs.send(serviceID, templateID, templateParams).then(
      //   function (response) {
      //     console.log(
      //       "EmailJS Submit Success.",
      //       response,
      //       response.status,
      //       response.text
      //     );
      //   },
      //   function (error) {
      //     console.log("EmailJS Submit Failed", error);
      //   }
      // );
    };

    return (
      <div className="flexbox-mainkontakt-container">
        <div className="flexbox-mainkontakt-heading-container">
          <h1 id="mainkontakt-heading">KONTAKTA MIG</h1>
          <p id="mainkontakt-paragraph">
            ??nskar du att provk??ra eller f?? mer information om Maxus eldrivna
            transportbilar, s?? kan du fylla i formul??ret nedan f??r att bli
            kontaktad av en av v??ra ??terf??rs??ljare.
          </p>
        </div>
        <div className="flexbox-mainkontakt-form-container">
          <h3 id="mainkontakt-form-heading">VAD KAN VI HJ??LPA TILL MED?</h3>
          <div className="flexbox-mainkontakt-form-selection-container">
            <button
              onClick={this.onClick("1")}
              // onClick={() => { this.onClick("1"); this.provkorningClick();}}
              // onClick={this.onClick("1")}
              id="selection-provkorning-button"
            >
              Provk??rning
            </button>
            <button
              onClick={this.onClick("2")}
              // onClick={() => { this.onClick("2"); this.kontaktClick();}}
              id="selection-kontakt-button"
            >
              Skicka Meddelande
            </button>
          </div>
          {(() => {
            switch (step) {
              case "1":
                return (
                  <div className="flexbox-mainkontakt-form-provkorning">
                    <form
                      id="provkorning"
                      name="provkorning"
                      onSubmit={handleSubmit}
                    >
                      <div className="flexbox-mainkontakt-form-provkorning-label-input-container">
                        <label htmlFor="modell">VILKEN MODELL?</label>
                        <select name="modell" id="modell" form="provkorning">
                          <option value="eDeliver3">e-Deliver 3</option>
                          <option value="eDeliver9">e-Deliver 9</option>
                          <option value="eDeliver9Chassis">
                            e-Deliver 9 Chassis
                          </option>
                          <option value="Euniq6">Euniq 6</option>
                          <option value="EuniqMPV">Euniq MPV</option>
                          <option value="Euniq5-6-sitsig">
                            Euniq5-6-sitsig
                          </option>
                        </select>
                      </div>
                      <div className="flexbox-mainkontakt-form-provkorning-label-input-container">
                        <label htmlFor="aterforsaljare">
                          V??LJ DIN ??TERF??RS??LJARE
                        </label>
                        <select
                          name="aterforsaljare"
                          id="aterforsaljare"
                          form="provkorning"
                        >
                          <option value="bromma">Mobility Motors Bromma</option>
                          <option value="satra">Mobility Motors S??tra</option>
                          <option value="lorem">Ipsum Lorem Sit</option>
                        </select>
                      </div>
                      <fieldset>
                        <legend>KONTAKTINFORMATION</legend>
                        <div className="flexbox-mainkontakt-information-container">
                          <label htmlFor="name">Namn</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Namn"
                            required
                          />
                          <label htmlFor="phone">Telefon</label>
                          <input
                            id="phone"
                            name="phone"
                            type="number"
                            placeholder="Telefon"
                            required
                          />
                          <label htmlFor="email">E-postadress</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-postadress"
                            required
                          />
                        </div>
                      </fieldset>
                      <p id="provkorning-policy-paragraph">
                        Vi delar inte din e-post med andra och du f??r bara
                        information om Maxus Sverige fr??n v??ra ??terf??rs??ljare.
                        Du kan l??sa mer om v??r integritetspolicy{" "}
                        <a
                          id="provkorning-policy-anchor"
                          href="https://www.mbil.se/om-oss/integritetspolicy"
                        >
                          h??r
                        </a>
                        .
                      </p>
                      <div className="flexbox-mainkontakt-form-provkorning-villkor-container">
                        <input id="villkor" name="villkor" type="checkbox" />
                        <p id="provkorning-villkor-paragraph">
                          Jag accepterar villkoren f??r kontaktf??rfr??gan
                        </p>
                      </div>
                      <button
                        type="submit"
                        id="provkorning-form-submit-button"
                        form="provkorning"
                      >
                        SKICKA F??RFR??GAN
                      </button>
                    </form>
                  </div>
                );
              case "2":
                return (
                  <div>
                    <div className="flexbox-mainkontakt-form-provkorning">
                      <form
                        id="provkorning"
                        name="provkorning"
                        onSubmit={handleSubmit}
                      >
                        <div className="flexbox-mainkontakt-form-provkorning-label-input-container">
                          <label for="forfragan">F??RFR??GAN</label>
                          <textarea
                            id="forfragan"
                            name="forfragan"
                            rows="5"
                            cols="50"
                          />
                        </div>
                        <fieldset>
                          <legend>KONTAKTINFORMATION</legend>
                          <div className="flexbox-mainkontakt-information-container">
                            <label htmlFor="name">Namn</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Namn"
                              required
                            />
                            <label htmlFor="phone">Telefon</label>
                            <input
                              id="phone"
                              name="phone"
                              type="number"
                              placeholder="Telefon"
                              required
                            />
                            <label htmlFor="email">E-postadress</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="E-postadress"
                              required
                            />
                          </div>
                        </fieldset>
                        <p id="provkorning-policy-paragraph">
                          Vi delar inte din e-post med andra och du f??r bara
                          information om Maxus Sverige fr??n v??ra ??terf??rs??ljare.
                          Du kan l??sa mer om v??r integritetspolicy{" "}
                          <a
                            id="provkorning-policy-anchor"
                            href="https://www.mbil.se/om-oss/integritetspolicy"
                          >
                            h??r
                          </a>
                          .
                        </p>
                        <div className="flexbox-mainkontakt-form-provkorning-villkor-container">
                          <input id="villkor" name="villkor" type="checkbox" />
                          <p id="provkorning-villkor-paragraph">
                            Jag accepterar villkoren f??r kontaktf??rfr??gan
                          </p>
                        </div>
                        <button
                          type="submit"
                          id="provkorning-form-submit-button"
                          form="provkorning"
                        >
                          SKICKA F??RFR??GAN
                        </button>
                      </form>
                    </div>
                  </div>
                );
              default:
                return (
                  <div className="flexbox-mainkontakt-form-provkorning">
                    <form
                      id="provkorning"
                      name="provkorning"
                      onSubmit={handleSubmit}
                    >
                      <div className="flexbox-mainkontakt-form-provkorning-label-input-container">
                        <label htmlFor="modell">VILKEN MODELL?</label>
                        <select name="modell" id="modell" form="provkorning">
                          <option value="eDeliver3">e-Deliver 3</option>
                          <option value="eDeliver9">e-Deliver 9</option>
                          <option value="eDeliver9Chassis">
                            e-Deliver 9 Chassis
                          </option>
                          <option value="Euniq6">Euniq 6</option>
                          <option value="EuniqMPV">Euniq MPV</option>
                          <option value="Euniq5-6-sitsig">
                            Euniq5-6-sitsig
                          </option>
                        </select>
                      </div>
                      <div className="flexbox-mainkontakt-form-provkorning-label-input-container">
                        <label htmlFor="aterforsaljare">
                          V??LJ DIN ??TERF??RS??LJARE
                        </label>
                        <select
                          name="aterforsaljare"
                          id="aterforsaljare"
                          form="provkorning"
                        >
                          <option value="">Mobility Motors Bromma</option>
                          <option value="">Mobility Motors S??traf</option>
                          <option value=""></option>
                        </select>
                      </div>
                      <fieldset>
                        <legend>KONTAKTINFORMATION</legend>
                        <div className="flexbox-mainkontakt-information-container">
                          <label htmlFor="name">Namn</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Namn"
                            required
                          />
                          <label htmlFor="phone">Telefon</label>
                          <input
                            id="phone"
                            name="phone"
                            type="number"
                            placeholder="Telefon"
                            required
                          />
                          <label htmlFor="email">E-postadress</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-postadress"
                            required
                          />
                        </div>
                      </fieldset>
                      <p id="provkorning-policy-paragraph">
                        Vi delar inte din e-post med andra och du f??r bara
                        information om Maxus Sverige fr??n v??ra ??terf??rs??ljare.
                        Du kan l??sa mer om v??r integritetspolicy{" "}
                        <a
                          id="provkorning-policy-anchor"
                          href="https://www.mbil.se/om-oss/integritetspolicy"
                        >
                          h??r
                        </a>
                        .
                      </p>
                      <div className="flexbox-mainkontakt-form-provkorning-villkor-container">
                        <input id="villkor" name="villkor" type="checkbox" />
                        <p id="provkorning-villkor-paragraph">
                          Jag accepterar villkoren f??r kontaktf??rfr??gan
                        </p>
                      </div>
                      <button
                        type="submit"
                        id="provkorning-form-submit-button"
                        form="provkorning"
                      >
                        SKICKA F??RFR??GAN
                      </button>
                    </form>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
  }
}
