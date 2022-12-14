import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar'
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';
import BlogBanner from "../components/BlogBanner"
import Footer from '../components/Footer';

interface Props {
  posts: [Post];
}

function blog({posts}: Props) {
  // console.log(posts)
  return (
    <div>
         <Head>
          <title>La Laundry - Blogs</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/img/laundry-logo-white-small.png" />

        </Head>

        <Navbar navLogo='/img/Lalundry-logo-white.png'  headerBGColor="transparent" headerTextColor="white" />
      
          <BlogBanner />
        

        {/* posts */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 p-8 md:p-6 xl:max-w-[1920px] mx-auto relative -top-20'>
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className='border rounded-lg group overflow-hidden mt-5 bg-gradient-to-t from-white to-blue-400 px-4'>
                <img className='h-70 w-full object-cover group-hover:scale-105 transition duration-200 ease-in-out cursor-pointer' src={urlFor(post.mainImage).url()!}  alt="Posts image not available" />
                <div className='flex justify-between p-5 bg-white hover:shadow-md'>
                  <div>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <p className='text-xs '>{post.description} by <span className='text-gray-500'>{post.author.name}</span> </p>
                  </div>

                  <img className='h-12 w-12 rounded-full border border-blue-500' src={urlFor(post.author.image).url()!} alt="" />
                </div>
              </div>
            </Link>
          ))}

        </div>


        <Footer />

    </div>
  )
}

export default blog


export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    _createdAt,
    slug,
    author -> {
    name,image
    },
    mainImage,
    description
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
}

