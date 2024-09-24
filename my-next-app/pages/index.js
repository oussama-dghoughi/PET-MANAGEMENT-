import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [people, setPeople] = useState([]);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setPeople(data.people);
      setAnimals(data.animals);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des personnes</h1>
      <ul>
        {people.length > 0 ? (
          people.map(person => (
            <li key={person.id}>
              <Link href={`/people/${person.id}`}>
                {person.firstName} {person.lastName} - {person.email} - {person.phoneNumber}
              </Link>
            </li>
          ))
        ) : (
          <li>Aucune personne trouvée.</li>
        )}
      </ul>

      <h1>Liste des animaux</h1>
      <ul>
        {animals.length > 0 ? (
          animals.map(animal => (
            <li key={animal.id}>
              <Link href={`/animals/${animal.id}`}>
                {animal.name} - {animal.species} - {animal.breed} - {animal.color} - {animal.weight}g - {animal.dateOfBirth}g
              </Link>
            </li>
          ))
        ) : (
          <li>Aucun animal trouvé.</li>
        )}
      </ul>

    </div>
  );
}
