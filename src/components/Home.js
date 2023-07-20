import useRetrieve from "../hooks/useRetrieve";
import ProductList from "./ProductList";

const Home = () => {

    const {data: products, isLoading, error} = useRetrieve('http://localhost:8000/products');
    return (
        <div className="home">
            { error && <div style={ {'color': 'red'}}>{error}</div>}
            { isLoading && <div>En cour de traitement ...</div> }
            { products && <ProductList products={products} title={'Liste des produits'} /> }
        </div>
    );
}

export default Home;