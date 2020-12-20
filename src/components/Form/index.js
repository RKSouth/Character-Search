import React from "react";

// This file exports the Input, TextArea, and FormBtn components
export function createForm(props) {
  // const books = props.data
   return( <form>
                <Input
                  onChange={props.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  onChange={props.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  onChange={props.handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  // disabled={!(formObject.author && formObject.title)}
                  onClick={props.handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
   )
}



export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
