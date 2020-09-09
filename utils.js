const fs = require('fs');

const utils = {
    init() {
        let plugParam = this.getPlugParam();
        if (plugParam.mode) {
            return false;
        }
        this.writePackageName(plugParam);
    },
    /**
     *获取插件名称
     *
     * @return 插件名称 
     */
    getPlugParam() {
        let plugName = null;
        //获取npm传递参数
        let args = process.argv;
        if (args && args.length) {
            return {
                name: this.getNpmParam(args, "--name"),
                description: this.getNpmParam(args, "--description"),
                keywords: this.getNpmParam(args, "--keywords"),
                author: this.getNpmParam(args, "--author"),
                mode: this.getNpmParam(args, "--mode")
            }
        } else {
            console.error('组件参数错误');
        }
        return plugName;
    },
    /**
     *获取npm参数
     * @param {*} args 参数数组
     * @param {*} paramName 参数名称
     * @return {*} 
     */
    getNpmParam(args, paramName) {
        let paramValue = null;
        let index = args.findIndex(t => {
            return t == paramName;
        });
        index > -1 ? paramValue = args[index + 1] : null;
        return paramValue;
    },
    /**
     *写入package name属性值，多个插件将会以name为命名，且name唯一
     *
     * @param {*} plugParam {name,description,keywords,author}
     */
    writePackageName({ name, description, keywords, author }) {
        let mainPath = './package.json';
        let fileData = fs.readFileSync(mainPath);
        if (fileData) {
            fileData = JSON.parse(fileData.toString());
            fileData['keywords'] = [];
            fileData['name'] = name !== 'sugar-ui' ? 'sugar-'.concat(name) : name;
            fileData['main'] = `./dist/${name}.common.js`;
            fileData['description'] = description;
            fileData['keywords'].push(keywords);
            fileData['author'] = author;
            fileData['version'] = this.setVersion(this.setVersion(fileData['version']));
            fs.writeFileSync(mainPath, JSON.stringify(fileData, null, '\t'));
        } else {
            console.error('读取文件内容失败');
        }
    },
    /**
     *设置版本号
     *
     * @param {*} currentVersion
     * @return 版本名称
     */
    setVersion(currentVersion) {
        let version = [0, 0];
        let arry = currentVersion.split(".");
        let lastElement = arry[arry.length - 1];
        lastElement++;
        version.push(lastElement);
        return version.join('.');
    }
};


utils.init();
module.exports = utils;