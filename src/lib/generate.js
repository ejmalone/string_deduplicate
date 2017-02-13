import { internet } from 'faker'

const MAX_TICKS_PER_CYCLE = 1000
const MAX_DURATION = 120000

/**
 * Asynchronously generates an array of emails containing 50% duplicates
 *
 * @param int numberEmails the number of emails to generate
 * @return Promise where the resolve function will have a parameter
 *         with a String array of email addresses
 */
export default function(numberEmails = 100) {

   /*
    * a goofy way to make this function generate email addresses
    * asynchronously so not to block the UX from refreshing.
    *
    * Achieved by placing email generation into an interval
    * and only allowing a maximum number of ticks per "interval
    * cycle"
    *
    * the actual intervals start to back up but will clear from the event
    * queue once the result array is filled or runs out of time
    * 
    * todo: rewrite as a web worker
    */
   return new Promise((resolve, reject) => {

      const result = []
      const start  = new Date().getTime()
      let ticks = 0

      const interval = setInterval(() => {

         if (result.length == numberEmails) {
            clearInterval(interval)
            return resolve(result) 
         }

         if ((new Date().getTime() - start) > MAX_DURATION) {
            clearInterval(interval)
            return reject(`failed to generate emails in time with ${result.length} of ${numberEmails}`)
         }

         while (result.length < Math.ceil(numberEmails / 2)) {
            
            if ((++ticks) > MAX_TICKS_PER_CYCLE) {
               ticks = 0
               return
            }

            let email = internet.email()

            if (result.indexOf(email) == -1)
               result.push(email)
         }

         while (result.length < numberEmails) {

            if ((++ticks) > MAX_TICKS_PER_CYCLE) {
               ticks = 0
               return
            }

            result.push(result[Math.floor(Math.random() * result.length)])
         }

         return result
      }, 50)
   
   })
}
