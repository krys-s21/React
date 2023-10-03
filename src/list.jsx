import React, { useEffect, useState } from 'react';

function List() {
  const [users, setUsers] = useState([]);

  const appStyles = {
    backgroundColor: '#FAF2C3',
    padding: '10px',
  };
  const appInlineStyles = {
    width: 'calc(100% - 20px)',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  };
  const itemStyles = {
    backgroundColor: 'white',
    flex: '30% 1',
    padding: '10px',
    border: '1px',
    borderColor: '#000000',
  };

  const getAPIData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/',
    ).then((res) => res.json());
    setUsers(
      response.sort((a, b) => b.id - a.id),
    );
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className="list" style={appStyles}>
      <div style={appInlineStyles}>
        {users
          .filter((user) => user.id < 100)
          .map((user) => (
            <div className="item" style={itemStyles}>
              Id:
              {user.id}
              <div className="title">
                Title:
                {user.title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default List;
