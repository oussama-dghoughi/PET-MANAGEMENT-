import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
      <Link href="/">
        <a style={{ marginRight: '20px' }}>Accueil</a>
      </Link>
      <Link href="/people">
        <a style={{ marginRight: '20px' }}>Liste des personnes</a>
      </Link>
      <Link href="/animals">
        <a>Liste des animaux</a>
      </Link>
    </nav>
  );
};

export default Navbar;
