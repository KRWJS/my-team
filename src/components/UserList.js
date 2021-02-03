import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return ( 
    <ListGroup>
      {users.map(user => (
        <ListGroupItem key={user.id} className="d-flex">
          <p>{user.name}</p>
          <div className="ml-auto">
            <Link to={`/edit/${user.id}`} className="btn btn-success mr-2">Edit</Link>
            <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
 
export default UserList;