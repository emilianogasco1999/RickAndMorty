import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Headboard from '../../components/Specific/Headboard/Headboard'
import Item from '../../components/Specific/Item/Item'
import Alert from '../../components/Specific/Alert/Alert'
import Spinner from '../../components/Specific/Spinner/Spinner'
import ButtonUpdate from '../../components/Specific/ButtonUpdate/ButtonUpdate'


const Home = () => {

  const [error, setError] = useState(false);
  const [character, setCharacter] = useState([]);
  const [spinnerDisplay, setSpinnerDisplay] = useState();
  const [page, setPage] = useState(Math.floor(Math.random() * 44))
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setSpinnerDisplay(true)
    axios.get(`${import.meta.env.VITE_CHARACTER_URL}/?page=${page}`)
      .then(({ data }) => {
        const availableCharacters = data.results.slice(); // Copia de la lista original

        // Seleccionar 6 personajes aleatorios sin repetición
        const randomCharacters = [];
        for (let i = 0; i < 6 && availableCharacters.length > 0; i++) {
          const randomIndex = Math.floor(Math.random() * availableCharacters.length);
          const randomCharacter = availableCharacters[randomIndex];

          // Agregar el personaje aleatorio a la lista y eliminarlo de los disponibles
          randomCharacters.push(randomCharacter);
          availableCharacters.splice(randomIndex, 1);
        }
        console.log(randomCharacters)
        // randomCharacters.map(elemnt => console.log(elemnt.location))
        setCharacter(randomCharacters)
        setSpinnerDisplay(false)
        setUpdate(false)
      })
      .catch((error) => {
        console.log(error)
        setSpinnerDisplay(true)
        setError(true)
      })
      .finally()

  }, [update]);

  const handleUpdateClick = () => {
    setUpdate(true)
    setSpinnerDisplay(true)
    setPage(Math.floor(Math.random() * 43))
  };

  return (
    <>
      <Headboard
        titulo={'The Rick and Morty Web'}
        subtitulo={'Esta es una pagina web para utilizar la API de rick and morty'}
        // background={'light'}
        // textColor={'dark'}
        link={'https://rickandmortyapi.com/'}
      />
      <div className="row justify-content-center mx-auto py-3 text-center">
       
        {error ?
          <Alert
            texto={`No se encontro resultado`}
            color={'danger'}
          /> : ''
        }

        {spinnerDisplay ?
          <Spinner display={spinnerDisplay} />
          :
          <ButtonUpdate handleUpdateClick={handleUpdateClick} />
        }
        {spinnerDisplay ?
          <Spinner display={spinnerDisplay} />
          :
          character.map((character, index) => (
            <Item key={index}
            name={character.name}
            species={character.species}
            img={character.image}
            status={character.status}
            location={character.location}
            origin={character.origin}
            id={character.id}
            />
          ))

        }
      </div>
    </>
  )
}

export default Home