import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto; /* Enable scrolling if content overflows */
`;

const FormWrapper = styled.div`
  margin-top: 480px;
  width: 800px;
  margin-bottom: 100px;
  max-width: 800px;
  /* max-height: 100vh; */
`;

const Form = styled.form`
  background-color: #f9f9f9;
  /* margin: 50px; */
  /* margin-bottom: 40px; */
  width: 80%;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const FormGroup = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  /* padding: 0; */
  width: 80%;
  margin-bottom: 5px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 60%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 90%;

  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddEvents = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    CreatedDate: new Date(),
    status: false,
    capacity: [],
    // TotalBooking: 0,
    // rating: 0,
    Price: [],
    // noofcomment: 0,
    comment: [],
    image: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseInt(value, 10) : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      video: file,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      createdDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Event Name:</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Event Type:</Label>
            <Input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Created Date:</Label>
            <DatePicker
              selected={formData.createdDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
            />
          </FormGroup>
          <FormGroup>
            <Label>Status:</Label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label>Capacity:</Label>
            <Input
              type="text"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              required
            />
          </FormGroup>
          {/* <FormGroup>
          <Label>Total Booking:</Label>
          <Input
            type="number"
            name="TotalBooking"
            value={formData.TotalBooking}
            onChange={handleChange}
            required
          />
        </FormGroup> */}
          <FormGroup>
            <Label>Price:</Label>
            <Input
              type="text"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              required
            />
          </FormGroup>
          {/* <FormGroup>
            <Label>Number of Comments:</Label>
            <Input
              type="number"
              name="noofcomment"
              value={formData.noofcomment}
              onChange={handleChange}
              required
            />
          </FormGroup> */}
          <FormGroup>
            <Label>Comments:</Label>
            <TextArea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Image:</Label>
            <Input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Video:</Label>
            <Input
              type="file"
              accept="video/*"
              name="video"
              onChange={handleVideoChange}
            />
          </FormGroup>
          <Button type="submit">Create Event</Button>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default AddEvents;
