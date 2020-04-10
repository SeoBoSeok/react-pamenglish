const path = require('path');
const {override, addWebpackAlias} = require('customize-cra');

module.exports = function(config, env) {
    return Object.assign(
        config,
        override(
            addWebpackAlias({
                '@pam/assets': path.resolve(__dirname, 'src/assets'),
                '@pam/components': path.resolve(__dirname, 'src/components'),
                '@pam/config': path.resolve(__dirname, 'src/config'),
                '@pam/containers': path.resolve(__dirname, 'src/containers'),
                '@pam/redux': path.resolve(__dirname, 'src/redux'),
                '@pam/lib': path.resolve(__dirname, 'src/library'),
                '@pam/ui': path.resolve(__dirname, 'src/UI'),
            })
        )(config, env)
    );
}