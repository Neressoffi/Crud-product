import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link className="logo" to="/">CRUD Produits</Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien">Acceuil</Link>
                </li>
                <li>
                    <Link to="/add" className="lien buttonArticle" >Créer un produit</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;