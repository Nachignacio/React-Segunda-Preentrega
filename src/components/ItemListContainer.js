function ItemListContainer({nombre, image, descripcion}){
    let ItemListContainerStyles = {
        height: "500px",
        width: "500px",
        borderStyle: "solid",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "grey",
        webkitBoxShadow: "17px 18px 33px 0px rgba(0,0,0,0.75)",
        mozBoxShadow: "17px 18px 33px 0px rgba(0,0,0,0.75)",
        boxShadow: "17px 18px 33px 0px rgba(0,0,0,0.75)",
    };

    let itemTitleStyle = {
        position: "relative",
    };

    let itemTextStyle = {
        padding: "20px",
        textAlign: "justify",
    };

    let itemImageStyle = {
        margin: "20px",
        borderStyle: "solid",
    };

    return(
        <section>
            <div style = {ItemListContainerStyles}>
                <h2 style={itemTitleStyle}>
                    {nombre}
                </h2>
                <img src={image} style={itemImageStyle} alt="piano"/>
                <p style={itemTextStyle}>
                    {descripcion}
                </p>
            </div>
        </section>
    )
}

export default ItemListContainer;