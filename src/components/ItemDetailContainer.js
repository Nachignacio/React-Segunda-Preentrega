import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [details, setDetails] = useState({});

    const {detailId} = useParams();

    useEffect(()=>{
        fetch('/Item1.json')
        .then(res => res.json())
        .then(re => {
        let detailed = re.find((product) => product.id == detailId);
            setDetails(detailed)
        })
        .catch(err => console.log(err))
    },[detailId]);
    
    
    return (
        <div>
            <h1>{details.title}</h1>
            <img src={details.image} alt={details.title}/>
            <p>{details.description}</p>
        </div>
    )
}

export default ItemDetailContainer;
