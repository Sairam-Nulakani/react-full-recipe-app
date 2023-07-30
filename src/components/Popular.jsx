import React, { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const getPopular = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      setPopular(data.recipes);
    };
    getPopular();
  }, []);
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
