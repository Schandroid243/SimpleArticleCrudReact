import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';


const Create = () => {
    let history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
   
    const submitForm = () => {
        axios.post(`http://localhost:9000/articles/`,{
            title,
            description,
            author
        }).then((response) => {
            console.log(response.data);
            history.push('/read');
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div>
            <Form>
                <Form.Field>
                <label>Title</label>
                <input placeholder='Enter a title' onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Description</label>
                <input placeholder='Enter a description' onChange={(e) => setDescription(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Author</label>
                <input placeholder='Enter an author' onChange={(e) => setAuthor(e.target.value)} />
                </Form.Field>
                <Button onClick={submitForm} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Create;