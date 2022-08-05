import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    it("displays an image and all of its props", () => {
      const home = shallow(<Home />)
      const homeHeading = home.find("h3").text()
      expect(homeHeading).toEqual("Welcome to CatTinder")
    })
  })

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home';

Enzyme.configure({adapter: new Adapter()})

