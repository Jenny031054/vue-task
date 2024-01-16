import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
console.log(createApp)
console.log(axios)
//先宣告url,path
const url = "https://ec-course-api.hexschool.io";
const path = "jenny031054"
 
    
createApp({
    data(){
        return{
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        signin(){
            
            axios.post(`${url}/v2/admin/signin`,this.user)
            .then((res)=>{
                console.log(res);
                //先解構，得到token和到期日
                const { token,expired } = res.data;
                console.log(token,expired);
                //存到瀏覽器的cookie
                document.cookie = `myToken=${token};expires=${new Date(expired)} ;path=/`;
                window.location = 'products.html';
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })
        }, 
    }
   
}).mount('#app');