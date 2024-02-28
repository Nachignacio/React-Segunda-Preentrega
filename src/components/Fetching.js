const Fetching = (url) => {
    fetch(url)
    .then(el => el.json());
    
    
}

export default Fetching;