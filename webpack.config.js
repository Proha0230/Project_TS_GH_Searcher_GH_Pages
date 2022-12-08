require("@babel/polyfill");
// для корректного пути
const path = require("path");
// для HTML файлов 
const HtmlWebpackPlugin = require("html-webpack-plugin");
// для очистки старых файлов при новой успешной сборки
const {CleanWebpackPlugin} = require("clean-webpack-plugin");



module.exports = {
    entry: {
        main: "./src/index.tsx"
    },
    // Для отслеживания сорс мапов в тайп скрипте для того чтоб он видел связь
    devtool: 'inline-source-map',
    output: {
        // для создания уникального имени с хэшированием
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname, "dist")
    },
    // установка devServer webpack
    devServer:{
        port:3000
    },
    plugins: [
        // для HTML файлов
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
        // для очистки старых файлов при новой успешной сборки
        new CleanWebpackPlugin()
    ],
    module: {
        rules:[
            // проверка TypeScript файлов
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                
                    loader: "babel-loader",
                    options:{
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"

                        ]
                    }
                
            },
            // для CSS файлов
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // для SASS файлов
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // для файлов картинок ico/png/jpg и т.д
            {
                test: /\.(ico|png|jpe?g|gif)$/i,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            utils: path.resolve(__dirname, 'src/utils'),
            types: path.resolve(__dirname, 'src/types'),
            assets: path.resolve(__dirname, 'src/assets'),
            Button: path.resolve(__dirname, 'src/components/Button'),
            Container: path.resolve(__dirname, 'src/components/Container'),
            InfoItem: path.resolve(__dirname, 'src/components/InfoItem'),
            mock: path.resolve(__dirname, 'src/components/mock'),
            Search: path.resolve(__dirname, 'src/components/Search'),
            TheHeader: path.resolve(__dirname, 'src/components/TheHeader'),
            ThemeSwitcher: path.resolve(__dirname, 'src/components/ThemeSwitcher'),
            UserCard: path.resolve(__dirname, 'src/components/UserCard'),
            UserInfo: path.resolve(__dirname, 'src/components/UserInfo'),
            UserStat: path.resolve(__dirname, 'src/components/UserStat'),
            UserTitle: path.resolve(__dirname, 'src/components/UserTitle'),
            SearchIcon: path.resolve(__dirname, 'src/assets/icon-search.svg'),
        }
    }

}