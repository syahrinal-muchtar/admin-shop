import React from "react";

import SidebarLayout from "@/layouts/SidebarLayout";

function Applications() {
  return (
    <div>
      <img
        alt="404"
        height={180}
        src="/static/images/status/coming-soon.svg"
      />
      Coming Soon
    </div>
  );
}

Applications.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Applications;
