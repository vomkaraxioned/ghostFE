import Image from "next/image";
import { api } from "@/services/api";

const Details = async({searchParams})=> {
  const {slug } = searchParams ;
  const data = await api.posts.read({slug:slug});
  //put your code here
      return (
       <section>
        {(data?.feature_image|| data?.feature_image_alt ||data?.title) && 
       <figure className="w-2/4 mx-auto my-4">
         <Image src={data?.feature_image} width={2000} height={2000} alt={data?.feature_image_alt ? data?.feature_image_alt : data?.title}/>
        </figure>}
        {data?.title && <h1 className="text-center text-2xl font-bold">{data?.title}</h1> }
        {data?.html && <div  dangerouslySetInnerHTML={{__html:data?.html}}/> }
       </section>
      )
}

export default Details;