import React, { useEffect, useState } from "react";
import { URL } from "../Service/Api";
import Header from "./Header";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getAllData();
  }, [currentPage]);

  async function getAllData() {
    const apiData = await fetch(`${URL}&page=${currentPage}`);
    const res = await apiData.json();
    console.log(res.results);
    setData(res.results);

    if (searchQuery.trim() === "") {
      setFilteredData(res.results);
    } else {
      filterData(searchQuery, res.results);
    }
  }

  const filterData = (query, dataSet) => {
    const filtered = dataSet.filter((item) =>
      item.original_title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSearch = (query) => {
    console.log("serch Query:",query);
    setSearchQuery(query);
    setCurrentPage(1); // Reset to page 1 on search
    filterData(query, data);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="cards-container">
        {filteredData?.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </>
  );
};

export default Home;
