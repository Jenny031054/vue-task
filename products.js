import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
createApp({
    data() {  // 資料狀態
        return {
            apiUrl:'https://vue3-course-api.hexschool.io/v2',
            apiPath:'jenny031054',
            //拿來裝點擊"查看產品細節"按鈕出現的商品
            temp:{ },
            //產品資料格式
            products: []
        }
      
        
    },
    methods:{
        checkAdmin(){
            // 確認登入狀態
            axios.post(`${this.apiUrl}/api/user/check`)
            .then((res)=>{
                console.log(res);
                this.getProducts()
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        getProducts(){
            axios.get(`${this.apiUrl}/api/${this.apiPath}/products`)
            .then((res)=>{
                console.log(res);
                this.products = res.data.products;
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        showProduct(item){
            // 只要把data的temp部分改成item(HTML的 表格區
            // v-for="(item) in products
            // 部分有定義)，點選看產品細節時會用觸發@click="temp = item" 行為
            // 將主體換成目前點擊到的item(代表跑回圈的當個資料)
            this.temp = item
        }

    },
    mounted(){
        // 存下token，下次不用重新登入也可以娶的資料

        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        // 預設行為存在headers
        axios.defaults.headers.common.Authorization = token;
        this.checkAdmin();
      
    }
    
    }).mount('#app');
