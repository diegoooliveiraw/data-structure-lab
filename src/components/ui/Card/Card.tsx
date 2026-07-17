interface CardProps {

children: React.ReactNode;

}


export function Card({
children
}:CardProps){


return (

<div

className="
bg-slate-800
border
border-slate-700
rounded-xl
p-6
shadow-lg
"

>

{children}

</div>

);


}