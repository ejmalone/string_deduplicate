import React from 'react'


/**
 * UX to generate the list of emails for deduplication
 */
class InputList extends React.Component {

   uniqueCount() {
      return new Set(this.props.emails).size
   }

   render() {
      return (
         <div>
            <textarea 
               id="inputEmails" 
               rows="10" 
               value={this.props.emails.join('\n')}></textarea>

            {
               this.props.emails.length > 0 &&

               <div id="emailInfo">
                  <ul>
                     <li>emails: {this.props.emails.length}</li>
                     <li>unique: {this.uniqueCount()}</li>
                  </ul>
               </div>
            }
            
            <br />
            
            <select name="count" ref={(select) => { this.countSelect = select }}>
               <option value="100">100</option>
               <option value="500">500</option>
               <option value="1000">1,000</option>
               <option value="10000">10,000</option>
               <option value="100000">100,000</option>
            </select>

            {" "}

            <a className="btn btn-default" 
               onClick={(e) => this.props.generate(parseInt(this.countSelect.value))} 
               disabled={(this.props.isGenerating ? 'disabled' : '')}>
               
               Generate emails
            </a> 

            {" "}

            <span className={"glyphicon glyphicon-repeat spinner " + (this.props.isGenerating ? 'visible' : '')}></span>
         </div>
      )
   }
}

export default InputList
