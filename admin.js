import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

let productModal = null;
let delProductModal = null;

// app => Vue 實體
createApp({
    data() {
    return {
        apiUrl:'https://vue3-course-api.hexschool.io/v2',
        apiPath:'jenny031054',
        isNew:false,
        products:[],
        // 先建立imagesUrl防止讀資料時找不到抱錯
        productTemp:{
           "imagesUrl": []
        }
    }
    },
    mounted(){
        // 建立productModal
        productModal = new bootstrap.Modal(document.getElementById('productModal'), {
            keyboard: false
          });
      
        delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
            keyboard: false
          });
        // 存下token，下次不用重新登入也可以娶的資料

        const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        // 預設行為存在headers
        axios.defaults.headers.common.Authorization = token;
        this.checkAdmin();
        this.getData()
      
    },
    methods:{
        checkAdmin(){
            // 確認登入狀態
            axios.post(`${this.apiUrl}/api/user/check`)
            .then((res)=>{
                console.log(res);
               
            })
            .catch((err)=>{
                alert(err.response.data.message)
            })
        },
        openModal(status,item){
            // 這邊開啟視窗時會有三種狀態，
            // 1. 新增商品 2.編輯商品 3. 刪除商品
            if(status === "new" ){
                this.productTemp={
                    imagesUrl: [],
                };
                this.isNew = true;
                productModal.show()
            }
            else if(status === "edit"){
                this.productTemp = {...item};
                this.isNew = false;
                productModal.show()
            }
            else if(status === "delete"){
                this.productTemp = {...item};
                delProductModal.show();
            }

            
        },
        getData(){
          const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/all`;
          axios.get(url)
          .then((res)=>{
            console.log(res);
            this.products = res.data.products;
          })
          .catch((err)=>{
            alert(err.response.data.message)
          })
        },
        // 叫做更新圖片，因為不只有加入的行為，還會有編輯商品資料的行為
        updateProduct(){
            // 用let 因為下面還要判斷這次的狀況是要新增還是修改，
            let url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
            let http = "post";
            // 判斷是否為新增商品，就要改網址路徑和http狀態
            if(this.isNew === false){
                //而且編輯確認按鈕要帶上產品id
                url= `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.productTemp.id}` ;
                http = "put"
            };
            // 判斷完就可以發請求，因為axios是個物件，用.post、.put發送請求涵式，也可以用括弧記法[]
            axios[http](url,{ data: this.productTemp } )
            .then((res)=>{
                console.log(res);
                // 關閉modal後取得資料並且渲染到畫面上
                productModal.hide();
                this.getData()
            })
            .catch((err)=>{
                alert(err.response.data.message)
            })
        },
        delProduct(){
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.productTemp.id}`;
            axios.delete(url)
            .then((res)=>{
                console.log(res);
                // 關閉modal後取得資料並且渲染到畫面上
                delProductModal.hide()
                this.getData();

            })
            .catch((err)=>{
                alert(err.response.data.message)
            })
        },
        createImg(){
            // 將多張照片的
            this.productTemp.imagesUrl = [];
            this.productTemp.imagesUrl.push('');
        }
    }
    

}).mount('#app');

