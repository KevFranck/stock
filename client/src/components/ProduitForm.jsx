import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";
import { Button, Modal,Form } from "react-bootstrap";

const ProduitForm = () =>{
    const [nom, setNom] = useState('')
    const [prix, setPrix] = useState()
    const [image, setImage] = useState(null)

    const handleSubmit = async(event)=>{
        event.preventDefault()
        const formData = new FormData()
        formData.append('nom',nom)
        formData.append('prix',prix)
        formData.append('image',image)

        try{
            const response = await axios.post('http://127.0.0.1:8000/produit/', formData)
            .then((data)=>{
                window.location.reload()
            })
            console.log(response.data)
        }catch(error){
            console.error(error)
        }
    }

    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="text-center">
            <h1 className="text-3xl text-center text-sky-400 font-bold red">
                GESTION DE STOCK!
            </h1>
            <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="nom">
        <Form.Label>NOM</Form.Label>
        <Form.Control type="text" value={nom} placeholder="nom du produit" onChange={(event)=>setNom(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="nom">
        <Form.Label>PRIX</Form.Label>
        <Form.Control type="number" value={prix} placeholder="prix du produit" onChange={(event)=>setPrix(event.target.value)} />
      </Form.Group>
      <Form.Group controlId="image" className="mb-3">
        <Form.Label>IMAGE</Form.Label>
        <Form.Control type="file" onChange={(event)=>setImage(event.target.files[0])} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
                Creer
            </Button>
        </Modal.Footer>
      </Modal>
    </>
        <form >
            <label>
                nom :
                <input type="text" value={nom}  />
            </label>
            <label>
                prix :
                <input type="number" value={prix} onChange={(event)=>setPrix(event.target.value)} />
            </label>
            <label>
                image :
                <input type="file" onChange={(event)=>setImage(event.target.files[0])} />
            </label>
            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Creer
            </button>
        </form>
        </div>
    )
}
export default ProduitForm