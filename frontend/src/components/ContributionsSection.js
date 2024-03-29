import React from 'react';

const ContributionsSection = ({ contributions }) => {
  return (
    <div>
      <h2>Contributions</h2>
      {contributions.map(contribution => (
        <div key={contribution.name}>
          <img src={contribution.image} alt={contribution.name} />
          <p>{contribution.name}</p>
          <p>{contribution.link}</p>
          <p>{contribution.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContributionsSection;
