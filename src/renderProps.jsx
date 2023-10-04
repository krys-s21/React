import React from 'react';

const tahoePeaks = [
  { name: 'Freel', elevation: 10891 },
  { name: 'Monument', elevation: 10067 },
  { name: 'Pyramid', elevation: 9983 },
  { name: 'Tallac', elevation: 9735 },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length
    ? renderEmpty
    : (
      <ul>
        {data.map((item) => (
          <li key={item.name}>{renderItem(item)}</li>
        ))}
      </ul>
    );
}

function RenderProps() {
  return (
    <div>
      <List
        data={tahoePeaks}
        renderEmpty={<p>This is empty</p>}
        renderItem={(item) => (
          <>
            {item.name}
            {' '}
            -
            {' '}
            {item.elevation}
          </>
        )}
      />
    </div>
  );
}

export default RenderProps;
