import { PropsWithChildren } from "react";

function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div  className='flex ' >
      <aside  className='bg-slate-200 p-5 mr-5' >Admin Sidebar</aside> {/* contains links and other staff */}
      <div>{children}</div> {/* contains content area */}
    </div>
  );
}

export default AdminLayout;
