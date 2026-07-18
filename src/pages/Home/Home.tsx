import {
motion
} from "framer-motion";


import {
StructureCard
} from "@/components/ui/StructureCard/StructureCard";



const structures=[

{
title:"Stack",
description:"Explore LIFO data structure.",
link:"/stack"
},

{
title:"Queue",
description:"Explore FIFO data structure.",
link:"/queue"
},

{
title:"Linked List",
description:"Understand nodes and pointers.",
link:"/linked-list"
},

{
title:"Binary Tree",
description:"Visualize hierarchical structures.",
link:"/binary-tree"
},

{
title:"Graph",
description:"Study nodes and connections.",
link:"/graph"
},

{
title:"Sorting",
description:"Visualize sorting algorithms.",
link:"/sorting"
}

];



export function Home(){



return (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.4
}}

>



<h1
className="
text-4xl
font-bold
"
>

Data Structure Lab

</h1>


<p

className="
text-slate-400
mt-3
max-w-xl
"

>

Learn algorithms through interactive
visualizations and animations.

</p>




<div

className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6
mt-10
"

>


{
structures.map(item=>(

<StructureCard

key={item.title}

{...item}

/>

))
}


</div>


</motion.div>

);


}