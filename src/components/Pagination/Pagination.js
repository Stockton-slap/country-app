import ReactPaginate from "react-paginate";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    background-color: tomato;
  }

  .page {
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
  }
`;

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <PaginationWrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page"
      />
    </PaginationWrapper>
  );
};

export default Pagination;
