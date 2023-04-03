import { useState, useEffect } from "react"

const Letterboxd = () => {
    const [data, setData] = useState("");
    console.log(data)
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('api/letterboxd');
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    if (!data) {
        return <div>Loading data...</div>;
      }

    return <>
        {data.map((item) => {
            return <div key={item.uri}>
                <h1>{item.film.title}</h1>
                <p>{item.film.year}</p>
                <p>{item.rating.score}</p>
                <p>{item.rating.text}</p>
                <p>{item.date.watched}</p>
                <p>{item.date.published}</p>
                <p>{item.review}</p>
                <p>{item.isRewatch}</p>
                <p>{item.spoilers}</p>
                <p>{item.uri}</p>
            </div>
        })}
    </>
}

export default Letterboxd