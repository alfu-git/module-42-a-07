import React from 'react';
import useFriends from '../../../hooks/useFriends';
import FriendCard from './friendCard/FriendCard';

const FriendsSection = () => {
  const {friends} = useFriends();
  console.log(friends);

  return (
    <section className='mt-10 mb-20 container mx-auto px-5'>
      <div>
        <div>
          <h2 className='mb-4 text-[#1F2937] text-2xl font-semibold'>Your Friends</h2>

          <div className='grid gap-4 grid-cols-2 lg:grid-cols-4'>
            {
              friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsSection;