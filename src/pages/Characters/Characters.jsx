import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select';
import Pagination from '../../components/Specific/Pagination/Pagination';
import Buscador from '../../components/Specific/Buscador/Buscador'
import CardItem from '../../components/Specific/CardItem/CardItem'
import Alert from '../../components/Specific/Alert/Alert'
import Spinner from '../../components/Specific/Spinner/Spinner';
import { optionStatusCharacter, optionGenderCharacter, optionSpeciesCharacter } from './dataCharacter'


const Characters = () => {
  const [character, setCharacter] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(false);
  const [spinnerDisplay, setSpinnerDisplay] = useState();
  const [statusCharacter, setStatusCharacter] = useState({ value: '' });
  const [genderCharacter, setGenderCharacter] = useState({ value: '' });
  const [speciesCharacter, setSpeciesCharacter] = useState({ value: '' });

  useEffect(() => {
    setSpinnerDisplay(true)
    axios.get(`${import.meta.env.VITE_CHARACTER_URL}/?page=${page}&name=${name}&status=${statusCharacter.value}&gender=${genderCharacter.value}&species=${speciesCharacter.value}`)
      .then(({ data }) => {
        setCharacter(data.results)
        setPageCount(data.info.pages)
        setError(false);
        setSpinnerDisplay(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true);
        setPageCount(0)
        setSpinnerDisplay(true)
      })
      .finally()

  }, [name, statusCharacter, genderCharacter, speciesCharacter, page]);


  const statusSelectChange = (value) => {
    setStatusCharacter(value)
    setPage(1)
  }
  const statusGenderChange = (value) => {
    setGenderCharacter(value)
    setPage(1)
  }
  const statusSpeciesChange = (value) => {
    setSpeciesCharacter(value)
    setPage(1)
  }

  return (

    <div className='container'>

      <div className="row mt-3">
        <div className="col-12 col-md-4 mb-3 ">
          <div className='mb-2' >
            <label htmlFor="Status" className="form-label" >Status</label>
            <Select
              onChange={statusSelectChange}
              defaultValue={[optionStatusCharacter[0]]}
              // isMulti
              name="Status Character"
              options={optionStatusCharacter}
              className="basic-multi-select text-dark "
              classNamePrefix="select"
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="Gender" className="form-label">Gender</label>
            <Select
              onChange={statusGenderChange}
              defaultValue={[optionGenderCharacter[0]]}
              // isMulti
              name="Gender"
              options={optionGenderCharacter}
              className="basic-multi-select text-dark "
              classNamePrefix="select"
            />
          </div>
          <div className='mb-2'>
            <label htmlFor="Species" className="form-label">Species</label>
            <Select
              onChange={statusSpeciesChange}
              defaultValue={[optionSpeciesCharacter[0]]}
              // isMulti
              name="Status Character"
              options={optionSpeciesCharacter}
              className="basic-multi-select text-dark " 
              classNamePrefix="select"
            />
          </div>


        </div>
        <div className="col-12 col-md-8 ">
          <Buscador
            placeHolder={'Escribe un nombre'}
            name={name}
            setName={setName}
            setPage={setPage}
          />
          <div className="row mt-2">
          {error ?
              <Alert
                texto={`No se encontro resultado`}
                color={'danger'}
              /> :''
            }
            {spinnerDisplay ?
              <Spinner display={spinnerDisplay} /> :
              character?.map((element) => (
                <div
                  className="col-12 col-md-4 mb-3"
                  key={element.id}
                >
                  <CardItem
                    name={element.name}
                    status={element.status}
                    species={element.species}
                    image={element.image}
                    gender={element.gender}
                    id={element.id}
                  />
                </div>
              ))}
           
           
            <Pagination pageCount={pageCount} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Characters