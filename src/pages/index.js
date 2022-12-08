import * as React from "react";
import * as styles from '../styles/Index.module.css';
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <div>
      <main>
        <h1>Statically Generated Page</h1>
        {/* <h1>Page information:</h1>
        <div>
          <p>Count: {data.rickmorty.characters.info.count}</p>
          <p>Prev: {data.rickmorty.characters.info.prev}</p>
          <p>Next: {data.rickmorty.characters.info.next}</p>
          <p>Pages: {data.rickmorty.characters.info.pages}</p>
        </div> */}
        <h1>Rick and Morty Characters:</h1>
        <div className={styles.container}>
          {data.rickmorty.characters.results.map((character) => {
            return (
              <div className={styles.card} key={character.id}>
                <GatsbyImage image={character.imageFile.childImageSharp.gatsbyImageData} alt={`${character.name}-photo`} />
                <h1>{character.name}</h1>
              </div>
            );
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
