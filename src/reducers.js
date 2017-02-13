import timely from 'timely'
import { IS_GENERATING, GENERATED_EMAILS, DEDUPLICATE_EMAILS } from './actions'
import deduplicateEmails from './lib/deduplicate'

const initialState = {
   inputEmails: [],
   isGenerating: false,
   deduplicatedEmails: [],
   timeTaken: 0
}

export default (state = initialState, action) => { 
   
   switch (action.type) {

      case IS_GENERATING:
         return Object.assign({}, state, { 
            isGenerating: true,
            deduplicatedEmails: [],
            timeTaken: 0
         })

      case GENERATED_EMAILS:

         return Object.assign({}, state, {
            inputEmails: action.emails,
            isGenerating: false,
         })

      case DEDUPLICATE_EMAILS:
      
         // using the simple synchronous version of timely, which
         // sets the time taken on the timedDedup function
         let timedDedup = timely(deduplicateEmails)
         let deduplicatedEmails = timedDedup(action.emails)
      
         return Object.assign({}, state, {
            deduplicatedEmails: deduplicatedEmails,
            timeTaken: timedDedup.time 
         })

      default:
         return state
   }
}
