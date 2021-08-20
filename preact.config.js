export default (config, env, helpers) => {
    config.output.publicPath = "/light-dark-theme-demo";
    config.plugins.push(
        new helpers.webpack.DefinePlugin({
            PUBLIC_PATH: JSON.stringify(config.output.publicPath)
        })
    );
};
