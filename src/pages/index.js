import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <div>
      <main>
        <h1>Statically Generated Page</h1>
        <h1>Page information:</h1>
        <div>
          <p>Count: {data.rickmorty.characters.info.count}</p>
          <p>Prev: {data.rickmorty.characters.info.prev}</p>
          <p>Next: {data.rickmorty.characters.info.next}</p>
          <p>Pages: {data.rickmorty.characters.info.pages}</p>
        </div>
        <h1>Characters:</h1>
        <div>
          {data.rickmorty.characters.results.map((character) => {
            return (<div key={character.id}>
              <p>{character.name}</p>
              <GatsbyImage image={character.imageFile.childImageSharp.gatsbyImageData} alt={`${character.name}-photo`} />
            </div>)
          })}
        </div>
      </main>
    </div>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
export const query = graphql`
  {
    rickmorty {
      characters {
        info {
          count
          next
          pages
          prev
        }
        results {
          gender
          id
          name
          image
          imageFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
