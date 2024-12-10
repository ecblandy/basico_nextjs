"use client";

import styles from "../page.module.css";
import { useState, useEffect } from "react"; // Importa os hooks
import { useParams } from "next/navigation";

// Função para obter os dados
async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
  const { results } = await response.json();
  return results;
}

const Pokedex = () => {
  const params = useParams(); // Obtém os parâmetros da URL
  const [pokemons, setPokemons] = useState([]); // Estado para armazenar os pokémons
  const [loading, setLoading] = useState(true); // Estado para controlar o loading

  // useEffect para buscar os dados assim que o componente for montado
  useEffect(() => {
    const fetchData = async () => {
      const pokemonsData = await getData(); // Chama a função de requisição
      setPokemons(pokemonsData); // Atualiza o estado com os dados
      setLoading(false); // Finaliza o estado de loading
    };

    fetchData(); // Executa a função
  }, []); // O array vazio [] garante que a função só seja chamada uma vez

  // Exibe uma mensagem de loading enquanto os dados estão sendo carregados
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>{p.name}</li> // Exibe os nomes dos pokémons
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
