import React from 'react'

export default function project({ datas }) {
    return (
        <div>
            <h1>Projects</h1>
            <div className='card-main-con'>
                {
                    // console.log(datas)

                    datas && datas.map((ele) => <a href={ele.html_url} key={ele.id} className='cards'>
                        <h1>{ele.name}</h1>

                        <span>start</span><p>{ele.stargazers_count}</p>
                        <span>Fork</span> <p>{ele.forks_count}</p>
                        <span>Language:-</span><p>{ele.language}</p>
                    </a>)

                }

            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.github.com/search/repositories?q=user:saikhmirsat+fork:true&sort=updated&per_page=10&type=Repositories`)
    const data = await res.json()
    const arr = data.items
    return {
        props: {
            datas: arr,
        }
    }
}
