import React, {useEffect, useState} from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        getArticles();
    }, []);
    const getArticles = () => {
        axios.get(`http://localhost:9000/articles/`).then((response) => {
            setArticle(response.data);
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateArticle = (data) => {
        let { _id, title,  description, author} = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Description', description);
        localStorage.setItem('Author', author);
    }

    const deleteArticle = (id) => {
        axios.delete(`http://localhost:9000/articles/${id}`).then((response) => {
            console.log(response.data);
            getArticles();
        }).catch((err) => {
            console.log(err);
        })
    }
    return(
        <div>
            <Table singleLine>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Author</Table.HeaderCell>
                    <Table.HeaderCell>Edit</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {article.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.title}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                <Table.Cell>{data.author}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={() => updateArticle(data)}>Edit</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => deleteArticle(data._id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )   
}

export default Read;