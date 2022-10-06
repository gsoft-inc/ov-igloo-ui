import React from 'react';
import Pager from '@igloo-ui/pager';

const Example = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="example">
      <Section>
        <Pager
          pageSize={5}
          totalCount={200}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Section>
    </div>
  );
};

export default Example;
