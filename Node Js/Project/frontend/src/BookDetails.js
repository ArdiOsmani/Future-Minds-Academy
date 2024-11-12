import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails(){
     
    const [book, setBook] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getBooksbyId(id)
    }, []);

    const getBooksbyId = useCallback( async (id)=>{
        const response = await fetch(`http://localhost:8585/books/${id}`)
        const json = await response.json();

        if (json.success) {
            setBook(json.data);
        }
    },[])

    return <h1>{book.title}</h1>
}