import React from 'react';


const UserFavoriteColors = (props) => {

  return (
    <>
    <ul>
      {
        props.fav_animals.map(animal => (
            <li>{animal}</li>
        ))
      }
    </ul>
    </>
  
  )
}


export default UserFavoriteColors
