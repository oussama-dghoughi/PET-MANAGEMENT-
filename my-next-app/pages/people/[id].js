import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PersonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      console.log('Données récupérées:', data); // Vérification des données
      const foundAnimal = data.animals.find(a => a.id === parseInt(id));
      setAnimal(foundAnimal);
    };

    if (id) fetchAnimal();
  }, [id]);

  return (
    <div>
      {person ? (
        <div>
          <h1>{person.firstName} {person.lastName}</h1>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phoneNumber}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PersonDetail;
