import {
  Bell,
  Moon,
} from "lucide-react";


export function Header(){


return (

<header

className="
h-16
border-b
border-slate-800
bg-slate-900
flex
items-center
justify-between
px-6
"

>


<div>

<h2
className="
text-lg
font-semibold
text-white
"
>
Dashboard
</h2>


<p
className="
text-sm
text-slate-400
"
>
Explore data structures and algorithms
</p>


</div>




<div

className="
flex
items-center
gap-4
"

>


<button

className="
p-2
rounded-lg
hover:bg-slate-800
transition
"

>

<Bell size={20}/>

</button>



<button

className="
p-2
rounded-lg
hover:bg-slate-800
transition
"

>

<Moon size={20}/>

</button>



</div>


</header>


);


}