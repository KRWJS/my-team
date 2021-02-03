import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditUser = () => {
  return ( 
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Edit name"></Input>
      </FormGroup>
      <Button type="submit" color="success" className="mr-2">Save</Button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
    </Form>
  );
}
 
export default EditUser;