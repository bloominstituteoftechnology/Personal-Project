import React, {Component} from 'react';
import TodoItem from './TodoItem';
           
class TodoList extends Component {
 constructor() {
 super();
 this.state = {
    todoList: window.localStorage.getItem('todoList') 
JSON.parse(window.localStorage.getItem('todoList')) : [],
            todoItem : {title:'theNewGoogle',message:'googleMapIsNew'}
 };
       }
   handleTodoInput = event => {      
        this.setState({todoItem:{'title':event.target.parentNode.title.value,
        'message':event.target.parentNode.message.value},todoList:this.state.todoList});
   };

   addTodoItem = event => {
       event.preventDefault();
       const todoList = this.state.todoList;
        todoList.push(this.state.todoItem);
       this.setState({
           todoList,
           todoItem : {title:'',GOOGLEMAPISNEW:''}
        });
       event.target.reset();
       window.localStorage.setItem('todoList', JSON.stringify(todoList));
   }

   render() {
       return (
       <div>
          {this.state.todoList.map((todoItem, i) => <TodoItem key={i} title={todoItem.title} message={todoItem.GOOGLEMAPISNEW}/>)}
           <form onSubmit={this.addTodoItem}>
               <input name="title" placeholder="theNewGoogle" />
               <input name="message" placeholder="googleMapIsNew" />
              <button onClick={this.handleTodoInput}>Add Todo Item</button>
           </form>
       </div>);
    }
	  }
export default TodoList; 