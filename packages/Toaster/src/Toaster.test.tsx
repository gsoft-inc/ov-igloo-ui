/**
 * @jest-environment jsdom
 */
import React from 'react';
import { act, fireEvent, render, within } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

import Button from '@igloo-ui/button';

import Toaster, { clearToastQueue, toast } from './Toaster';

export interface ToastQueueTypeProps {
  status?: 'success' | 'error';
  message?: string;
  duration?: number | 'infinite';
  isClosable?: boolean;
}

/** 
  * This function searches for the every react-aria SSR ids in a given HTMLElement node and replaces every attribute value with a static id 
  * 
  * This can be useful when you're trying to generate a snapshot of components using react-aria under the hood 
  */ 
function replaceReactAriaIds(container: HTMLElement) { 
  const selectors = ['id', 'for', 'aria-labelledby']; 
  const ariaSelector = (el: string) => `[${el}^="react-aria"]`; 
  const regexp = /react-aria.*/g;
  const staticId = 'react-aria-generated-id'; 
 
  /** 
   * keep a map of the replaceIds to keep the matching between input "id" and label "for" attributes 
   */ 
  const attributesMap: Record<string, string> = {}; 
 
  container.querySelectorAll(selectors.map(ariaSelector).join(', ')).forEach((el, index) => { 
    selectors.forEach((selector) => { 
      const attr = el.getAttribute(selector); 

      if (attr?.match(regexp)) { 
        const newAttr = `${staticId}-${index}`; 

        el.setAttribute(selector, attributesMap[attr] || newAttr); 
 
        attributesMap[attr] = newAttr; 
      } 
    }); 
  }); 
} 

function RenderToastButton(props: ToastQueueTypeProps = {}) {
  return (
    <div>
      <Button onClick={() => toast[props.status || 'success'](props.message || 'DefaultToast', {duration: props.duration, isClosable: props.isClosable })}>
          Success
        </Button>
    </div>
  );
}

function renderComponent(contents: React.ReactElement) {
  return render(<>
    <Toaster />
    {contents}
  </>);
}

function fireAnimationEnd(alert: HTMLElement) {
  let e = new Event('animationend', {bubbles: true, cancelable: false});
  (e as any).animationName = 'fade-out';
  fireEvent(alert, e);
}

describe('Toast', () => {

  beforeEach(() => {
    jest.useFakeTimers();
    clearToastQueue();
  });

  afterEach(() => {
    act(() => jest.runAllTimers());
  });

  test('It should open and close without error and render a snapshot when open', () => {
    const {getByRole, queryByRole, baseElement} = renderComponent(<RenderToastButton isClosable duration="infinite" />);
    let button = getByRole('button');

    expect(queryByRole('alert')).toBeNull();
    fireEvent.click(button);

    const region = getByRole('region');
    expect(region).toHaveAttribute('aria-label', 'Notifications');

    const alert = getByRole('alert');
    expect(alert).toBeVisible();

    replaceReactAriaIds(baseElement);
    expect(baseElement).toMatchSnapshot();

    button = within(alert).getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Close');
    fireEvent.click(button);

    fireAnimationEnd(alert);
    expect(queryByRole('alert')).toBeNull();

  });

  test('It should render an error toast', () => {
    const {getByRole, queryByRole} = renderComponent(<RenderToastButton status="error" isClosable duration="infinite" />);
    let button = getByRole('button');
    
    expect(queryByRole('alert')).toBeNull();
    fireEvent.click(button);

    const alert = getByRole('alert');
    expect(alert).toBeVisible();
    expect(alert).toHaveClass('ids-toast--error');

    button = within(alert).getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Close');
    fireEvent.click(button);

    fireAnimationEnd(alert);
    expect(queryByRole('alert')).toBeNull();
  });

  test('Removes a toast via timeout', () => {
    const {getByRole, queryByRole} = renderComponent(<RenderToastButton duration={5000} />);
    const button = getByRole('button');

    fireEvent.click(button);

    const toast = getByRole('alert');
    expect(toast).toBeVisible();

    act(() => jest.advanceTimersByTime(1000));
    expect(toast).not.toHaveAttribute('data-animation', 'exiting');

    act(() => jest.advanceTimersByTime(5000));
    expect(toast).toHaveAttribute('data-animation', 'exiting');

    fireAnimationEnd(toast);
    expect(queryByRole('alert')).toBeNull();
  });

  test('It should render multiple toast', () => {
    const {getByRole, queryByRole, getAllByRole} = renderComponent(<RenderToastButton status="error" isClosable duration="infinite" />);
    let button = getByRole('button');
    
    expect(queryByRole('alert')).toBeNull();
    fireEvent.click(button);
    fireEvent.click(button);

    const alert = getAllByRole('alert');
    expect(alert).toHaveLength(2);

    button = within(alert[0]).getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Close');
    fireEvent.click(button);
    
    button = within(alert[1]).getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Close');
    fireEvent.click(button);

    fireAnimationEnd(alert[0]);
    fireAnimationEnd(alert[1]);
    expect(queryByRole('alert')).toBeNull();
  });
});
