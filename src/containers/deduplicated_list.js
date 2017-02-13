import { connect } from 'react-redux'
import DeduplicatedList from '../components/deduplicated_list'

const mapStateToProps = (state, ownProps) => {
   return {
      emails: state.deduplicatedEmails,
      timeTaken: state.timeTaken
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
   }
}

const ReduxDeduplicatedList = connect(
   mapStateToProps,
   mapDispatchToProps
)(DeduplicatedList)

export default ReduxDeduplicatedList
