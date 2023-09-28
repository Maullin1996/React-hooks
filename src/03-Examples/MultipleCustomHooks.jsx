import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './LoadingQuote';

export const MultipleCustomHooks = () => {

  const {incrementar, counter} = useCounter(1);
  const {data, isLoading, hasError} =  useFetch(`https://pokeapi.co/api/v2/berry/${counter}`)
  //const {name, url} = !!data && data[0];
  //console.log(data, isLoading, hasError);

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {

          isLoading
              ?  <LoadingQuote />
              : (
                <blockquote className="blockquote text-end">
                <p className="mb-1">{data.name}</p>
                <footer className="blcokquote-footer"> {data.id} </footer>
              </blockquote>

              )
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
