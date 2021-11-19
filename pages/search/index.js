import React, {useState} from "react";
import BlueBox from "../../components/layout/search/BlueBox";
import SideBar from "../../components/layout/search/sidebar/SideBar";
import PricingDate from "../../components/layout/search/PricingDate";
import Tickets from "../../components/layout/search/Tickets";

const Search = () => {
    const [showFilters, setShowFilters] = useState(false);
    return (
      <div className="search">
          <p
              className="md:hidden filter-button block absolute text-xl w-16 h-16 "
              onClick={() => setShowFilters(!showFilters)}
          >
              فیلتر ها
          </p>
          <BlueBox />
          <div className="grid gap-8 grid-cols-4 p-8 tab-port:p-24 container-search">
              <SideBar show={showFilters} setShow={setShowFilters} />
              <div className="col-start-1 tab-port:col-start-2 col-end-5">
                  <PricingDate />
                  <Tickets />
              </div>
          </div>
      </div>
  );
};
export default Search;