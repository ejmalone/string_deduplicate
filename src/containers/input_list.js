import { connect } from 'react-redux'
import InputList from '../components/input_list'
import { isGenerating, generate } from '../actions'

const mapStateToProps = (state, ownProps) => {
   return {
      emails: state.inputEmails,
      isGenerating: state.isGenerating
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      generate: (count) => { 
         dispatch(generate(count))
      }
   }
}

const ReduxInputList = connect(
   mapStateToProps,
   mapDispatchToProps
)(InputList)

export default ReduxInputList
