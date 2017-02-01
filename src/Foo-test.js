import React from 'react'
import Foo from './Foo'

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    shallow(<Foo className="foo" />)
        .should.have.className('foo')
  });

  it('should return bar', () => {
    const foo = new Foo()
    foo.shouldReturnBar().should.equal('bar')
  })

  it('should do something', () => {
    const foo = new Foo()
    foo.shouldReturnJamie().should.equal('jamie')
  })
});
