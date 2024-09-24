import Link from 'next/link';
import { useEffect, useState } from 'react';

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setAnimals(data.animals);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des animaux</h1>
      <ul>
        {animals.length > 0 ? (
          animals.map(animal => (
            <li key={animal.id}>
              <Link href={`/animals/${animal.id}`}>
                {animal.name} - {animal.species} - {animal.breed} - {animal.color} - {animal.weight}g
              </Link>
            </li>
          ))
        ) : (
          <li>Aucun animal trouvé.</li>
        )}
      </ul>
    </div>
  );
};

export default Animals;
