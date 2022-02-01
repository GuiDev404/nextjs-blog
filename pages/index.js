import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
 
export default function Home({ allPostsData  }) {
   
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='text-center mt-0 font-inter font-medium text-lg'> Hola, soy <span className="font-bold">Guido Rivoira</span>, y estoy aprendiendo <strong>Next.js</strong></p>
  
      </section>
      <section className='mt-10'>
        <h2 className='font-bold text-2xl font-prata'> Blog </h2>

        <div className='my-6'>
          {allPostsData.map(post=> 
            <article key={post.id} className='my-3'>
              <Link href={`/posts/${post.id}`}>
                <a className='text-lg inline-block mb-1 capitalize font-inter'>{post.title}</a>
              </Link>
              {/* <p className='text-gray-600 capitalize'> {new Date(post.date).toLocaleDateString(undefined,  { month: 'long', year: 'numeric' } )} </p> */}

              <Date dateString={post.date} />
            </article>
          )}
        </div>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

// export async function getStaticProps (){
//   const URL_POST = 'https://jsonplaceholder.typicode.com/posts';

//   const response = await fetch(URL_POST);
//   const data = await response.json();
//   const posts = data.slice(0, 5);

//   return {
//     props: {
//       posts
//     }
//   }
// }