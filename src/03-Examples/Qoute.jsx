import { useLayoutEffect, useRef, useState } from "react"

export const Qoute = ({name, episode}) => {

  const pRef = useRef();
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {


    const { height, width } = pRef.current.getBoundingClientRect();
    setboxSize({height, width });


  }, [name]);

  return (
  <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
        >
          <p ref={ pRef } className="mb-2"> {name} </p>
          <footer className="blcokquote-footer"> {episode} </footer>
      </blockquote>

      <code> { JSON.stringify(boxSize) } </code>
  </>
  )
  
}

