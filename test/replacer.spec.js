'use strict';

const expect = require('chai').expect;
const replacer = require('..');

describe('replacer', function(){
  // it('should replace the value', function(){

  //   const a = {
  //     '$regex': 'hello', 
  //     'a': [
  //         {'$regx': 'a'},
  //         {'$regex': 'b'}
  //       ],
  //       b:{
  //         c:{
  //           $regex: 'c'
  //         }
  //       }
  //   };

  //   const r = replacer.propReplace(a, '$regex', (v)=> { return new RegExp(v, 'i')});
  //   console.log(r);
  //   // expect(replacer.Number).to.be.an('object');
  //   // expect(replacer.Number).to.have.keys('getNumbers', 'getValue');
  // })
  it('should have .Date exposed', function(){
    const a = {
      '$or': [
          {'name': {'$regex': 'a'}},
          {'nameEN': {'$regex': 'b'}}
        ]
    };

    const r = replacer.propReplace(a, '$regex', (v)=> { return new RegExp(v, 'i')});
    // console.log(r);
    // expect(replacer.Date).to.be.an('object');
  })
})