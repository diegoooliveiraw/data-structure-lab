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


const menuItems = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Stack",
    icon: Box,
  },
  {
    name: "Queue",
    icon: Inbox,
  },
  {
    name: "Linked List",
    icon: Link,
  },
  {
    name: "Binary Tree",
    icon: GitBranch,
  },
  {
    name: "Graph",
    icon: Network,
  },
  {
    name: "Sorting",
    icon: BarChart3,
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

        <div className="
          mb-8
        ">

          <h1
            className="
              text-xl
              font-bold
              text-white
            "
          >
            Data Structure Lab
          </h1>


          <span
            className="
              text-sm
              text-slate-400
            "
          >
            Learn. Visualize. Master.
          </span>

        </div>



        {/* Menu */}

        <nav
          className="
            space-y-2
          "
        >

          {
            menuItems.map((item) => {


              const Icon = item.icon;


              return (

                <button

                  key={item.name}

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
                    hover:text-white
                    transition
                  "

                >

                  <Icon size={18}/>

                  <span>
                    {item.name}
                  </span>


                </button>

              );

            })
          }


        </nav>


      </div>



      {/* Footer Sidebar */}

      <div
        className="
          space-y-2
        "
      >


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

          <Settings size={18}/>

          Settings

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

          <Moon size={18}/>

          Theme

        </button>


      </div>


    </aside>

  );

}