import React, { memo, useState } from 'react'

import Navbar from '../Navbar'
import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar'

const Layout = memo(({ children, routes }) => {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <Navbar onClickMenu={setOpenSidebar} />
      <Sidebar open={openSidebar} onOpen={setOpenSidebar} routes={routes} />
      <Content>{children}</Content>
    </>
  )
})

export default Layout
