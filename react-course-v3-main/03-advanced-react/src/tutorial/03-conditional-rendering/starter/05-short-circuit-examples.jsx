import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'David' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: '1rem' }}>Ternary</h2>
      <button className="btn">{isEditing ? 'edit' : 'add'}</button>
      {user ? (
        <div>
          <h1>Hello {user.name}</h1>
        </div>
      ) : (
        <div>
          <h1>Hello no user</h1>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

export default ShortCircuitExamples;
