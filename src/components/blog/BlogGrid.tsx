"use client";

import { BlogCard } from "./BlogCard";

const posts=[

{

title:"Cómo elegir tu primer producto",

description:"Todo lo que debes saber para empezar.",

image:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",

slug:"primer-producto"

},

{

title:"Bienestar íntimo",

description:"Consejos para mejorar tu bienestar.",

image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1",

slug:"bienestar"

},

{

title:"Vida en pareja",

description:"Cómo fortalecer la confianza.",

image:"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",

slug:"parejas"

}

]

export function BlogGrid(){

return(

<section className="mx-auto max-w-7xl px-6 py-20">

<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

{posts.map(post=>(

<BlogCard

key={post.slug}

{...post}

/>

))}

</div>

</section>

)

}
