import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from '../03-Examples/LoadingQuote';
import { Qoute } from '../03-Examples/Qoute';

export const Layout = () => {

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
                : <Qoute name={name} episode={episode}/>
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