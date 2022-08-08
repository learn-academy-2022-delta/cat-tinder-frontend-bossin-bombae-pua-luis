import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({adapter: new Adapter()})

describe("When Header renders", () => {
    it("displays a heading", () => {
      const header = shallow(<Header />)
      const headerHeading = header.find("h1").text()
      expect(headerHeading).toEqual("Welcome to Cat Tinder")
    })
  })