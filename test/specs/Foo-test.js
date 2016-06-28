import React from 'react'
import { shallow } from 'enzyme'
import Foo from '../../src/Foo'

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    shallow(<Foo />).should.have.className('foo')
  });

  it('should return bar', () => {
    const foo = new Foo()
    foo.shouldReturnBar().should.equal('bar')
  })
});
