import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const HandleProductAdding = (e) => {
        e.preventDefault();
        const tmp_date = new Date().toISOString().split('T');
        const date = `${tmp_date[0]} ${tmp_date[1]}`;
        const product = { name, unitPrice, quantity, description, date }
        setIsLoading(true);
        fetch('http://localhost:8000/products',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(product)
            }
        ).then( () => {
            console.log('Produit ajouté avec succes.');
            setIsLoading(false);
            navigate('/');
        })
    }

    return (
        <div className="create-product">
            <form onSubmit={ HandleProductAdding } className="form">
                <div className="form-group">
                    <label htmlFor="name">Nom du produit</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantité</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        onChange={ (e) => setQuantity(e.target.value) }
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="unitPrice">Prix unitaire</label>
                    <input
                        type="number"
                        className="form-control"
                        id="unitPrice"
                        value={unitPrice}
                        onChange={ (e) => setUnitPrice(e.target.value) }
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description du produit</label>
                    <textarea
                        required
                        value={description}
                        onChange={ (e) => setDescription(e.target.value) }
                        className="form-control textarea"
                        id="description" rows="10"></textarea>
                </div>
                <div className="form-group">
                    { !isLoading && <button type="submit" className="btn-create">Créer le produit</button>}
                    { isLoading && <button type="submit" className="btn-create" disabled>En cour de traitement ...</button>}
                </div>
            </form>
        </div>
    );
}

export default AddProduct;