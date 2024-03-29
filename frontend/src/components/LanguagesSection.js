import React from 'react';

const LanguagesSection = ({ languages }) => {
  return (
    <div>
      <h2>Languages</h2>
      {languages.map(language => (
        <div key={language.name}>
          <p>{language.name}</p>
          <div className="familiarity-bar" style={{ width: language.familiarity }}></div>
        </div>
      ))}
    </div>
  );
};

export default LanguagesSection;
