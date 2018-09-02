import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer } from './CardContainer';
import { mockStore } from '../../mockData/mockStore';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer movies={mockStore.movies} category="nowPlaying" />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot when category is favorites', () => {
    wrapper = shallow(
      <CardContainer movies={mockStore.movies} category="favorites" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});