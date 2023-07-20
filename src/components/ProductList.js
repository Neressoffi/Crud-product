import { Link } from "react-router-dom";
import {useState} from "react";

const ProductList = ({products, title}) => {
    const [query, setQUery] = useState('');
    const [productsList, setProductList] = useState(products);

    // const HandleDelete = (id) => {
    //     console.log("here");
    //     const new_products_list = productsList.filter( (product) => product.id !== id);
    //     setProductList(new_products_list);
    // }

    return (
        <div className="productlist">
            <h2>{title}</h2>
            <input
                type="text"
                className="form-control"
                id="query"
                value={query}
                placeholder="Rechercher"
                onChange={ (e) => setQUery(e.target.value) }
                required
                style={{outline: "none", padding: '0 10px', margin: '10px 0'}}
            />
            {productsList &&
                productsList.filter((product) => {
                    return (query.length > 0 ? product?.name?.toLowerCase()?.startsWith(query?.toLowerCase()) : product);
                }).map( (product) => (
                    <div className="product" key={product.id}>
                        {/*<div style={{display: "flex", justifyContent: "space-between"}}>*/}
                        <Link to={`/products/${product.id}`} className="product-titre" style={{width: '70%'}}>{product.name}</Link>
                        {/*    <div style={{width: '30%'}}>*/}
                        {/*        <button type="submit" className="btn-edit" style={{marginRight: '10px'}}>Editer</button>*/}
                        {/*        <button type="submit" className="btn-danger" onClick={() => HandleDelete(product.id)}>Supprimer</button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <p className="">Quantité: {product.unitPrice}</p>
                        <p className="">Prix unitaire: {product.quantity} $</p>
                        <small className="product-publication-date">Date d'ajout: {product.date}</small>
                    </div>
                ))
            }
        </div>
     );
}

export default ProductList;