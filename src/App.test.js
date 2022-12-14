import React from 'react';
import { fireEvent, getByPlaceholderText, render, waitForElementToBeRemoved } from '@testing-library/react';
import Component1 from '../src/components/component1/component1';
import Component2 from '../src/components/component2/component2';
import { act } from 'react-dom/test-utils';



describe('Details Component', () => {

  jest.useFakeTimers();

  it('Component 1', async () => {

    const { getByText, findByText } = render(<Component1 />);

    const button = getByText("Click");

    act(() =>{
      button.click();
    });

    expect(getByText('Test2')).toBeTruthy();
  });

  it('Component 2', async () => {

    const { getByPlaceholderText, getByText, queryByText } = render(<Component2 />);

    const input = getByPlaceholderText("search");

    act(() => {
      fireEvent.change(input, { target: { value: "re"}});
    });

    jest.advanceTimersByTime(500);
    jest.runAllTimers();

    // setTimeout(function () {
    //   done();
    // }, 600);

    expect(input).toBeInTheDocument();

    // await waitForElementToBeRemoved(queryByText("yellow"));
    // await waitForElementToBeRemoved(queryByText("blue"));
    // await waitForElementToBeRemoved(queryByText("pink"));
    // await waitForElementToBeRemoved(queryByText("brown"));

    expect(getByText("green")).toBeInTheDocument();
    expect(getByText("redx")).toBeInTheDocument();
  });
});