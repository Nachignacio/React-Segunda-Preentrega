
const Fetching = (url) => {
    fetch(url).then(el => console.log(el.json())).then(res => console.log(res)).catch(err => console.log(err));
    
}

export default Fetching;