interface BadgeProps {

children: React.ReactNode;

}


export function Badge({
children
}:BadgeProps){


return (

<span

className="
px-3
py-1
rounded-full
text-xs
bg-indigo-500/20
text-indigo-300
"

>

{children}

</span>


);


}