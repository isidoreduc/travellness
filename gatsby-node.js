// 'creating pages programatically' - see gatsby doc for

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allSlugs: allContentfulInterviews {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allSlugs.edges.forEach(({ node }) =>
    createPage({
      path: `/tours/${node.slug}`,
      component: path.resolve('./src/templates/template.js'),
      context: {
        singleSlug: node.slug,
      },
    })
  );
};
