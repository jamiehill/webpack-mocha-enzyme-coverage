import React from 'react';
import { shallow } from 'enzyme';
import Foo from '../../src/Foo';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    shallow(<Foo />).should.have.className('foo');
  });
});
