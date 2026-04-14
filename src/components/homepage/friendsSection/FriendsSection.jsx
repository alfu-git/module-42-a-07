import React from 'react';
import useFriends from '../../../hooks/useFriends';

const FriendsSection = () => {
  const {friends} = useFriends();
  console.log(friends);
  
  return (
    <section className='mb-10 container mx-auto px-5'>
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default FriendsSection;