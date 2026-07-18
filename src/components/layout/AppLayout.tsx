import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
      "
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo */}
      <div
        className="
          flex-1
          flex
          flex-col
        "
      >
        <Header />

        <main
          className="
            flex-1
            p-6
            overflow-auto
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}