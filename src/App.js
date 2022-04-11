import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect, useSelector } from 'react-redux';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


import budgetAction from './action/budgetAction';
import banner from './images/family-budget-planning.jpg';
import budget_img from './images/BUDGET.jpg';

import BudgetPlannerForm from './components/BudgetPlannerForm';
import SearchBarForm from './components/search';
import List from './components/List';
import BudgetForm from './components/budget';
import './components/styles.css';
import { bindActionCreators } from 'redux';
//import Navbar from './components/Navbar';


function App() {
  
  //const [count, setCount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState('5000');
  const [budgetComponents, setBudgetComponents] = useState([]); 
  const [remaining, setRemaining] = useState('');
  const [newBudget, setNewBudget] = useState('');
  
  const [search, setSearch] = useState('');
  
  function refreshSearchResults(searchString, expensesTemp, searchResultsTemp){

    searchResultsTemp.splice(0,searchResultsTemp.length);
    console.log("Expenses size - "+expensesTemp.length);
    if(searchString!=''){ 
      for(var i=0; i<expensesTemp.length; i++){
        if(expenses[i].name.toUpperCase().match(searchString.toUpperCase())){
          searchResultsTemp.push(expenses[i]);
        }
      }
    }
    else{
      for(var i=0; i<expensesTemp.length; i++){
        searchResultsTemp.push(expenses[i]);
      }
    }
    console.log("Search Results size - "+searchResultsTemp.length);
    setSearchResults(searchResultsTemp);
    return searchResultsTemp;
  }
  const handleSearch = event => {
    
    setSearch(event.target.value);
    refreshSearchResults(event.target.value, expenses, searchResults);

  }
  const handleName = event => {
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    setAmount(event.target.value)
  }
  
  const handleRemoveExpense = event => {
    
    event.preventDefault();

    const selectedId = event.target.value;
    var expensesTemp =[];
    for(var i=0; i<expenses.length; i++){
      if(expenses[i].id!=selectedId){
        expensesTemp.push(expenses[i]);
      }
      else{
        
        console.log('Removing ID - '+expenses[i].id+', Name - '+expenses[i].name);
      }
    }
    setExpenses(expensesTemp);
    setSearchResults(expensesTemp);
    console.log("Expenses size after Remove - "+expenses.length);
  }

  const handleSubmitForm = event => {
    event.preventDefault();
    console.log("Expenses size Before Add - "+expenses.length);
    //check whether the name is not empty and the amount is not negative

    if (name !== '' && amount > 0) {
      var id = expenses.length;
      // single expense object
      var expense = { id, name, amount }
      // do not override previous values in the array
      // use spread operator to access previous values
      //setExpenses([...expenses, expense])
      expenses.push(expense);
      setExpenses(expenses);
        
      // clean input fields
      setName('')
      setAmount('')
      setSearch('')
      
    } else {
      console.log('Invalid expense name or the amount')
    }
    console.log("Submitted form expenses size - "+expenses.length);
    refreshSearchResults('', expenses, searchResults);
  }
  /* const handleClearExpenses= event => {
    event.preventDefault();
    setSearchResults([]);
  } */

  const handleClearExpenses = event => {
    
    event.preventDefault();
    setSearchResults([]);

    const selectedId = event.target.value;
    var expensesTemp =[];
    for(var i=0; i<expenses.length; i++){
      if(expenses[i].id!=selectedId){
        expensesTemp.splice(expenses[i]);
      }
      console.log('clearing values'+ expensesTemp);
      
    }
    setExpenses(expensesTemp);
    //setSearchResults(expensesTemp);
  }

  
  //const budget = useSelector(state => state.budget);    //intial budget
  
 
    
    function handleBudgetEdit() { 
      setBudgetComponents(["Sample Component"]);
    } 
    function handleBudgetUpdate() { 
      setBudgetComponents([]);
      setBudget(newBudget);
    } 
   
    
    //console.log(handleBudgetEdit)
  

  return (
    <div className="App">
      <div className="budgetplanner_container">  

        <header className="budgetplanner_heading">
          
          <h1>Budget Planner</h1>
        </header>   
     
        <section className='budgetplanner_contents'>
                
          <div className='budget_head'>
            <p> Budget:
            <span className="text-success">{budget}</span>
            <Button type="submit" className="budget_edit_btn" onClick={handleBudgetEdit}>Edit</Button> 
            {budgetComponents.map((item, i) => ( <BudgetForm newBudget={budget} handleBudgetUpdate={handleBudgetUpdate} setNewBudget={setNewBudget}/> ))}
            {/* <input type="text" value="{budget}" onChange={(e)=>setBudget(e.target.value)} />
            <Button type="submit" variant="light" onClick={handleBudgetEdit}>Edit</Button> */}
            </p>
            <p>Remaining: {' '}
            <span className="text-success">
                ${' '}
                {expenses.reduce((accumulator, currentValue) => {
                  return (accumulator -= parseInt(currentValue.amount))
                }, budget)}
              </span></p>
              <p>Total Expense: {' '}
              <span className="text-success">
                ${' '}
                {expenses.reduce((accumulator, currentValue) => {
                  return (accumulator += parseInt(currentValue.amount))
                }, 0)}
              </span>
            </p>
          </div>
        
          <SearchBarForm searchstr={search} handleSearch={handleSearch}/>
          <List expenses={searchResults} handleRemoveExpense={handleRemoveExpense}/>
        
          <BudgetPlannerForm
            name={name}
            amount={amount}
            handleName={handleName}
            handleAmount={handleAmount}
            handleSubmitForm={handleSubmitForm}
            handleClearExpenses={handleClearExpenses}
          />

        </section>
      
      </div>
    </div>
  );
}


/* const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
 // budgetAction: () => dispatch(budgetAction),
  //stopAction: () => dispatch(stopAction) 
});*/
export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);