import React from 'react'
import Dropdown from './Dropdown';
import Nav from './Nav';
import OrderCard from './OrderCard'

const Main = () => {

    return(
        <section className="section">
          <Nav />
          <div className="container is-flex is-justify-content-flex-end">
            {/* <!-- Left side --> */}
            <Dropdown />
          </div>

          <OrderCard />
        </section>
    )
}

export default Main;