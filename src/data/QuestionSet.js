const questions = [
  {
    quest: "Do you eat meat?",
    options: ["Yes", "No", "I am vegan"],
    qID: "food1",
  },
  {
    quest: "How often do you eat out?",
    options: [
      "Less than once a week",
      "Once a week",
      "Twice a week",
      "Three times a week or more",
    ],
    qID: "food2",
  },
  {
    quest: "Do you buy most of your food locally grown?",
    options: ["Yes", "No"],
    qID: "food3",
  },
  {
    quest: "How much of the food you eat is wasted?",
    options: ["Less than 5%", "5-10%", "10-20%", "20-30%", "More than 30%"],
    qID: "food4",
  },
  {
    quest: "Do you drive a car, bike or truck?",
    options: ["Yes", "No"],
    qID: "travel1",
  },
  {
    quest: "If yes, how many miles do you drive per week?",
    options: ["Less than 500", "500-1000", "More than 1000", "None"],
    qID: "travel2",
  },
  {
    quest: "Do you use public transportation?",
    options: ["Yes", "No"],
    qID: "travel3",
  },
  {
    quest: "How many flights did you take in the past year?",
    options: ["None", "1-2", "3-4", "5-6", "More than 6"],
    qID: "travel4",
  },
  {
    quest: "What type of home do you live in?",
    options: ["Apartment", "House", "Townhouse", "Other"],
    qID: "home1",
  },
  {
    quest: "How big is your home (in square feet)?",
    options: ["Less than 500", "500-1000", "1000-2000", "More than 2000"],
    qID: "home2",
  },
  {
    quest: "What type of energy do you use for heating and cooling?",
    options: ["Electricity", "Natural gas", "Other"],
    qID: "home3",
  },
  {
    quest: "How many people live in your household?",
    options: ["1", "2", "3", "4", "5 or more"],
    qID: "home4",
  },
  {
    quest: "What is your monthly clothing and footwear budget?",
    options: [
      "Less than ₹500",
      "₹500-1000",
      "₹1000-2000",
      "₹2000-3000",
      "More than ₹3000",
    ],
    qID: "other1",
  },
  {
    quest:
      "What is your monthly spending on internet, gaming, and entertainment",
    options: [
      "Less than ₹500",
      "₹500-1000",
      "₹1000-2000",
      "₹2000-3000",
      "More than ₹3000",
    ],
    qID: "other2",
  },
  {
    quest: "Do you have solar panels?",
    options: ["Yes", "No"],
    qID: "other3",
  },
  {
    quest: "Do you recycle all recyclable materials?",
    options: ["Yes", "No"],
    qID: "other4",
  },
];

export default questions;