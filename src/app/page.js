import { api } from '@/services/api';
import { PostCard } from '@/components/post-card';


export default async function Home() {
  const posts = await api.posts.browse();

  return (
     <section>
     <h2 className="text-center mb-4 text-2xl font-bold">Posts</h2>
      <ul className="flex flex-col gap-y-5 md:flex-row gap-x-[5%] w-full">
        {
          posts.map((post,i)=>{
            return (
             <PostCard post={post} key={i}/>
            )
          })
        }
      </ul>
      </section>
  )
}
