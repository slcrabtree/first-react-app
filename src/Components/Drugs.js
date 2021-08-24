import React from 'react';

const DrugList = (props) => {
  const { drugs } = props;
  if (!drugs || drugs.length === 0) return <p>No matching drug names.</p>;
  return (
    <ul>
      {drugs.map((drug) => {
        return (
          <li key={drug.id} className='druglist'>
            <span className='drug-name'>{drug.name} </span>
          </li>
        );
      })}
    </ul>
  );
};
export default DrugList;
