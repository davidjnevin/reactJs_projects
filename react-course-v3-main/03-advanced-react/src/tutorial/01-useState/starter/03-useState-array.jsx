import { data } from '../../../data';
import React, { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" style={{ marginTop: '1rem'}} onClick={() => setPeople([])}>
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
