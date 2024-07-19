import { useState, useEffect } from "react";
import axios from 'axios'
import { Card, Table } from "react-bootstrap";

const ProduitList = () => {
    const [produits, setProduits] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/produit/')
        .then(response=>{setProduits(response.data)})
        .catch(error=>{setError(error.message)})
    },[])

    return(
        <div className="row">
            
        {produits.map(produit=>(
            <Card key={produit.id} style={{ width: '20rem' }}>
                <Card.Img variant="top" style={{ width: '30rem', height:'15rem' }} src={`http://127.0.0.1:8000/${produit.image}`} />
                <Card.Body>
                    <Card.Title>{produit.nom}</Card.Title>
                    <Card.Text>{produit.prix}</Card.Text>
                    <Card.Text className="text-red-500">{produit.prix*2}</Card.Text>
                </Card.Body>
            </Card>
        ))}
       
      
            {error && <div style={{color:'red'}}>{error}</div>}          
        </div>
    )
}
export default ProduitList;