import React from 'react'

const Search = (props) => {
    const img = `https://source.unsplash.com/400x300?${props.name}`;
  return (
    <>
    <div>
        <img src={img} alt="images" />
    </div>
    </>
  )
}

export default Search