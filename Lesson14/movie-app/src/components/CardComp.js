import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export default function CardComp({ orderNumber, title, category, createdAt, handleDelete, movieId }) {

    const navigate = useNavigate()

    const navigateToEdit = (id) => {
        console.log(id)
        // window.location.href = '/Edit/' + id
        navigate('/Edit/' + id)
    }
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{orderNumber}.{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in {createdAt}</span>
                </Card.Meta>
                <Card.Description>
                    {category}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button icon color='red' onClick={() => handleDelete(movieId)}>
                        <Icon name='trash alternate' />
                    </Button>
                    <Button icon color='blue' onClick={() => navigateToEdit(movieId)}>
                        <Icon name='right edit outline' />

                    </Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
