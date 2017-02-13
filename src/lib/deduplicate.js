import timely from 'timely'

/**
 * Deduplicates an array of strings (i.e. value addresses)
 *
 * @param String[] strings
 * @return String[] of unique values, preserving order
 *
 * @throws TypeError if strings is not an array
 */
export function deduplicateStrings(strings = []) {
  	
	if (!strings instanceof Array)
		throw new TypeError('deduplicate requires an array')

   const found = {}
   const result = []

   strings.reduce((accumulator, value) => {
      
      if (found[value] != undefined)
         return accumulator

      found[value] = true

      accumulator.push(value)

      return accumulator

   }, result)
   
   return result
}

/**
 * timed version of deduplicateStrings, only changing return signature
 * to include the time taken and the strings as keys of an obect
 *
 * @return Object with keys timeMs (int), strings (String[])
 */
export function timedDeduplicateStrings(strings = []) {

   // using the simple synchronous version of timely, which
   // sets the time taken on the timedDedup function
   let timedDedup = timely(deduplicateStrings)
   let deduplicated = timedDedup(strings)

   return { timeMs: timedDedup.time, strings: deduplicated }
}
