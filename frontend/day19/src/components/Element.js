import React, { useState } from "react";

const Element = (props) => {
  const [isEditing, setIsEditing] = useState("");
  const { deleteItem, updateItem, item, index } = props;
  return (
    <div>
      {isEditing ? (
        <input
          type='text'
          name='name'
          id='name'
          required
          value={item.name}
          onChange={(e) => updateItem(index, { title: e.target.value })}
        />
      ) : (
        <h5 className='card-title'>{item.title}</h5>
      )}
      {isEditing ? (
        <input
          type='number'
          name='calorie'
          id='calorie'
          required
          value={item.calorie}
          onChange={(e) => updateItem(index, { calorie: e.target.value })}
        />
      ) : (
        <p className="='card-text'">
          {" "}
          You have consumed {item.calorie} calories
        </p>
      )}

      <button className='' onClick={() => deleteItem(index)}>
        Delete
      </button>
      <button className='' onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Done" : "Edit"}
      </button>
    </div>
  );
};

export default Element;
