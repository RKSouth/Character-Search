import React, { useState, useEffect } from "react";

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
    
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveCharacter method to save the Character data
    // Then reload characters from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      console.log(formObject.attack)
      if (formObject.name && formObject.attack) {
        console.log(formObject.attack)
        API.addCharacter({
          name: formObject.name,
          attack: formObject.attack
        })
          .then(res => API.getApiChars())
          .catch(err => console.log(err));
      }
    };
  
      return (
        <Container fluid>
            <Navbar/>
          <Row>
            <Col size="md-6">
           
              <form>
                <Input
                  onChange={handleInputChange}
                  name="name"
                  placeholder="name (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="attack"
                  placeholder="Attack 1 (required)"
                />
                    {/* <Input
                  onChange={handleInputChange}
                  name="attack"
                  placeholder="Attack 2 (required)"
                />
                    <Input
                  onChange={handleInputChange}
                  name="attack"
                  placeholder="Attack 3 (required)"
                />
                    <Input
                  onChange={handleInputChange}
                  name="attack"
                  placeholder="Attack 4 (required)"
                />
                    <Input
                  onChange={handleInputChange}
                  name="attack"
                  placeholder="Attack 5 (required)"
                /> */}
                {/* <TextArea
                  onChange={handleInputChange}
                  name="description"
                  placeholder="Describe your Character (Optional)"
                /> */}
                <FormBtn
                  disabled={!(formObject.attack && formObject.name)}
                  onClick={handleFormSubmit}
                >
                  Submit Character
                </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
            
                <h1>characters On My List</h1>
           
              {characters.length ? (
                <List>
                  {characters.map(Character => (
                    <ListItem key={Character._id}>
                      <Link to={"/characters/" + Character._id}>
                        <strong>
                          {Character.name}  
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
  