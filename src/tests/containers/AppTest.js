import React from 'react';
import { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow } from 'enzyme';
import App from 'containers/App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App container', () => {
  it('Render test', () => {
    const container = shallow(<App />);
    expect(container).to.have.text('Hello World')
  });
});
