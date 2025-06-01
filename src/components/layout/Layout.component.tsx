import Header from "../header/Header.component";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="bg-slate-50 h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
