/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Pager from './Pager';

describe('Pager', () => {
  let currentPage = 1;
  const handlePageChange = (page: number) => {
    currentPage = page;
  };

  test('It should render without error and a snapshot', () => {
    const { asFragment } = render(
      <Pager
        dataTest="pager1"
        pageSize={5}
        totalCount={50}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
    expect(screen.getByTestId('pager1')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('It should render a disabled left chevron when on page 1', () => {
    const { container } = render(
      <Pager
        dataTest="pager2"
        pageSize={5}
        totalCount={50}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
    const leftChevron = container.querySelector('.ids-pager__prev');
    expect(leftChevron).toBeInTheDocument();
    expect(leftChevron).toBeDisabled();
  });

  test('Current page should be 2 with the appropriate aria tags', () => {
    let currentPage = 2;
    const { container } = render(
      <Pager
        dataTest="pager3"
        pageSize={5}
        totalCount={50}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
    const selectedPage = container.querySelector(
      '.ids-pager__button--selected'
    );
    expect(selectedPage).toHaveTextContent('2');
    expect(selectedPage).toHaveAttribute('aria-current', 'page');
    expect(selectedPage).toHaveAttribute('aria-label', 'Page 2');
  });

  test('Buttons should contain appropriate text', () => {
    let currentPage = 5;
    const { container } = render(
      <Pager
        dataTest="pager4"
        pageSize={5}
        totalCount={50}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
    const page1 = container.querySelector('li:nth-child(2) .ids-pager__button');
    const ellipsis1Btn = container.querySelector(
      'li:nth-child(3) .ids-pager__button'
    );
    const page4 = container.querySelector('li:nth-child(4) .ids-pager__button');
    const page5 = container.querySelector('li:nth-child(5) .ids-pager__button');
    const page6 = container.querySelector('li:nth-child(6) .ids-pager__button');
    const ellipsis2Btn = container.querySelector(
      'li:nth-child(7) .ids-pager__button'
    );
    const page10 = container.querySelector(
      'li:nth-child(8) .ids-pager__button'
    );
    const ellipsis = container.querySelector(
      'li:nth-child(3) .ids-pager__button svg'
    ) as SVGElement;
    const ellipsis2 = container.querySelector(
      'li:nth-child(7) .ids-pager__button svg'
    ) as SVGElement;
    expect(page1).toHaveTextContent('1');
    expect(ellipsis1Btn).toContainElement(ellipsis);
    expect(page4).toHaveTextContent('4');
    expect(page5).toHaveTextContent('5');
    expect(page6).toHaveTextContent('6');
    expect(ellipsis2Btn).toContainElement(ellipsis2);
    expect(page10).toHaveTextContent('10');
  });
});
