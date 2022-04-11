import React from "react";
import { Form as BudgetPlannerForm, FormGroup, Button, FormLabel, Col, FormControl } from "react-bootstrap";


const Form = ({ name, amount, handleName, handleAmount, handleSubmitForm, handleClearExpenses }) => (
    <BudgetPlannerForm style={{margin:10}} onSubmit={handleSubmitForm}>

        <FormGroup className="row">
            <FormLabel htmlFor="exampleEmail" sm={2}>Name of Expense</FormLabel>
            <Col sm={4}>
            <input type="text" className="budget_txtbx"
                name="name"
                id="expenseName"
                placeholder="Name of expense?"
                value={name}
                onChange={handleName}   
            />       
            </Col>
        </FormGroup>
        <FormGroup className="row">
            <FormLabel htmlFor="exampleEmail" sm={2}> $ Amount </FormLabel>
            <Col sm={4}>
            <input
                type="number" className="budget_txtbx"
                name="amount"
                id="expenseAmount"
                placeholder="0.00"
                value={amount}
                onChange={handleAmount}
            />
            </Col>
    
        </FormGroup>
        
        <Button type="submit" variant="primary" className="btn_add"> Add </Button>
        <Button type="submit" variant="danger" className="btn_add" onClick={handleClearExpenses}> Clear </Button>
    </BudgetPlannerForm>
 
);


export default Form;