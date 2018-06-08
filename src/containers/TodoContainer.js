import {connect} from 'react-redux'
import {addTodo,completeTodo,addText} from '../actions/ManageTodo'
import TodoList from '../components/TodoList'

const mapStateToProps=state => {
    
    return {
            text : state.todoredu.text,
            data:state.todoredu.data
    }
  }
  
  const mapDispatchToProps ={
    addTodo,completeTodo,addText
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(TodoList)