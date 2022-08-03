// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.

import App from './App'


//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})


describe("when App renders, ", ()=> {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it("it displays a header",() => {
    // const renderedApp = shallow(<App/>)
    const appHeaderRender = renderedApp.find("Header")
    expect(appHeaderRender.length).toEqual(1)
  })
  it("it displays a footer",() => {
    // const renderedApp = shallow(<App/>)
    const appFooterRender = renderedApp.find("Footer")
    expect(appFooterRender.length).toEqual(1)
  })
  it("provides a route of '/' to the home component",() => {
    // const renderedApp = shallow(<App/>)
    const renderedHomePath = renderedApp.find('[path="/"]')
    expect(renderedHomePath.length).toEqual(1)
  })
  it("provides a route of '/' to the not found component",() => {
    // const renderedApp = shallow(<App/>) 
    const renderedNotFoundPath = renderedApp.find('[path="/"]')
    expect(renderedNotFoundPath.length).toEqual(1)
  } )

})

})

