/** @type {import('gatsby').GatsbyNode['onCreatePage']} */
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  const isEventPage = page.path === "/event/" || page.path === "/event";
  const isSubscriptionPage =
    page.path === "/subscription/" || page.path === "/subscription";

  if (isEventPage && !page.matchPath) {
    page.matchPath = "/event/:accessCode";
    createPage(page);
  }

  if (isSubscriptionPage && !page.matchPath) {
    page.matchPath = "/subscription/:accessCode";
    createPage(page);
  }
};
