import React, { useState } from "react";

const Element = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteItem, updateItem, item, index } = props;
  return (
    <div>
      {console.log("EDITING ", isEditing)}
      {console.log(item)}
      <div className='card-body'>
        {isEditing ? (
          <input
            type='text'
            name='title'
            id='title'
            required
            value={item.name}
            onChange={(e) =>
              updateItem(index, { ...item, name: e.target.value })
            }
          />
        ) : (
          <h5 className='card-title'>{item.name}</h5>
        )}
        {isEditing ? (
          <input
            type='number'
            name='calorie'
            id='calorie'
            required
            value={item.calorie}
            onChange={(e) =>
              updateItem(index, { ...item, calorie: e.target.value })
            }
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
    </div>
  );
};

export default Element;
