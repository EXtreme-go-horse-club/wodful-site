const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/event/)) {
    createPage({
      path: "/event",
      matchPath: "/event/:accessCode",
      component: path.resolve("src/pages/event.tsx"),
    });
  }

  if (page.path.match(/^\/subscription/)) {
    createPage({
      path: "/subscription",
      matchPath: "/subscription/:accessCode",
      component: path.resolve("src/pages/subscription.tsx"),
    });
  }
};
