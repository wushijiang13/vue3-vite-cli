#!/usr/bin/env node

const { prompt } = require('enquirer');
const fs =require('fs');
const path = require('path');
const cwd=process.cwd();
const execa=require('execa');

async function  init() {

    const renameFiles = {
        _gitignore: '.gitignore'
    }

    let projectname = await prompt({
        type: 'input',
        name: 'projectName',
        message:'projectName/项目名',
        initial:"vue3-vite-cli",
    })
    const projectName=await checkProjectName(projectname.projectName)

    let selectTemplate =  await prompt({
        type: 'select',
        name: 'ProjectTemplate',
        message: 'Project-template/选择项目模板',
        initial:"vue3-vite-cli",
        choices: [
            { name: 'vue3-ts-initial'},
            { name: 'webpack-protist-js'},
        ]
    });
    const templateDir = path.join(__dirname, `template-${selectTemplate.ProjectTemplate}`)
    let root =path.join(cwd,projectName);
    console.log(`\n  Scaffolding project in ${projectName}.../创建${projectName}项目中...`)

    emptyDir(root);

    const write = (file, content) => {
        const targetPath = renameFiles[file]
            ? path.join(root, renameFiles[file])
            : path.join(root, file)
        if (content) {
            fs.writeFileSync(targetPath, content)
        } else {
            copy(path.join(templateDir, file), targetPath)
        }
    }

    copy(path.join(templateDir), root);

    const pkg = require(path.join(templateDir, `package.json`))

    pkg.name = projectName

    const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm'

    console.log(`\nDone. Now run/完毕。现在运行:`)

    console.log(`\nDownloading dependencies.../正在下载依赖...`)

    let downShell=pkgManager === 'yarn' ? '' : 'install';
    console.log(`\nrunning/正在运行:${pkgManager+" "+downShell}` );
    const downResult = await execa(`${pkgManager}`, [downShell],{cwd:path.relative(cwd, root),stdio:['inherit']});
    console.log(downResult.stdout);
    if(downResult.failed){
        console.error('\nFailed to download dependencies/下载依赖失败 ');
        console.log(`  ${pkgManager === 'yarn' ? `yarn` : `npm install`}`)
    }else{
        console.log(`Depend on the download is complete!🥳/依赖下载完成!🥳`)
    }

    if (root !== cwd) {
        console.log(`\ncd ${path.relative(cwd, root)}`)
    }

    console.log(`${pkgManager === 'yarn' ? `yarn dev` : `npm run dev`}`)

    console.log(`\nFrom Wu/来自吴~`)

}

function copy(src, dest) {
    const stat = fs.statSync(src)
    if (stat.isDirectory()) {
        copyDir(src, dest)
    } else {
        fs.copyFileSync(src, dest)
    }
}

async function checkProjectName(projectName) {
    const packageNameRegExp = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/
    if (packageNameRegExp.test(projectName)) {
        return projectName
    } else {
        const suggestedPackageName = projectName
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/^[._]/, '')
            .replace(/[^a-z0-9-~]+/g, '-')

        /**
           console.log(`@type {{ inputPackageName: string }}
         */
        const { inputPackageName } = await prompt({
            type: 'input',
            name: 'inputPackageName',
            message: `Package name:`,
            initial: suggestedPackageName,
            validate: (input) =>
                packageNameRegExp.test(input) ? true : 'Invalid package.json name'
        })
        return inputPackageName
    }
}

function copyDir(srcDir, destDir) {
    fs.mkdirSync(destDir, { recursive: true })
    for (const file of fs.readdirSync(srcDir)) {
        const srcFile = path.resolve(srcDir, file)
        const destFile = path.resolve(destDir, file)
        copy(srcFile, destFile)
    }
}

function emptyDir(dir) {
    if (!fs.existsSync(dir)) {
        return
    }
    for (const file of fs.readdirSync(dir)) {
        const abs = path.resolve(dir, file)
        if (fs.lstatSync(abs).isDirectory()) {
            emptyDir(abs)
            fs.rmdirSync(abs)
        } else {
            fs.unlinkSync(abs)
        }
    }
}

init();