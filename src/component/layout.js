import { Outlet } from "react-router-dom";
import Header from "./header";
import Bar from "./bar";

function Layout() {
    return (
<div>
<Header />
  <body className="content">
      <div className="row">
        <div className="col-md-2 col-2 align-items-center justify-content-center">
          <Bar/>
        </div>
        <div className="col-md-10 col-10">
          <Outlet />
        </div>
      </div>
  </body>
</div>

    )
}

export default Layout;