import {connect} from 'react-redux'
import {addTodo,completeTodo,addText} from '../actions/ManageTodo'
import TodoList from '../components/TodoList'

const mapStateToProps=state => {
    return {count : state.todoredu.count,
            text : state.todoredu.text
    }
  }
  
  const mapDispatchToProps ={
    addTodo,completeTodo,addText
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(TodoList)