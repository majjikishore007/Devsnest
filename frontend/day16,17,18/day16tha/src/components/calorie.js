import React from "react";
import Card from "./card";
import "./styles.css";
const calorie = () => {
  return (
    <>
      <div className='container'>
        <Card title='Pizza' content='you have consumed 56 cals today'></Card>
        <Card title='Burger' content='you have consumed 69 cals today'></Card>
        <Card title='Coke' content='you have consumed 500 cals today'></Card>
        <Card title='Browne' content='you have consumed 180 cals today'></Card>
        <Card
          title='Fried Rice'
          content='you have consumed 90 cals today'
        ></Card>
        <Card
          title='Lassania'
          content='you have consumed 200 cals today'
        ></Card>
        <Card
          title='Pani Puri'
          content='you have consumed 10 cals today'
        ></Card>
      </div>
    </>
  );
};

export default calorie;
