import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';



const Update = () => {
    let history = useHistory();
    const [_id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setTitle(localStorage.getItem('Title'));
        setDescription(localStorage.getItem('Description'));
        setAuthor(localStorage.getItem('Author'));
    }, []);
   
    const submitForm = () => {
        axios.put(`http://localhost:9000/articles/${_id}`,{
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
                <input placeholder='Enter a title' required value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Description</label>
                <input placeholder='Enter a description' required value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Field>
                <Form.Field>
                <label>Author</label>
                <input placeholder='Enter an author' required value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Field>
                <Button onClick={submitForm} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Update;