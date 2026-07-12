export default function StatusBadge({text}){

return(

<div
className="flex items-center gap-2"
>

<div
className="h-3
w-3
rounded-full
bg-green-400
animate-pulse"
/>

<span
className="font-semibold
text-green-400"
>

{text}

</span>

</div>

)

}