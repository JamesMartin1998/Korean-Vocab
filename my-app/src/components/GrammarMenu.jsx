import React, {useState, useEffect} from 'react';
import MenuLink from './MenuLink';
import Menu from './Menu';

const GrammarMenu = () => {
  const [grammarLessonsData, setGrammarLessonsData] = useState([]);

  const links = grammarLessonsData.map((item, index) => (
      <MenuLink 
        key={index}
        slug={item.slug}
        title={item.title}
      />
  ));

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await fetch(`/Korean-Vocab/assets/data/grammar/index.json`);
              if (!res.ok) return;
              const data = await res.json();
              setGrammarLessonsData(data);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);

  return (
    <Menu
        title="Choose Grammar to Study"
        links={links}
    />
  )
}

export default GrammarMenu;