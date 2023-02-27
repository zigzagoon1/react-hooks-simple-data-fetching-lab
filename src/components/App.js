// create your App component here
import  React, {useState, useEffect} from 'react';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogImg, setDogImg] = useState(null);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then((img) => {
            console.log(img)
            setDogImg(<img src={img.message} alt="A Random Dog"></img>)
            setIsLoaded(true);
        })
    }, [])
    if (!isLoaded) return <h3>Loading...</h3>
    return (
        <div>
            
            {dogImg}
        </div>
    )
}

export default App;