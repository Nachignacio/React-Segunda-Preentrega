import "../styles/components/ListItem.css"

function ListItem({texto}){

    return(
        <li>
            <a href=".">
                {texto}
            </a>
        </li>
    )
}

export default ListItem;