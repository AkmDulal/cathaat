import React from 'react'
import HeaderComponents from "./HeaderClassComponets";
import FooterComponents from "./Footer";
function Layout({children}) {
  return (
    <div className="App">
          <HeaderComponents />
           <main className="main__area"> {children} </main>
           <FooterComponents />
      </div>
  )
}

export default Layout