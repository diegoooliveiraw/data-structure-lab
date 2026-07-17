interface ButtonProps {

  children: React.ReactNode;

  onClick?: () => void;

}


export function Button({
  children,
  onClick
}: ButtonProps) {


return (

<button

onClick={onClick}

className="
px-4
py-2
rounded-lg
bg-indigo-500
hover:bg-indigo-400
transition
font-medium
"

>

{children}

</button>

);


}