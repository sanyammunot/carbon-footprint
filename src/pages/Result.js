import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FOOD from "../data/FOOD";
import TRAVEL from "../data/TRAVEL";
import HOME from "../data/HOME";
import OTHER from "../data/OTHER";
import "../App.css";
import foodimg from "../image/foodimg.jpg"
import travelimg from "../image/travelimg.jpg"
import otherimg from "../image/otherimg.jpg"
import homeimg from "../image/homeimg.jpg"

function Result() {
  const [display, setDisplay] = useState("none");
  const [matter, setMatter] = useState("");
  const [image, setImage] = useState(null);
  const location = useLocation();
  const total = location.state.total.toFixed(2) - 2;
  const food = location.state.totalfood.toFixed(2) - 0.5;
  const travel = location.state.totaltravel.toFixed(2) - 0.5;
  const home = location.state.totalhome.toFixed(2) - 0.5;
  const other = location.state.totalother.toFixed(2) - 0.5;

  const foodp = ((food / total) * 100).toFixed(2);
  const travelp = ((travel / total) * 100).toFixed(2);
  const homep = ((home / total) * 100).toFixed(2);
  const otherp = ((other / total) * 100).toFixed(2);
  console.log(total, food, travel, home, other);

  const closePopup = () => {
    setDisplay("none");
  };

  const openPopup = (e) => {
    if (e === "food") {
      if (foodp < 25) setMatter(FOOD.a);
      else if (foodp >= 25 && foodp < 50) setMatter(FOOD.b);
      else if (foodp >= 50 && foodp < 75) setMatter(FOOD.c);
      else if (foodp >= 75 && foodp < 100) setMatter(FOOD.d);
      setImage(foodimg);
    } else if (e === "travel") {
      if (travelp < 25) setMatter(TRAVEL.a);
      else if (travelp >= 25 && travelp < 50) setMatter(TRAVEL.b);
      else if (travelp >= 50 && travelp < 75) setMatter(TRAVEL.c);
      else if (travelp >= 75 && travelp < 100) setMatter(TRAVEL.d);
      setImage(travelimg);
    } else if (e === "home") {
      if (homep < 25) setMatter(HOME.a);
      else if (homep >= 25 && homep < 50) setMatter(HOME.b);
      else if (homep >= 50 && homep < 75) setMatter(HOME.c);
      else if (homep >= 75 && homep < 100) setMatter(HOME.d);
      setImage(homeimg);
    } else if (e === "other") {
      if (otherp < 25) setMatter(OTHER.a);
      else if (otherp >= 25 && otherp < 50) setMatter(OTHER.b);
      else if (otherp >= 50 && otherp < 75) setMatter(OTHER.c);
      else if (otherp >= 75 && otherp < 100) setMatter(OTHER.d);
      setImage(otherimg);
    }
    setDisplay("block");
  };

  return (
    <Container>
      <Container1>
        <div className="top">
          <h2>CONGRATULATIONS!</h2>
          <p>
            Your annual footprint is close to the world average. Try looking through our suggestions to improve your score.
          </p>
        </div>

        {/* <img src='https://footprint.wwf.org.uk/img/foot.58137a28.svg' alt="My Image" /> */}
        <div className="bg">
          <h1 className="footprint">YOUR FOOTPRINT IS EQUAL TO</h1>
          <h1 className="value">{total}</h1>
          <h1 className="tonnes">TONNES*</h1>
        </div>
      </Container1>
      <Container2>
        <img
          src="https://footprint.wwf.org.uk/img/globe-europe.dfc3b352.svg"
          alt="My Image"
        />
        <div className="world">
          <h1 className="footprint">World average</h1>
          <h1 className="value">6.3</h1>
          <h1 className="tonnes">TONNES*</h1>
        </div>
      </Container2>
      <Container3>
        <div className="box d-flex a">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/food.fe2c757b.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {Math.round(foodp) + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Food</h1>
            <button className="button" onClick={() => openPopup("food")}>
              Reduce the score
            </button>
          </div>
        </div>
        <div className="box b d-flex">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/travel.377f26fb.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {Math.round(travelp) + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Travel</h1>
            <button className="button" onClick={() => openPopup("travel")}>
              Reduce the score
            </button>
          </div>
        </div>
        <div className="box c d-flex">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/home.5fa6c3b9.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {Math.round(homep) + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Home</h1>
            <button className="button" onClick={() => openPopup("home")}>
              Reduce the score
            </button>
          </div>
        </div>
        <div className="box d d-flex">
          <div className="d-flex flex-column my-4 mx-4">
            <div>
              <img
                className="img-fluid"
                src="https://footprint.wwf.org.uk/img/stuff.f8400931.svg"
              ></img>
            </div>
            <h5 className="mb-0 mt-2 text-center text-light fw-bold">
              {Math.round(otherp) + "%"}
            </h5>
          </div>
          <div className="right ms-4 mt-4">
            <h1 className="text-light">Other</h1>
            <button className="button" onClick={() => openPopup("other")}>
              Reduce the score
            </button>
          </div>
        </div>
      </Container3>
      <div id="popup" className="popup-container" style={{ display: display }}>
        <div className="close-button text-light fw-bolder fs-4" onClick={closePopup}>
          X 
        </div>
        <div className="d-sm-flex ">
          <div className="w-50 toppopup">
            <img
              className=""
              width="100%"
              height="100%"
              src={image}
              alt="no-image"
            />
          </div>
          <div className="w-50 text-light mt-4 px-3 belowpopup">
            <p className="fs-4 matterpopup">{matter}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Result;

const Container1 = styled.div`
  height: 650px;
  width: 420px;
  background-color: #FFBF1E;
  border-radius: 10px;
  margin-top: 60px;
  margin-bottom: 20px;
  z-index: -2;
  display: flex;
  flex-direction: column; 

  h2 {
    font-size: 30px;
    font-weight: bold;
    padding: 20px; 
    text-align: center;
  }

  p {
    position: relative;
    line-height: 21px;
    text-align: center; 
  }

  @media screen and (max-width: 768px) {
   
   width:100%;
  }
  .footprint {
    font-size: 20px;
    position: relative;
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    ${"" /* width:50%; */}
    ${
      "" /* white-space: nowrap;
    overflow:hidden; */
    }
  }
  .value {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
    z-index: 2;
  }
  .tonnes {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-top: 0;
  }

  .bg {
    background-image: url("https://footprint.wwf.org.uk/img/foot.58137a28.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    height: 80%;
  }
  .top {
    height: 20%;
  }
`;

const Container2 = styled.div`
  height: 650px;
  width: 420px;
  background-color: black;
  border-radius: 10px;
  ${"" /* margin-left: 120px; */}
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  img {
    position: relative;
    margin-bottom: 0px;
    margin-top: auto;
    height: 200px;
  }

  .footprint {
    font-size: 30px;
    position: relative;
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    ${"" /* width:50%; */}
    ${
      "" /* white-space: nowrap;
    overflow:hidden; */
    }
    color:#FFBF1E;
  }
  .value {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
    z-index: 2;
    color: white;
  }
  .tonnes {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-top: 0;
    color: white;
  }

  .world {
    margin-bottom: auto;
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container3 = styled.div`
  height: 650px;
  width: 420px;
  background-color: black;
  border-radius: 10px;
  margin-top: 60px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .box {
    flex: 1;
    height: 20px;

    img {
      ${
        "" /* margin-left:40px;
    margin-top:auto;
    margin-bottom:auto; */
      }
    }
  }

  .a{
    background-color: #0094d5;
    border-radius: 10px 10px 0 0;
  }

  .b{
    background-color: #00b9ad;
  }

  .c{
    background-color: #f89834;
  }

  .d{
    background-color: #d04092;
    border-radius: 0px 0px 10px 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Change to a column layout */
    align-items: center; /* Center items horizontally when in column layout */
  }

  
`;

