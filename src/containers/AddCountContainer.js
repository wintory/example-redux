import {connect} from 'react-redux'
import addCount from '../actions/ManageCount'
import Att from '../components/Count'
import deleteCount from '../actions/ManageCount'

const mapStateToProps=state => {
    return {count : state.count}
  }
  
  const mapDispatchToProps ={
    addCount,deleteCount
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Att)