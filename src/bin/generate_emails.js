import generator from '../lib/generate'
import fs from 'fs'

const NUM_EMAILS = 100000
const filename   = 'test_data/hundred_thousand_emails.json'

console.log(`about to generate ${NUM_EMAILS} unique emails and save to ${filename}`) 

generator(NUM_EMAILS)
   .then((emails) => { 

      console.log(`now writing to ${filename}`)

      return new Promise((resolve, reject) => {
         fs.writeFile(
            `./src/${filename}`, 
            JSON.stringify(emails),
            (err) => {
               if (err)
                  reject(err)
               else
                  resolve()
            }
         )
      })

   })
   .then(() => {
      console.log(`done writing emails to ${filename}`)
   })
   .catch((reason) => console.error('failed to generate emails', reason.toString()))
