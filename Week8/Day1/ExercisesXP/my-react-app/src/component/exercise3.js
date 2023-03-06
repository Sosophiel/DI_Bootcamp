import React from 'react';
import UserFavoriteColors from './UserFavoriteColors';

class exercise3 extends React.Component {

    render() {
        const user = {
            firstName: 'Bob',
            lastName: 'Dylan',
            favAnimals : ['Horse','Turtle','Elephant','Monkey']
          };
        return (
          <>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <UserFavoriteColors fav_animals={user.favAnimals}/>
          </>
        );
      }

}


export default exercise3
