import {
  Home,
  Box,
  Inbox,
  Link,
  GitBranch,
  Network,
  BarChart3,
  Settings,
  Moon,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Stack",
    icon: Box,
    path: "/stack",
  },
  {
    name: "Queue",
    icon: Inbox,
    path: "/queue",
  },
  {
    name: "Linked List",
    icon: Link,
    path: "/linked-list",
  },
  {
    name: "Binary Tree",
    icon: GitBranch,
    path: "/binary-tree",
  },
  {
    name: "Graph",
    icon: Network,
    path: "/graph",
  },
  {
    name: "Sorting",
    icon: BarChart3,
    path: "/sorting",
  },
];

export function Sidebar() {
  return (
    <aside
      className="
        h-screen
        w-64
        border-r
        border-slate-800
        bg-slate-900
        flex
        flex-col
        justify-between
        p-5
      "
    >
      <div>
        {/* Logo */}

        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">
            Data Structure Lab
          </h1>

          <span className="text-sm text-slate-400">
            Learn. Visualize. Master.
          </span>
        </div>

        {/* Menu */}

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  px-3
                  py-2
                  rounded-lg
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                `
                }
              >
                <Icon size={18} />

                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer */}

      <div className="space-y-2">
        <button
          className="
            w-full
            flex
            items-center
            gap-3
            px-3
            py-2
            rounded-lg
            text-slate-300
            hover:bg-slate-800
            transition
          "
        >
          <Settings size={18} />

          <span>Settings</span>
        </button>

        <button
          className="
            w-full
            flex
            items-center
            gap-3
            px-3
            py-2
            rounded-lg
            text-slate-300
            hover:bg-slate-800
            transition
          "
        >
          <Moon size={18} />

          <span>Theme</span>
        </button>
      </div>
    </aside>
  );
}