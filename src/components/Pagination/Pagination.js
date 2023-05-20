import { ArrowBackIos, ArrowForwardIos, MoreHoriz } from "@mui/icons-material";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const arrowStyles = { display: "flex", alignItems: "center", width: "20px" };

const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: rgb(255, 255, 255);
    border-radius: 40px;
    padding: 15px;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 80px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .page {
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
  }

  .active {
    background-color: #1976d2;
    border-radius: 5px;
    color: #fff;
  }
`;

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <PaginationWrapper>
      <ReactPaginate
        breakLabel={<MoreHoriz style={arrowStyles} />}
        nextLabel={<ArrowForwardIos style={arrowStyles} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<ArrowBackIos style={arrowStyles} />}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page"
      />
    </PaginationWrapper>
  );
};

export default Pagination;
