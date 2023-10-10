import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

const DayView = ({ day }) => {
  const today = new Date();
  const todayDay = today.getDay();

  const dispatch = useDispatch();

  const date = new Date(day.yyyy, day.mm, day.dd);

  const markToDone = () => {
    if (day.id > todayDay) {
      alert("cannot change next day's status");
      return;
    }
    dispatch(habitDone(day.id));
  };

  const markToUnDone = () => {
    if (day.id > todayDay) {
      alert("cannot change next day's status");
      return;
    }
    dispatch(habitUnDone(day.id));
  };

  const markToNone = () => {
    if (day.id > todayDay) {
      alert("cannot change next day's status");
      return;
    }
    dispatch(habitNone(day.id));
  };

  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
      <i className={day.isDone === true ? "fa-solid fa-circle-check circle-icon active" : "fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone === false ? "fa-solid fa-circle-xmark circle-icon active" : "fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone === "" ? "fa-solid fa-circle-minus circle-icon active" : "fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
    </div>
  );
};

export default DayView;
