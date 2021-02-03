import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const [name, setName] = useState();
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuidv4(),
      name
    }
    addUser(newUser);
    history.push('/');
  }
  
  // const onChange = (e) => {
  //   setName(e.target.value);
  // }
 
  return ( 
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input onChange={(e) => {setName(e.target.value);}} value={name} type="text" placeholder="Enter name"></Input>
      </FormGroup>
      <Button type="submit" color="success" className="mr-2">Submit</Button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
    </Form>
  );
}
 
export default AddUser;