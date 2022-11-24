/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const { createRemoteFileNode } = require("gatsby-source-filesystem")
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

// exports.onCreateNode = async ({ node, actions: { createNode, createNodeField }, createNoded, getCache }) => {
//   // if (node.internal.type === "GraphQLSource") {
//   //   console.log(node.children.length);
//   // }
//   console.log(node);
// }

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    RICKMORTY_Character: {
      imageFile: {
        type: "File",
        async resolve(source) {
          return await createRemoteFileNode({
            url: encodeURI(source.image ? source.image : "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      }
    },
  })
}
