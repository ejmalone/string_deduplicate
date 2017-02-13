export const IS_GENERATING      = 'IS_GENERATING'
export const GENERATED_EMAILS   = 'GENERATED_EMAILS'
export const DEDUPLICATE_EMAILS = 'DEDUPLICATE_EMAILS'

import generateEmails from './lib/generate'

export function generate(count) {
   
   return (dispatch, getState) => {
      dispatch({ type: IS_GENERATING })

      generateEmails(count)
         .then((emails) => dispatch({ type: GENERATED_EMAILS, emails }))
         .catch((reason) => { 
            alert('failed to generate emails in time')
            console.error('failed to generate emails', reason); 
         })
   }
}

export function deduplicate(emails) {
   return { type: DEDUPLICATE_EMAILS, emails } 
}
