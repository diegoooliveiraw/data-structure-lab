import {
ArrowRight
} from "lucide-react";


interface StructureCardProps{

title:string;

description:string;

link:string;

}



export function StructureCard({

title,

description,

link

}:StructureCardProps){



return (

<div

className="
bg-slate-900
border
border-slate-800
rounded-xl
p-6
hover:border-indigo-500
transition
"

>


<h3
className="
text-xl
font-semibold
"
>

{title}

</h3>



<p

className="
text-slate-400
mt-2
"

>

{description}

</p>



<a

href={link}

className="
mt-5
inline-flex
items-center
gap-2
text-indigo-400
"

>

Explore

<ArrowRight size={16}/>

</a>


</div>


);


}