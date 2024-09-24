import Link from 'next/link';
import { useEffect, useState } from 'react';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setPeople(data.people);
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
                <a>
                  {person.firstName} {person.lastName} - {person.email} - {person.phoneNumber}
                </a>
              </Link>
            </li>
          ))
        ) : (
          <li>Aucune personne trouvée.</li>
        )}
      </ul>
    </div>
  );
};

export default People;
