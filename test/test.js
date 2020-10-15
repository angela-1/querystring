import assert from 'assert'
// import { stringify, parse } from '../src/search-params.js'
import SearhParams from '../src/search-params.js'

function testStringify(it, params, expected) {
  console.log('it', it)
  assert.strictEqual(SearhParams.stringify(params), expected)
  console.log(`\u001B[32m✓\u001B[39m ${expected}`)
}

function testParse(it, encodedUri, expected) {
  console.log('it', it)
  SearhParams.parse(encodedUri)
  // assert.strictEqual(stringify(params), expected)
  console.log(`\u001B[32m✓\u001B[39m ${expected}`)
}

testStringify(
  'different types',
  {
    search: 'sdfs',
    page: 32,
    valid: true,
    labels: ['a', 'b']
  },
  'search=sdfs&page=32&valid=true&labels=a&labels=b'
)

testStringify(
  '测试中文',
  {
    search: '玉发改',
    page: '你好232',
    valid: true,
    labels: ['a', 'b'],
    obj: {
      c: 'obj a',
      b: 'valu'
    }
  },
  'search=%E7%8E%89%E5%8F%91%E6%94%B9&page=%E4%BD%A0%E5%A5%BD232&valid=true&labels=a&labels=b'
)

testParse(
  'parse 1',
  'search=%E7%8E%89%E5%8F%91%E6%94%B9&page=%E4%BD%A0%E5%A5%BD232&valid=true&labels=a&labels=b'
)

testParse('parse 2', 'search=sdfs&page=32&valid=true&labels=a&labels=b')
console.log('done')
