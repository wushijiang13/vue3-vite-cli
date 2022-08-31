// 1.将同级dist文件压缩成zip包并复制到粘贴板
let fs = require("fs");//获取文件系统模块，负责读写文件
let path = require("path");//工具模块，处理文件路径的小工具
let JSZIP = require("jszip");
let zip = new JSZIP();

const targetUrl=path.resolve('outputs');
const PACKAGE_NAME='template-vue3-google-extensions';

//读取目录及文件
async function readDir(obj, nowPath) {
    let outputs = fs.statSync(targetUrl,{throwIfNoEntry:false});
    if (!outputs) {
        fs.mkdirSync(targetUrl,{recursive:true});
    }
    let files = fs.readdirSync(nowPath);//读取目录中的所有文件及文件夹（同步操作）
    files.forEach(function (fileName) {//遍历检测目录中的文件
        let fillPath = nowPath + "/" + fileName;
        let file = fs.statSync(fillPath);//获取一个文件的属性
        if (file.isDirectory()) {//如果是目录的话，继续查询
            let dirlist = zip.folder(fileName);//压缩对象中生成该目录
            readDir(dirlist, fillPath);//重新检索目录文件
        } else {
            obj.file(fileName, fs.readFileSync(fillPath));//压缩目录添加文件
        }
    });
}

//开始压缩文件
function startZIP() {
    var currPath = __dirname;//文件的绝对路径 当前当前js所在的绝对路径
    var targetDir = path.join(currPath, `../${PACKAGE_NAME}`);
    readDir(zip, targetDir);
    zip.generateAsync({//设置压缩格式，开始打包
        type: "nodebuffer",//nodejs用
        compression: "DEFLATE",//压缩算法
        compressionOptions: {//压缩级别
            level: 9
        }
    }).then(function (content) {
        fs.writeFileSync(`${targetUrl}/${PACKAGE_NAME}.zip` , content, "utf-8");//将打包的内容写入
        console.log("压缩成功");
    });
}

startZIP();
