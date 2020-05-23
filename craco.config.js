const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {'@btn-default-color': '#999999', '@text-color': '#a3a3a3', '@layout-header-background': '#f7f7f7', '@layout-body-background': '#fff', '@layout-sider-background': '#fff' },
          javascriptEnabled: true,
        },
      },
    },
  ],
};