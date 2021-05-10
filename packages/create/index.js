#!/usr/bin/env node

const { prompt } = require('enquirer');
const fs =require('fs');
const path = require('path');
const execa =require('execa');
const cwd=process.cwd();


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
        ]
    });
    const templateDir = path.join(__dirname, `template-${selectTemplate.ProjectTemplate}`)
    let root =path.join(cwd,projectName);
    console.log(`\nScaffolding project in ${projectName}.../创建${projectName}项目中...`)

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

    //此操作将后续提上日程。
   /* await execa('cd', [projectName]);
    await execa('npm', ['install']);*/

    const pkg = require(path.join(templateDir, `package.json`))

    pkg.name = projectName

    const pkgManager = /yarn/.test(process.env.npm_execpath) ? 'yarn' : 'npm'

    console.log(`\nDone. Now run/完毕。现在运行:\n`)
    if (root !== cwd) {
        console.log(`  cd ${path.relative(cwd, root)}`)
    }
    console.log(`  ${pkgManager === 'yarn' ? `yarn` : `npm install`}`)
    console.log(`  ${pkgManager === 'yarn' ? `yarn dev` : `npm run dev`}`)
    console.log()

       console.log(`         .,:,,,                                        .::,,,::.`)
       console.log(`       .::::,,;;,                                  .,;;:,,....:i:`)
       console.log(`       :i,.::::,;i:.      ....,,:::::::::,....   .;i:,.  ......;i.`)
       console.log(`       :;..:::;::::i;,,:::;:,,,,,,,,,,..,.,,:::iri:. .,:irsr:,.;i.`)
       console.log(`       ;;..,::::;;;;ri,,,.                    ..,,:;s1s1ssrr;,.;r,`)
       console.log(`       :;. ,::;ii;:,     . ...................     .;iirri;;;,,;i,`)
       console.log(`       ,i. .;ri:.   ... ............................  .,,:;:,,,;i:`)
       console.log(`       :s,.;r:... ....................................... .::;::s;`)
       console.log(`       ,1r::. .............,,,.,,:,,........................,;iir;`)
       console.log(`       ,s;...........     ..::.,;:,,.          ...............,;1s`)
       console.log(`      :i,..,.              .,:,,::,.          .......... .......;1,`)
       console.log(`     ir,....:rrssr;:,       ,,.,::.     .r5S9989398G95hr;. ....,.:s,`)
       console.log(`    ;r,..,s9855513XHAG3i   .,,,,,,,.  ,S931,.,,.;s;s&BHHA8s.,..,..:r:`)
       console.log(`   :r;..rGGh,  :SAG;;G@BS:.,,,,,,,,,.r83:      hHH1sXMBHHHM3..,,,,.ir.`)
       console.log(`  ,si,.1GS,   sBMAAX&MBMB5,,,,,,:,,.:&8       3@HXHBMBHBBH#X,.,,,,,,rr`)
       console.log(`  ;1:,,SH:   .A@&&B#&8H#BS,,,,,,,,,.,5XS,     3@MHABM&59M#As..,,,,:,is,`)
       console.log(` .rr,,,;9&1   hBHHBB&8AMGr,,,,,,,,,,,:h&&9s;   r9&BMHBHMB9:  . .,,,,;ri.`)
       console.log(` :1:....:5&XSi;r8BMBHHA9r:,......,,,,:ii19GG88899XHHH&GSr.      ...,:rs.`)
       console.log(` ;s.     .:sS8G8GG889hi.        ....,,:;:,.:irssrriii:,.        ...,,i1,`)
       console.log(` ;1,         ..,....,,isssi;,        .,,.                      ....,.i1,`)
       console.log(` ;h:               i9HHBMBBHAX9:         .                     ...,,,rs,`)
       console.log(` ,1i..            :A#MBBBBMHB##s                             ....,,,;si.`)
       console.log(` .r1,..        ,..;3BMBBBHBB#Bh.     ..                    ....,,,,,i1;`)
       console.log(`  :h;..       .,..;,1XBMMMMBXs,.,, .. :: ,.               ....,,,,,,ss.`)
       console.log(`   ih: ..    .;;;, ;;:s58A3i,..    ,. ,.:,,.             ...,,,,,:,s1,`)
       console.log(`   .s1,....   .,;sh,  ,iSAXs;.    ,.  ,,.i85            ...,,,,,,:i1;`)
       console.log(`    .rh: ...     rXG9XBBM#M#MHAX3hss13&&HHXr         .....,,,,,,,ih;`)
       console.log(`     .s5: .....    i598X&&A&AAAAAA&XG851r:       ........,,,,:,,sh;`)
       console.log(`     . ihr, ...  .         ..                    ........,,,,,;11:.`)
       console.log(`        ,s1i. ...  ..,,,..,,,.,,.,,.,..       ........,,.,,.;s5i.`)
       console.log(`         .:s1r,......................       ..............;shs,`)
       console.log(`         . .:shr:.  ....                 ..............,ishs.`)
       console.log(`             .,issr;,... ...........................,is1s;.`)
       console.log(`                .,is1si;:,....................,:;ir1sr;,`)
       console.log(`                   ..:isssssrrii;::::::;;iirsssssr;:..`)
       console.log(`                        .,::iiirsssssssssrri;;:.`)

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