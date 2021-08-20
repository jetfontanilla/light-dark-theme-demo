export default (config, env, helpers) => {
    config.output.publicPath = process.env.NODE_ENV == "production" ? "/light-dark-theme-demo/" : "/";
    config.plugins.push(
        new helpers.webpack.DefinePlugin({
            PUBLIC_PATH: JSON.stringify(config.output.publicPath),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        })
    );
};
