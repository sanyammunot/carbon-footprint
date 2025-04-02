import React, { useEffect, useRef, useState } from "react";
import questions from "../data/QuestionSet";
import optionValue from "../data/Option";
import img from "../data/img";
import { useNavigate } from "react-router-dom";

function Questionnaire() {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [optionselected, setOptionSelected] = useState("");
  const [questID, setQuestID] = useState("");
  const [progresswidth, setProgressWidth] = useState(0);
  const [image,setImage]=useState(img.foodimg)
  const [food, setFood] = useState(false);
  const [travel, setTravel] = useState(false);
  const [home, setHome] = useState(false);
  const [other, setOther] = useState(false);
  const navigate = useNavigate();
  const total = useRef(0);
  const total_food = useRef(0);
  const total_travel = useRef(0);
  const total_home = useRef(0);
  const total_other = useRef(0);
  
  const type = [
    {
      name: "Food",
      color: "bg-warning",
    },
    {
      name: "Travel",
      color: "bg-primary",
    },
    {
      name: "Home",
      color: "bg-info",
    },
    {
      name: "Others",
      color: "bg-danger",
    },
  ];

  const backquestionhandler = () => {
    setIndex(index - 1);
    if (index <= 4) setTravel(false);
    else if (index > 4 && index <= 8) setHome(false);
    else if (index > 8 && index <= 12) setOther(false);
    if (index === 4) {setIndex1(0);setImage(img.foodimg)}
    else if (index === 8) {setIndex1(1);setImage(img.travelimg)}
    else if (index === 12) {setIndex1(2);setImage(img.homeimg)}
    else if (index === 16) {setIndex1(3);setImage(img.otherimg)}
    if (optionselected !== "" && questID !== "") {
      total.current -= optionValue[questID][optionselected];
      if (index < 4) total_food.current -= optionValue[questID][optionselected];
      else if (index >= 4 && index < 8)
        total_travel.current -= optionValue[questID][optionselected];
      else if (index >= 8 && index < 12)
        total_home.current -= optionValue[questID][optionselected];
      else if (index >= 12 && index < 16)
        total_other.current -= optionValue[questID][optionselected];
    }
    setOptionSelected("");
    setQuestID("");
  };

  const nextquestionhandler = () => {
    if (index === 3) {setIndex1(1);setImage(img.travelimg)}
    else if (index === 7) {setIndex1(2);setImage(img.homeimg)}
    else if (index === 11) {setIndex1(3);setImage(img.otherimg)}
    if (index < 4) setFood(true);
    else if (index >= 4 && index < 8) setTravel(true);
    else if (index >= 8 && index < 12) setHome(true);
    else if (index >= 12 && index < 16) setOther(true);
    setOptionSelected("");
    setQuestID("");
    setIndex(index + 1);
  };

  const selectorhandler = (e, i) => {
    if (i === 15) submithandler();
    else if (index === 3) {setIndex1(1);setImage(img.travelimg)}
    else if (index === 7) {setIndex1(2);setImage(img.homeimg)}
    else if (index === 11) {setIndex1(3);setImage(img.otherimg)}
    if (index < 4) setFood(true);
    else if (index >= 4 && index < 8) setTravel(true);
    else if (index >= 8 && index < 12) setHome(true);
    else if (index >= 12 && index < 16) setOther(true);
    setOptionSelected(e);
    setQuestID(questions[i].qID);
    setIndex(index + 1);
  };

  const submithandler = () => {
    navigate("/result", {
      state: {
        total: total.current,
        totalfood: total_food.current,
        totaltravel: total_travel.current,
        totalhome: total_home.current,
        totalother: total_other.current,
      },
    });
  };

  useEffect(() => {
    if (optionselected !== "") {
      total.current += optionValue[questID][optionselected];
      if (index < 4) total_food.current += optionValue[questID][optionselected];
      else if (index >= 4 && index < 8)
        total_travel.current += optionValue[questID][optionselected];
      else if (index >= 8 && index < 12)
        total_home.current += optionValue[questID][optionselected];
      else if (index >= 12 && index < 16)
        total_other.current += optionValue[questID][optionselected];
    }
  }, [questID, optionselected]);

  useEffect(() => {
    if (index % 4 === 0) setProgressWidth(25);
    else if (index % 4 === 1) setProgressWidth(50);
    else if (index % 4 === 2) setProgressWidth(75);
    else if (index % 4 === 3) setProgressWidth(100);
  }, [index]);

  return (
    <div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 my-5 px-1 px-sm-5">
            <div className="progress-top ">
              <div className="d-flex  justify-content-start align-item-center">
                <div
                  className={`question-icon align-items-center ${type[index1].color} p-3 mb-2`}
                >
                  <img
                    className=""
                    src={image}
                    alt=""
                    width="25px"
                    height="25px"
                  />
                </div>
                <h4 className="mb-0 mt-1 ms-2">
                  {type[index1].name} Q{(index % 4) + 1} of 4
                </h4>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className={`progress-bar ${type[index1].color}`}
                  style={{ width: progresswidth + "%" }}
                ></div>
              </div>
            </div>
            <div className="question-box mx-sm-5 mx-0 px-sm-5 px-0 mt-4">
              <div className="question mb-2">
                <p>{questions[index].quest}</p>
              </div>
              <div className="option">
                {questions[index].options.map((e) => (
                  <div
                    className="border bg-dark text-light p-3 mb-2 text-center options"
                    onClick={() => selectorhandler(e, index)}
                  >
                    <span>{e}</span>
                  </div>
                ))}
              </div>
              <div
                className={`d-flex ${
                  index === 0
                    ? "justify-content-end"
                    : "justify-content-between"
                }  mt-3`}
              >
                {index === 0 ? null : (
                  <button className="back" onClick={backquestionhandler}>
                    Back
                  </button>
                )}
                {index === 15 ? (
                  <button className="button" onClick={submithandler}>
                    Submit
                  </button>
                ) : (
                  <button className="button" onClick={nextquestionhandler}>
                    Next Question
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 px-0 px-sm-5 mt-3 mb-5">
            <div className="row">
              <div className="col-6 col-sm-3 px-4 mb-4 mb-sm-0">
                <div className="d-flex justify-content-center">
                  <div className="question-icon align-items-center bg-warning p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/img/food.fe2c757b.svg"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Food</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning"
                    // style={{ width: food?progresswidth+"%":"0%" }}
                    // style={{ width: index<4?progresswidth+"%":"0%" }}
                    style={{
                      width:
                        index < 4 ? progresswidth + "%" : food ? "100%" : "0%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-6 col-sm-3 px-4 mb-4 mb-sm-0">
                <div className="d-flex justify-content-center">
                  <div className="question-icon align-items-center bg-primary p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/img/travel.377f26fb.svg"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Travel</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-primary"
                    // style={{ width: travel?progresswidth+"%":"0%" }}
                    style={{
                      width:
                        index >= 4 && index < 8
                          ? progresswidth + "%"
                          : travel
                          ? "100%"
                          : "0%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-6 col-sm-3 px-4 ">
                <div className="d-flex justify-content-center">
                  <div className="question-icon align-items-center bg-info p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/img/home.5fa6c3b9.svg"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Home</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-info"
                    // style={{ width: home?progresswidth+"%":"0%" }}
                    style={{
                      width:
                        index >= 8 && index < 12
                          ? progresswidth + "%"
                          : home
                          ? "100%"
                          : "0%",
                    }}
                  ></div>
                </div>
              </div>
              <div className="col-6 col-sm-3 px-4">
                <div className="d-flex justify-content-center">
                  <div className="question-icon align-items-center bg-danger p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/img/stuff.f8400931.svg"
                      alt=""
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Others</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    // style={{ width: other?progresswidth+"%":"0%" }}
                    style={{
                      width:
                        index >= 12 && index < 16
                          ? progresswidth + "%"
                          : other
                          ? "100%"
                          : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
