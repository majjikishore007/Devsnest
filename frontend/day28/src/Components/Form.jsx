import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../Actions";
const Form = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className='container1'>
      <div className='row'>
        <div className='col-12 form'>
          <input
            type=''
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className='btn btn-primary'
            onClick={() => {
              dispatch(updatePlaceData(place));
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
