import {
  Sidebar
} from "./Sidebar";


import {
  Header
} from "./Header";



interface AppLayoutProps {

children: React.ReactNode;

}



export function AppLayout({
children
}:AppLayoutProps){



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

{children}


</main>



</div>



</div>


);


}