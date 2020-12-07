import React from 'react';
//import UsersList from '../components/UsersList';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS =[{
        id: 'u1',
        name: 'Aditi',
        image: 'https://media.gettyimages.com/photos/weve-made-it-all-this-way-i-am-proud-picture-id904172104?s=612x612',
        places: 2
    }];
    return <UsersList items={USERS} />;
};
export default Users;