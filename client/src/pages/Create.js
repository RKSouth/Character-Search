import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Create() {
    // Setting our component's initial state
    const [characters, setcharacters] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all characters and store them with setcharacters
    useEffect(() => {
      loadcharacters()
    }, [])
  
    // Loads all characters and sets them to characters
    function loadcharacters() {
      API.getCharacters()
        .then(res => 
          setcharacters(res.data)
        )
        .catch(err => console.log(err));
    };
  
    // Deletes a Character from the database with a given id, then reloads characters from the db
    function deleteCharacter(id) {
      API.deleteCharacter(id)
        .then(res => loadcharacters())
        .catch(err => console.log(err));
    }
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveCharacter method to save the Character data
    // Then reload characters from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
        API.saveCharacter({
          title: formObject.title,
          author: formObject.author,
          synopsis: formObject.synopsis
        })
          .then(res => loadcharacters())
          .catch(err => console.log(err));
      }
    };
  
      return (
        <Container fluid>
            <Navbar/>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>What characters Should I Read?</h1>
              </Jumbotron>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  onChange={handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  disabled={!(formObject.author && formObject.title)}
                  onClick={handleFormSubmit}
                >
                  Submit Character
                </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>characters On My List</h1>
              </Jumbotron>
              {characters.length ? (
                <List>
                  {characters.map(Character => (
                    <ListItem key={Character._id}>
                      <Link to={"/characters/" + Character._id}>
                        <strong>
                          {Character.title} by {Character.author}
                        </strong>
                      </Link>
                      {/* <DeleteBtn onClick={() => deleteCharacter(Character._id)} /> */}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default Create;
  