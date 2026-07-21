"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props{
    title:string;
    description:string;
    image:string;
    slug:string;
}

export function BlogCard({
title,
description,
image,
slug
}:Props){

return(

<Link href={`/blog/${slug}`}>

<div
className="
group
overflow-hidden
rounded-3xl
border
border-white/10
bg-zinc-950
transition
hover:border-pink-500
"
>

<img
src={image}
className="
h-72
w-full
object-cover
transition
duration-700
group-hover:scale-110
"
/>

<div className="p-6">

<h3 className="text-2xl font-bold text-white">

{title}

</h3>

<p className="mt-3 text-zinc-400">

{description}

</p>

<div className="mt-6 flex items-center gap-2 text-pink-400">

Leer artículo

<ArrowRight size={18}/>

</div>

</div>

</div>

</Link>

)

}
