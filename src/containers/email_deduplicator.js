import { connect } from 'react-redux'
import EmailDeduplicator from '../components/email_deduplicator'
import { deduplicate } from '../actions'

const mapStateToProps = (state, ownProps) => {
   return {
      emails: state.inputEmails
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deduplicate: (emails) => { 
         dispatch(deduplicate(emails)) 
      }
   }
}

const ReduxEmailDeduplicator = connect(
   mapStateToProps,
   mapDispatchToProps
)(EmailDeduplicator)

export default ReduxEmailDeduplicator
