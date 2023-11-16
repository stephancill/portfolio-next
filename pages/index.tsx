import type { NextPage } from "next"
import Head from "next/head"
import Items from "../assets/items.json"
import ReactMarkdown from "react-markdown"

const Home: NextPage = () => {
  const aclass = "p-1 hover:underline text-blue-500"

  return (
    <div className="flex justify-center">
      <Head>
        <title>Stephan Cilliers</title>
        <meta
          name="description"
          content="electrical & computer engineering graduate interested in cryptography, permissionless protocols, and embedded
          systems"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="max-w-xl p-4">
        <h1 className="flex justify-center text-3xl">stephan cilliers</h1>

        <div className="flex justify-center text-center">
          ex-founder, electrical & computer engineer interested in cryptography, permissionless protocols, and embedded
          systems
        </div>

        <div className="flex p-1 justify-center">
          <a className={aclass} href="mailto:stephan@stephancill.co.za">
            email
          </a>
          <a
            className={aclass}
            href="https://github.com/stephancill"
            title="stephancill"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className={aclass}
            href="https://linkedin.com/in/stephancill"
            title="Stephan Cilliers"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            className={aclass}
            href="https://twitter.com/stephancill"
            title="@stephancill"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            className={aclass}
            href="https://warpcast.com/stephancill"
            title="@stephancill"
            target="_blank"
            rel="noopener noreferrer"
          >
            farcaster
          </a>
        </div>

        <section>
          <h2 className="text-2xl">projects</h2>
          <ul>
            {Items.Projects.map((project, index) => (
              <div key={index}>
                <li key={index} className="py-2">
                  <div className="flex">
                    <span className="flex-grow font-bold">
                      {project.link ? (
                        <a className="" href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.heading}
                        </a>
                      ) : (
                        <div>{project.heading}</div>
                      )}{" "}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  <ReactMarkdown linkTarget={"_blank"}>{project.body}</ReactMarkdown>
                  {project.tags && <div className="text-gray-500">{project.tags.join(" • ")}</div>}
                </li>
              </div>
            ))}
          </ul>
        </section>
        <footer className="flex justify-center mt-2">Stephan Cilliers &copy; {new Date().getFullYear()}</footer>
      </main>
    </div>
  )
}

export default Home
