import React, {useState}from 'react'
import {  Button, Form, FormGroup, Label, Input,CustomInput  } from 'reactstrap';


// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

// import MomentLocaleUtils, {
//   formatDate,
//   parseDate,
// } from 'react-day-picker/moment';

// import 'moment/locale/it';




const AddUserForm = props => {
    const initialFormState ={id:null,firstname:'',lastname:'',age:'',gender:'',dateofjoining:''}
    const [user,setUser]=useState(initialFormState)

const handleInputChange = event => {
    const { name, value } = event.target
  
    setUser({ ...user, [name]: value })
  }

  
  
  
    
  return (
      <Form onSubmit={event => {
        event.preventDefault()
        if (!user.firstname || !user.lastname) return
    
        props.addUser(user)
        setUser(initialFormState)
      }}>
          <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input type="text" required name="firstname" placeholder="Enter First Name"  value={user.firstname} onChange={handleInputChange}/ >
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input type="text"  required name="lastname" placeholder="Enter Last Name" value={user.lastname}  onChange={handleInputChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number"  required name="age" placeholder="Enter Age" value={user.age}  onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input type="text"  required name="gender" placeholder="Male || Female" value={user.gender}  onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="dateofjoining">Date of joining</Label>
              
              {/* <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`} name="dateofjoining" 
        value={user.dateofjoining}  onChange={handleInputChange} 
      /> */}
     
              <Input type="date"  required name="dateofjoining"  value={user.dateofnpjoining}  onChange={handleInputChange}/>
            </FormGroup>
          
           

            <Button color="success">Add User</Button>
      </Form>
   
  )
}

export default AddUserForm;
