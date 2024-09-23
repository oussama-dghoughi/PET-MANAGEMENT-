import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // Chargement des données depuis le fichier data.json
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json'); // Assurez-vous que le chemin est correct
        setPeople(response.data.people || []); // Utilisez [] comme valeur par défaut
        setAnimals(response.data.animals || []); // Utilisez [] comme valeur par défaut
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des personnes</h1>
      <ul>
        {people && people.length > 0 ? (
          people.map(person => (
            <li key={person.id}>
              {person.firstName} {person.lastName} - {person.email} - {person.phoneNumber}
            </li>
          ))
        ) : (
          <li>Aucune personne trouvée.</li>
        )}
      </ul>

      <h1>Liste des animaux</h1>
      <ul>
        {animals && animals.length > 0 ? (
          animals.map(animal => (
            <li key={animal.id}>
              {animal.name} - {animal.species} - {animal.breed} - {animal.color} - {animal.weight}
            </li>
          ))
        ) : (
          <li>Aucun animal trouvé.</li>
        )}
      </ul>
    </div>
  );
};

export default Home;
