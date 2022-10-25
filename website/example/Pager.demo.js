import React from 'react';
import Pager from '@igloo-ui/pager';

const Example = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div className="example">
      <Pager
        pageSize={5}
        totalCount={200}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Example;
