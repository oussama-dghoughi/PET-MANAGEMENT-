import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AnimalDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Récupère l'ID de l'URL
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      const res = await fetch('/data.json'); // Assurez-vous que ce chemin est correct
      const data = await res.json();
      const foundAnimal = data.animals.find(a => a.id === parseInt(id)); // Cherche l'animal par ID
      setAnimal(foundAnimal);
    };

    if (id) fetchAnimal(); // N'appelle pas fetchAnimal tant que id n'est pas défini
  }, [id]);

  return (
    <div>
      {animal ? (
        <div>
          <h1>{animal.name}</h1>
          <p>Date de naissance: {animal.dateOfBirth}</p>
          <p>Espèce: {animal.species}</p>
          <p>Race: {animal.breed}</p>
          <p>Couleur: {animal.color}</p>
          <p>Poids: {animal.weight}g</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnimalDetail;
