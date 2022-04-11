import React from 'react';
import { Button } from "react-bootstrap";


const BudgetForm = ({newBudget, setNewBudget, handleBudgetUpdate}) =>(
    <div>
        <input type="number" className="budget_update_text" onChange={(e)=>setNewBudget(e.target.value)} />
        <Button type="submit" className="budget_update"  onClick={handleBudgetUpdate}> Update </Button>
    </div>
)
export default BudgetForm;