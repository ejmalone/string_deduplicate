import React from 'react'


/**
 * Output UX to show the deduplicated emails
 */
class DeduplicatedList extends React.Component {

   uniqueCount() {
      return new Set(this.props.emails).size
   }

   render() {
      return (
         <div>
            <textarea 
               id="deduplicatedEmails" 
               rows="10" 
               value={this.props.emails.join('\n')}></textarea>

            {
               this.props.emails.length > 0 &&

               <div id="emailInfo">
                  <ul>
                     <li>emails: {this.props.emails.length}</li>
                     <li>unique: {this.uniqueCount()}</li>
                     <li>time taken: {this.props.timeTaken}ms</li>
                  </ul>
               </div>
            }
            
         </div>
      )
   }
}

export default DeduplicatedList
