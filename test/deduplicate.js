import { expect } from 'chai'
import deduplicate from '../src/lib/deduplicate'

import timely from 'timely'
import testEmailList from '../src/test_data/hundred_thousand_emails.json'

const DATASET_SIZE   = 100000
const MAX_RUNTIME_MS = 1000

describe('deduplicate', function() {
   
   describe('validation', function() {

      it('should throw an error when non-array is passed', function() {
      
         expect(function() { return deduplicate('asdf') }).to.throw(TypeError)
         expect(function() { return deduplicate(true) }).to.throw(TypeError)
      })

      it('should be empty when passed empty', function() {
         
         expect(deduplicate([])).to.eql([])
      })

      it('should not change a uniquely filled array', function() {
         
         var testArray = ['bob@gmail.com', 'alice@hotmail.com', 'greg@live.com']
         expect(deduplicate(testArray)).to.eql(testArray)
      })

      it('should reduce an array of duplicates to a single email', function() {
         
         var testArray   = ['bob@gmail.com', 'bob@gmail.com', 'bob@gmail.com']
         var resultArray = ['bob@gmail.com']

         expect(deduplicate(testArray)).to.eql(resultArray)
      })

      it('should remove duplicates of an array', function() {
         
         var testArray   = ['greg@live.com', 'bob@gmail.com', 'greg@live.com', 'alice@hotmail.com', 'greg@live.com']
         var resultArray = ['greg@live.com', 'bob@gmail.com', 'alice@hotmail.com']

         expect(deduplicate(testArray)).to.eql(resultArray)
      })

      it('should keep the first email when duplicates exist at the beginning of an array', function() {
         
         var testArray   = ['greg@live.com', 'greg@live.com', 'alice@hotmail.com', 'greg@live.com', 'bob@gmail.com']
         var resultArray = ['greg@live.com', 'alice@hotmail.com', 'bob@gmail.com']

         expect(deduplicate(testArray)).to.eql(resultArray)
      })
      
      it('should keep the last email when duplicates exist at the end of an array', function() {
         
         var testArray   = ['greg@live.com', 'alice@hotmail.com', 'greg@live.com', 'bob@gmail.com', 'bob@gmail.com']
         var resultArray = ['greg@live.com', 'alice@hotmail.com', 'bob@gmail.com']

         expect(deduplicate(testArray)).to.eql(resultArray)
      })

   })

   describe('runtime', function() {

      it('should validate our test dataset', function() {
         
         let uniqueSet = new Set(testEmailList)

         expect(testEmailList.length).to.eql(DATASET_SIZE) 
         expect(uniqueSet.size).to.eql(DATASET_SIZE / 2)

      })

      it(`should deduplicate ${DATASET_SIZE} emails under ${MAX_RUNTIME_MS}ms`, function() {

         let timedDeduplicate = timely(deduplicate)
         let deduplicatedEmails = timedDeduplicate(testEmailList)
         
         expect(timedDeduplicate.time).to.be.below(MAX_RUNTIME_MS)
      })
   })
})
