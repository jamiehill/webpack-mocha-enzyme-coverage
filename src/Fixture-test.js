import React from 'react'
import Fixture from './Fixture'

describe('Fixture', () => {
    var wrapper

    beforeEach(function() {
        wrapper = mount(<Fixture />)
    })

    it('should have "checked" prop set', () => {
        wrapper.find('#checked').should.be.checked()
        wrapper.find('#not').should.not.be.checked()
    })

    it('should have correct class applied', () => {
        wrapper.find('#checked').should.have.className('checked')
    })

    it('should contain 2 input elements', () => {
        wrapper.should.have.exactly(2).descendants('input')
    })

    it('should have input with id "wrapper"', () => {
        wrapper.should.have.id('wrapper')
    })
});
