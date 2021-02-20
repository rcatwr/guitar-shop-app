import React from 'react'
import SearchTool from './SearchTool';
import Nav from './Nav';
import OrderCard from './OrderCard'
import NewOrder from './NewOrder';

const Main = (props) => {

    return(
        <section className="section">
          <Nav />
          <div className="container is-flex is-justify-content-flex-end">
            {/* <!-- Left side --> */}
            <SearchTool showSearchOptions={props.showSearchOptions}/>
          </div>

          <OrderCard />
          <NewOrder />
        </section>
    )
}

export default Main;