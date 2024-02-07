import "./data.css";
import { useEffect, useState } from "react";
export function Data() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [info, setInfo] = useState({});
  useEffect(() => {
    const apiData = async () => {
      try {
        const datos = await fetch(url)
          .then((response) => response.json())
          .then((data) => data.results);
        const info = await fetch(url)
          .then((response) => response.json())
          .then((data) => data.info);
        setInfo(info);
        setData(datos);
        // console.log(datos);
        // console.log(info);
      } catch (error) {
        console.log(error);
      }
    };
    apiData();
  }, [url]);

  const HandleClickAtras = () => {
    setUrl(info.prev);
  };

  const HandleClickSiguiente = () => {
    setUrl(info.next);
  };

  return (
    <main>
      {data.map((item) => (
        <div key={item.id}>
          <h2> Nombre :{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <p>Especie:{item.species}</p>
          <p>Estatus:{item.status}</p>
          <p>Origen::{item.origin.name}</p>
        </div>
      ))}
      <span>
        <button onClick={HandleClickSiguiente}>Siguiente</button>

        <button onClick={HandleClickAtras}>Atras</button>
      </span>
    </main>
  );
}
