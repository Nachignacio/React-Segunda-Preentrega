import { Link } from "react-router-dom";
import "../styles/components/ListItem.css"

function ListItem({texto}){

    return(
        <li>
            <Link to={`/category/${texto}`}>
                {texto}
            </Link>
        </li>
    )
}

export default ListItem;