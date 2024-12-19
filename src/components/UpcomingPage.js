import React, { useEffect, useState } from "react";
import { UPCOMING_MOVIES } from "../Service/Api";
import Header from "./Header";
import Card from "../components/Card";

const UpcomingPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getAllData();
  }, [currentPage]);

  useEffect(() => {
    if (data && searchQuery.trim() !== "") {
      const filtered = data.filter((item) =>
        item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [data, searchQuery]);

  async function getAllData() {
    const apiData = await fetch(`${UPCOMING_MOVIES}&page=${currentPage}`);
    const res = await apiData.json();
    console.log(res.results);
    setData(res.results);
    setFilteredData(res.results);
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
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
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </>
  );
};

export default UpcomingPage;
