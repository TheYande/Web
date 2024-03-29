import React from 'react';
import ContributionsSection from './components/ContributionsSection';
import LanguagesSection from './components/LanguagesSection';

const App = () => {
  // Sample data for contributions and languages
  const contributions = [
    {
      name: "Some Repo",
      link: "https://example.com",
      image: "./image.png",
      description: "Lorem ipsum dolor sit amet.",
    },
    // Add more contributions as needed
  ];

  const languages = [
    {
      name: "JavaScript",
      familiarity: "20%",
    },
    // Add more languages as needed
  ];

  return (
    <div>
      <ContributionsSection contributions={contributions} />
      <LanguagesSection languages={languages} />
    </div>
  );
};

export default App;
