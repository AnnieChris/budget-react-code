import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Button } from "react-bootstrap";
//import { CloseButton } from 'react-bootstrap';


const List = ({expenses,handleRemoveExpense}) =>(
    <div className='expenses_update'>
        <ListGroup>
            {expenses.map(item => (
                <ListGroupItem key={item.id}>
                    {item.name} - $ {item.amount} <Button type="submit" variant="success"  onClick={handleRemoveExpense} value={item.id}> Remove </Button>
                    {/* <CloseButton /> */}
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
)
export default List;