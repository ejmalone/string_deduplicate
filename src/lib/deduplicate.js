/**
 * Deduplicates an array of strings (i.e. email addresses)
 *
 * @param String[] emails
 * @return String[] of emails, preserving order
 *
 * @throws TypeError if emails is not an array
 */
export default function(emails = []) {
  	
	if (!emails instanceof Array)
		throw new TypeError('deduplicate requires an array')

   const found = {}
   const result = []

   emails.reduce((accumulator, email) => {
      
      if (found[email] != undefined)
         return accumulator

      found[email] = true

      accumulator.push(email)

      return accumulator

   }, result)
   
   return result
}
