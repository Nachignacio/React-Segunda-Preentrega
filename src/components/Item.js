import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.description}/>
            <p>{item.description}</p>
            <button>
                <Link to={`/detail/${item.id}`}>
                    Ver detalle
                </Link>
            </button>
        </div>
    )
}

export default Item;
