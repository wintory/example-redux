import {connect} from 'react-redux'
import {addCount,deleteCount} from '../actions/ManageCount'
import Att from '../components/Count'

const mapStateToProps=state => {

    return {count : state.countredu.count}
  }
  
  const mapDispatchToProps ={
    addCount,deleteCount
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Att)