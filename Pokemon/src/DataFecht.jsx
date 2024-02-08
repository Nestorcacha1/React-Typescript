import { useEffect, useState } from "react";
import "./data.css";
//crear un id

const idPokemon = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const crearID = idPokemon(1, 151);

export function DataFecht() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const obtener = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon";
      try {
        const res = await fetch(`${url}/${crearID}`);
        const data = await res.json();

        setPokemon(data);
        console.log(data);
      } catch (error) {
        console.log(error + "error en la peticion de datos ");
      }
    };

    obtener();
  }, []);

  return (
    <div key={pokemon.id}>
      <p style={{ fontSize: "2rem" }}>{pokemon.name}</p>
      <img
        src={pokemon.sprites?.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <p>HP : {pokemon.base_experience}</p>
      <p>Experiencia: {pokemon.base_experience}</p>
      {pokemon.stats && (
        <>
          <p>Ataque:{pokemon.stats[1]?.base_stat} </p>
          <p>Especial Ataque: {pokemon.stats[3]?.base_stat}</p>
          <p>Defensa: {pokemon.stats[2]?.base_stat}</p>
          <p>Velocidad:{pokemon.stats[5]?.base_stat}</p>
          <p>Defensa Especial: {pokemon.stats[4]?.base_stat}</p>
        </>
      )}
      <nav>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Otro
        </button>
      </nav>
    </div>
  );
}
