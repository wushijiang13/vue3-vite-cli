import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default () => {
    const VITE_ROOT_URL=process.env.VITE_ROOT_URL;
    return {
            root:VITE_ROOT_URL != undefined ? VITE_ROOT_URL : '', //根据注入的环境变量判断项目加载启动url
            plugins: [
                vue()
            ],
            base:"./",
        }
}

