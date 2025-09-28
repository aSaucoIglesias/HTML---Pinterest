import { useParams, useNavigate } from 'react-router-dom';

import HeroeDetail from "../components/HeroeDetail"

import { getHeroe, deleteHeroe } from "../api/data"

const Heroe = () => {

  const params = useParams();
  const navigate = useNavigate();
  const heroe = getHeroe(params.id);

  return (
    <>
      <h2>Hero page</h2>
      <HeroeDetail heroe={heroe} />
      <button onClick={ ()=>{
        deleteHeroe(heroe.id).then(()=> {
          navigate('/heroes')
        })
      }}

      >Delete {heroe.name}</button>

    </>
  )
}

export default Heroe