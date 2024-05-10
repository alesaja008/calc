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
        calc = (a * 0.31) / 2;
      } else if (value === "bp90") {
        calc = (a * 0.2) / 2;
      } else if (value === "m125") {
        calc = (a * 0.14) / 2;
      } else if (value === "es148") {
        calc = (a * 0.18) / 2;
      } else if (value === "vl116") {
        calc = (a * 0.14) / 2;
      } else if (value === "sew160") {
        calc = (a * 0.29) / 2;
      } else if (value === "bc190") {
        calc = (a * 0.27) / 2;
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
          <div className="col-lg-7">
            <div class="d-flex  bd-highlight justify-content-center">
              <Image className="logoBs" src={logo} alt="logo" />
            </div>
            <div className="cardNew  ">
              {/* <h2 className="text-center titleJdl">Calculator Ukuran Buku</h2> */}
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
                        <h3 className="">Matte Paper 120gr</h3>
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
                        <h3 className="">Art Carton 260 Gsm</h3>
                      </div>
                    </span>
                  </label>

                  {/* batas tambahan benar*/}
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="bp90"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Book paper Lux <br />
                          Cream 90 Gsm
                        </h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="m125"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Manington 125 Gsm</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="es148"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Everyday Smoot <br />
                          White 148 Gsm
                        </h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="vl116"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Via linen 116 Gsm</h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="sew160"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">
                          Splendorgel Extra <br />
                          White 160 Gsm
                        </h3>
                      </div>
                    </span>
                  </label>
                  <label className="custom-radio">
                    <input
                      type="radio"
                      value="bc190"
                      name="bahan"
                      onChange={(e) => hitung(e.target.value)}
                    />
                    <span className="radio-btn">
                      <i className="las la-check" />
                      <div className="hobbies-icon">
                        <Image src={papper} width={50} alt="papper" />
                        <h3 className="">Karton BC 190 Gsm</h3>
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
