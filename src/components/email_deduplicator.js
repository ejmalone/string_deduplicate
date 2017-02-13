import React from 'react'
import InputList from '../containers/input_list'
import DeduplicatedList from '../containers/deduplicated_list'

/**
 * Primary UX of this deduplication app
 */
class EmailDeduplicator extends React.Component {

   render() {
      return (
         <div className="row">
            
            <div className="col-md-4">
               <InputList />
            </div>

            <div className="col-md-3">
               <a className="btn btn-default" onClick={() => this.props.deduplicate(this.props.emails)}>deduplicate</a>
            </div>


            <div className="col-md-4">
               <DeduplicatedList />
            </div>
         </div>
      )
   }
}

export default EmailDeduplicator
