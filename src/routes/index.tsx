import {
createBrowserRouter
} from "react-router-dom";


import {
AppLayout
} from "@/components/layout";


import {
Home
} from "@/pages/Home/Home";


import {
Stack
} from "@/pages/Stack/Stack";


import {
Queue
} from "@/pages/Queue/Queue";


import {
LinkedList
} from "@/pages/LinkedList/LinkedList";


import {
BinaryTree
} from "@/pages/BinaryTree/BinaryTree";


import {
Graph
} from "@/pages/Graph/Graph";


import {
Sorting
} from "@/pages/Sorting/Sorting";



export const router = createBrowserRouter([


{
path:"/",

element:<AppLayout />,

children:[

{
index:true,
element:<Home/>
},

{
path:"stack",
element:<Stack/>
},

{
path:"queue",
element:<Queue/>
},

{
path:"linked-list",
element:<LinkedList/>
},

{
path:"binary-tree",
element:<BinaryTree/>
},

{
path:"graph",
element:<Graph/>
},

{
path:"sorting",
element:<Sorting/>
},

]

}

]);