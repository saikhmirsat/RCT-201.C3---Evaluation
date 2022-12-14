import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Project from './Project'
import Experience from './Experience'

export default function Home({ datas }) {
  return (
    <div >
      <Head>
        <title>Saikh-Mirsat-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <img src={datas.avatar_url} alt="" />
        <h1>{datas.name}</h1>
        <p>{datas.login}</p>
        <h4>{datas.bio}</h4>
        <button><a href="https://drive.google.com/file/d/1imBTexe0OSVvVlGaFq7dljd8kThFy8Ks/view?usp=sharing">Resume</a></button>
        <button><a href="https://github.com/saikhmirsat">Follow</a></button>
      </main>
      <Experience />
    </div>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/saikhmirsat`)
  const data = await res.json()
  console.log(data)
  return {
    props: {
      datas: data,
    }
  }
}
