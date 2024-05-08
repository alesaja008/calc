import React, { useState } from "react";
import Image from "next/image";
import papper from "../asset/img/papper.jpg";
import logo from "../asset/img/logoBs.png";

const Kalkulator = () => {
  const [jumlahHalaman, setJumlahHalaman] = useState("");
  const [hasil, setHasil] = useState("");

  const hitung = (value) => {
    let calc;
    const a = parseInt(jumlahHalaman);
    if (!isNaN(a)) {
      if (value === "hvs80") {
        calc = (a * 0.11) / 2;
      } else if (value === "hvs100") {
        calc = (a * 0.12) / 2;
      } else if (value === "concoard90") {
        calc = (a * 0.14) / 2;
      } else if (value === "ap120") {
        calc = (a * 0.1) / 2;
      } else if (value === "ap150") {
        calc = (a * 0.13) / 2;
      } else if (value === "mp120") {
        calc = (a * 0.11) / 2;
      } else if (value === "mp150") {
        calc = (a * 0.15) / 2;
      } else if (value === "ac210") {
        calc = (a * 0.22) / 2;
      } else if (value === "ac260") {
        calc = (a * 0.28) / 2;
      } else if (value === "ac310") {
        calc = (a * 0.36) / 2;
      } else if (value === "ac400") {
        calc = (a * 0.55) / 2;
      } else if (value === "ivory300") {
        calc = (a * 0.4) / 2;
      } else if (value === "ivory360") {
        calc = (a * 0.5) / 2;
      } else if (value === "corugtCoklat") {
        calc = (a * 2.1) / 2;
      } else if (value === "corugtWhite") {
        calc = (a * 1.7) / 2;
      } else if (value === "fmb10mm") {
        calc = (a * 10.18) / 2;
      } else if (value === "fmb5mm") {
        calc = (a * 5.12) / 2;
      } else if (value === "infraBoard5") {
        calc = (a * 5.15) / 2;
      }
      setHasil(calc);
    } else {
      setHasil("");
    }
  };

  const handleChangeJumlahHalaman = (e) => {
    const { value } = e.target;
    if (!isNaN(value) || value === "") {
      setJumlahHalaman(value);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row centered">
          <div className="col-lg-10">
            <div class="d-flex  bd-highlight justify-content-center">
              <Image className="logoBs" src={logo} alt="logo" />
            </div>
            <div className="cardNew  ">
              <h2 className="text-center titleJdl">Calculator Ukuran Buku</h2>
              <div className="card-body">
                <p class="text-start textNew">
                  Hasil ketebalan punggung buku :
                </p>
                <div id="answer">
                  <div className="form-group">
                    <div className="form-group">
                      <label className="float-left">
                        {hasil} &nbsp;<span className="mili">mm</span>
                      </label>
                    </div>
                  </div>
                </div>
                <p class="text-end textNew">
                  Masukan jumlah Halaman dengan (MM):
                </p>
                <input
                  type="text"
                  name="jumhal"
                  id="jumhal"
                  value={jumlahHalaman}
                  onChange={handleChangeJumlahHalaman}
                  className="form-control"
                  placeholder="Jumlah Halaman"
                />
              </div>

              <div className="main-container mt-4">
                <div className="radio-buttons">
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="bahan"
                      value="hvs80"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">HVS 80gr</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      name="bahan"
                      value="hvs100"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">HVS 100gr</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="concoard90"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Concoard 90gr</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ap120"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Art Paper 120gr</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ap150"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Art Paper 150gr</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="mp120"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Matte Paper 120grr</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="mp150"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Matte Paper 150gr</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ac210"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Art Cartoon 210gr</h3>
                      </div>
                    </span>
                  </label>
                  {/* batas tambahan*/}
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ac260"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Art Carton 260</h3>
                      </div>
                    </span>
                  </label>
                  {/* batas tambahan*/}
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ac310"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Art Carton 310</h3>
                      </div>
                    </span>
                  </label>
                  {/* batas tambahan*/}
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ac400"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Art Carton 400</h3>
                      </div>
                    </span>
                  </label>
                  {/* batas tambahan*/}
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ivory300"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">IVORY 300</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="ivory360"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">IVORY 360</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="corugtCoklat"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Corugated Wall <br />2 mm Coklat
                        </h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="corugtWhite"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Corugated Wall <br />2 mm Putih
                        </h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="fmb10mm"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Foamboard <br />
                          10 mm
                        </h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="fmb5mm"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Foamboard <br />5 mm
                        </h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="infraBoard5"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Infraboard <br />5 mm
                        </h3>
                      </div>
                    </span>
                  </label>
                </div>
              </div>

              <div class="d-flex justify-content-center">
                <p className="AlesPixie mb-0 mt-3">build with love ❤️</p>
              </div>
              {/* <div class="d-flex justify-content-center ">
                <p className="AlesPixie mb-0 ">
                  Developer by Zulfikar Ramadhan with Ales
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kalkulator;
