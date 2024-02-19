function ListItem({texto}){
    let listStyle = {
        borderStyle: "none",
        height: "40px",
        paddingTop: "30px",
        listStyle: "none",
        width: "10vw",
        justifyText: "center",
        textAlign: "center",
        
    };

    let anchorStyle = {
        textDecoration: "none",
        color: "black",
    };

    return(
        <li style={listStyle}>
            <a href="." style={anchorStyle}>
                {texto}
            </a>
        </li>
    )
}

export default ListItem;