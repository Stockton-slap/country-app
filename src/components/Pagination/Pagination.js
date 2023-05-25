import { ArrowBack, ArrowForward, MoreHoriz } from "@mui/icons-material";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const arrowStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
};

const PaginationWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  padding: 15px;
  margin: 80px auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .pagination > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .pagination > .active > a {
    background-color: #1976d2;
    border-radius: 50%;
    color: #fff;
  }

  .pagination > li > a:hover,
  .pagination > li > span:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <PaginationWrapper>
      <ReactPaginate
        breakLabel={<MoreHoriz style={arrowStyles} />}
        nextLabel={<ArrowForward style={arrowStyles} />}
        previousLabel={<ArrowBack style={arrowStyles} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="page"
      />
    </PaginationWrapper>
  );
};

export default Pagination;
