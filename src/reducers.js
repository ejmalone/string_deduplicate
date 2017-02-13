import { IS_GENERATING, GENERATED_EMAILS, DEDUPLICATE_EMAILS } from './actions'
import { timedDeduplicateStrings } from './lib/deduplicate'

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
         
         const result = timedDeduplicateStrings(action.emails)
      
         return Object.assign({}, state, {
            deduplicatedEmails: result.strings,
            timeTaken: result.timeMs 
         })

      default:
         return state
   }
}
