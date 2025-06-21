const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot8x30x/",
            name: "springboot8x30x",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot8x30x/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "“智慧食堂”设计与实现"
        } 
    }
}
export default base
