import React from 'react';
import UsersList from '../components/UsersList';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Nikhil Chauhan',
    image: 'https://www.nikhilchauhan.com/images/Nikhil_Chauhan_Profile.JPG',
    places: 9,
  },
];
const Users = () => {
  return <UsersList items={DUMMY_USERS} />;
};

export default Users;
