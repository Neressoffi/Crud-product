import {useParams} from "react-router";
import { useNavigate } from "react-router-dom";

import useRetrieve from "../hooks/useRetrieve";

const ProductDetail = () => {
    const {id} = useParams();
    const {data: product, isLoading, error} = useRetrieve('http://localhost:8000/products/' + id);
    const navigate = useNavigate();
    const HandleDelete = () => {
        fetch('http://localhost:8000/products/'+id, {
            method: 'DELETE'
        }).then( () => {
            navigate('/');
            console.log("Supprimé avec succès");
        })
    }
    const HandleEdit = () => {
        navigate('/add/'+id);
    }
    return (
        <div className="">
            {isLoading && <div>En cour de traitement...</div>}
            {error && <div style={{'color': 'red'}}>{error}</div>}
            {product && (
                <div className="product">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2 className="product-titre" style={{width: '70%'}}>{product.name}</h2>
                        <div style={{width: '30%'}}>
                            <button type="submit" className="btn-edit" style={{marginRight: '10px'}} onClick={() => HandleEdit()}>Editer</button>
                            <button type="submit" className="btn-danger" onClick={() => HandleDelete()}>Supprimer</button>
                        </div>
                    </div>
                    <p className="">{`Quantité: ${product.quantity}`}</p>
                    <p className="">{`Prix unitaire: ${product.unitPrice} $`}</p>
                    <p className="product-body">{product.description}</p>
                    <small className="product-publication-date">{`Date d'ajout: ${product.date}`}</small>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;