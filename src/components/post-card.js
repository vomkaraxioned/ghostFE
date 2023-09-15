"use client"
import Image from 'next/image';

export const PostCard = ({post})=> {


  const clickHandler = (slug)=> location.assign(`details?slug=${slug}`);

    return (
        <li title={post.title} key={post.id} className="basis-full relative md:basis-[47.5%] lg:basis-[30%] cursor-pointer" onClick={()=>clickHandler(post.slug)}>
        { post.visibility && <span className="absolute top-0 right-0 text-white bg-black z-10 py-1 px-2 shadow-white shadow-sm rounded-md">{post.visibility}</span> }
        { post.title && <p className="text-clip absolute bottom-0 px-1 bg-neutral-50 w-full bg-opacity-25">{post.title}</p> }
        {(post.feature_image || post.feature_image_alt || post.title) &&  <Image src={post.feature_image} alt={post?.feature_image_alt ? post?.feature_image_alt : post.title} width={2000} height={2000} className="object-fit object-cover w-full h-full"/>}
      </li>
    )
}