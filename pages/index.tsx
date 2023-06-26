import type { NextPage } from "next"
import Head from "next/head"
import Items from "../assets/items.json"
import ReactMarkdown from "react-markdown"

const Home: NextPage = () => {
  const aclass = "p-1 hover:underline text-blue-500"

  return (
    <div className="p-8">
      <Head>
        <title>Stephan Cilliers</title>
        <meta
          name="description"
          content="wannabe cypherpunk. interested in permissionless protocols, cryptography, embedded systems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-16">
        <h1 className="flex justify-center text-3xl">stephan cilliers</h1>

        <div className="flex p-1 justify-center">
          <a
            className={aclass}
            href="mailto:stephan at stephancill dot co dot za"
            target="_blank"
            rel="noopener noreferrer"
            title="stephan at stephancill dot co dot za"
          >
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
            href="https://twitter.com/stephancill"
            title="@stephancill"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            className={aclass}
            href="https://fcast.me/stephancill"
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
                  <ReactMarkdown>{project.body}</ReactMarkdown>
                  {project.tags && <div className="text-gray-500">{project.tags.join(" • ")}</div>}
                </li>
              </div>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Home
