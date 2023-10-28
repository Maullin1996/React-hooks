import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import { Qoute } from './Qoute';

export const MultipleCustomHooks = () => {

  const {incrementar, counter} = useCounter(1);
  const {data, isLoading, hasError} =  useFetch(`https://rickandmortyapi.com/api/episode/${counter}`)
  const {name, episode} = !!data && data;
  //console.log(data, isLoading, hasError);

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {

          isLoading
              ?  <LoadingQuote />
              : <Qoute  name={name} episode={ episode } />
        } 
        

        <button 
        className="btn btn-primary"
        disabled={ isLoading } 
        onClick={()=>incrementar()}
        >
          Next pokemon
        </button>

    </>
  );
}
