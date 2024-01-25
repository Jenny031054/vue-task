import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// 要先宣告，方便可以在不同的作用域底下去使用，以免下面程式碼會因為找不到值而出錯
let productModal = null;
let delProductModal = null;
const apiUrl='https://vue3-course-api.hexschool.io/v2';
const apiPath='jenny031054';

// app => Vue 實體
const app = createApp({
    data() {
    return {
        // apiUrl:'https://vue3-course-api.hexschool.io/v2',
        // apiPath:'jenny031054',
        isNew:false,
        products:[],
        // 先建立imagesUrl防止讀資料時找不到抱錯
        productTemp:{
           "imagesUrl": []
        },
        pagination:{}
    }
    },
    mounted(){
        // 存下token，下次不用重新登入也可以娶的資料
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        // 預設行為存在headers
        axios.defaults.headers.common.Authorization = token;
        this.checkAdmin();
        this.getData();
      
    },
    methods:{
        checkAdmin(){
            // 確認登入狀態
            axios.post(`${apiUrl}/api/user/check`)
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
                this.productTemp ={
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
        getData( page=1 ){
          // 設定網址參數page，預設是第1頁
          let url = `${apiUrl}/api/${apiPath}/admin/products?page=${page}`;
          axios.get(url)
          .then((res)=>{
            const { products , pagination } = res.data
            this.products = products;
            this.pagination = pagination;

          })
          .catch((err)=>{
            alert(err.response.data.message);
            window.location= 'login.html';
          })
        },
    }
    

});
// 商品新增&編輯元件
app.component('productModal',{
  // 這邊的props product是為了編輯狀態需要從外部帶入原本的資料用
  // isNew 是從使用者點擊開啟時就會帶進來的參數，因為是從外部船內部需要props，用來判斷這個modal要怎麼後續操作
    props:["product","isNew"],
    data(){
        return{
          
        }
    },
      // 這個生命週期的時候可以取得網頁DOM元素，所以在這裡先抓到modal，接著界可以用他的變數名稱操控
    mounted(){
        // 建立productModal
        productModal = new bootstrap.Modal(document.getElementById('productModal'), {
            keyboard: false,
            backdrop: 'static',
        });   
    },
    methods: {
      updateProduct(){
       
            // 用let 因為下面還要判斷這次的狀況是要新增還是修改，
            let url = `${apiUrl}/api/${apiPath}/admin/product`;
            let http = "post";
            // 判斷是否為新增商品，就要改網址路徑和http狀態
            if(this.isNew === false){
                //而且編輯確認按鈕要帶上產品id
                url= `${apiUrl}/api/${apiPath}/admin/product/${this.product.id}` ;
                http = "put"
            };
            // 判斷完就可以發請求，因為axios是個物件，用.post、.put發送請求涵式，也可以用括弧記法[]
            axios[http](url,{ data: this.product } )
            .then((res)=>{
                alert(res.data.message);
                // 關閉modal後取得資料並且渲染到畫面上
                this.hideModal();
                // this.getData();
                // 這邊內部元件資料更新，同時也要更新到外部去，所以要用emit事件傳遞更新後的狀態
                this.$emit('updateData');
            })
            .catch((err)=>{
                console.log(err)
            })
      },
      showModal(){
        productModal.show();
      },

      hideModal(){
        productModal.hide();
      },
      createImages() {
        this.product.imagesUrl = [];
        this.product.imagesUrl.push('');
      },
  },
    template:
    /*html*/
    `
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-2">
                    <!-- 主要圖片 -->
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">輸入主要圖片網址</label>
                      <input 
                        v-model="product.imageUrl"
                        type="text" class="form-control"
                        placeholder="請輸入圖片連結"
                        id="imageUrl">
                      <img class="img-fluid" :src="product.imageUrl" >
                    </div>
                    <!-- END 主要圖片 -->
                    <!-- 多圖新增 -->
                    <h5 class="mb-3">多圖新增</h5>
                    <div v-if="Array.isArray(product.imagesUrl)">
                        <!-- 這邊是處理多圖新增，因為要存的方式是陣列，所以 -->
                        <div class="mb-1" v-for="(image,key) in product.imagesUrl" :key="key">
                          <div class="mb-3">
                            <label :for="key" class="form-label">輸入圖片網址</label>
                            <input :id="key" 
                             v-model="product.imagesUrl[key]"
                             type="text" class="form-control" 
                             placeholder="請輸入圖片連結">
                          </div>
                         <img class="img-fluid" :src="image">
                        </div>
                        <!-- 判斷多張圖片的陣列長度是否為0或 -->
                        <div  v-if="!product.imagesUrl.length || product.imagesUrl[product.imagesUrl.length - 1]">
                            <button  
                            @click="product.imagesUrl.push('')"
                            class="btn btn-outline-primary btn-sm d-block w-100">
                            新增圖片
                            </button>
                        </div>
                        <div v-else>
                            <button 
                            @click="product.imagesUrl.pop()"
                            class="btn btn-outline-danger btn-sm d-block w-100">
                            刪除圖片
                            </button>
                        </div>
                    </div>
                    <div v-else>
                        <button class="btn btn-outline-primary btn-sm d-block w-100" @click="createImages">
                          新增圖片
                        </button>
                    </div>
                  
                  
                </div>
                
                
                </div>
                <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input v-model="product.title" id="title" type="text" class="form-control" placeholder="請輸入標題">
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input v-model="product.category" id="category" type="text" class="form-control"
                           placeholder="請輸入分類">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <input v-model="product.unit" id="unit" type="text" class="form-control" placeholder="請輸入單位">
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input v-model="product.origin_price" id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input  v-model="product.price" id="price" type="number" min="0" class="form-control"
                           placeholder="請輸入售價">
                  </div>
                </div>
                <hr>

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea v-model="product.description" id="description" type="text" class="form-control"
                            placeholder="請輸入產品描述">
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea v-model="product.content"  id="content" type="text" class="form-control"
                            placeholder="請輸入說明內容">
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input v-model="product.is_enabled"  id="is_enabled" class="form-check-input" type="checkbox"
                    :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
            
              <button @click="updateProduct" type="button" class="btn btn-primary">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
      
    </div>
    `,
    
  
});
// 商品刪除元件
app.component('delProductModal',{
    props:["delItem"],
    data(){
        return {

        }
    },
    mounted(){
        delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
            keyboard: false,
            backdrop: 'static',
        });
    },
    methods:{
      delProduct(){
        let url =  `${apiUrl}/api/${apiPath}/admin/product/${this.delItem.id}`;
        axios.delete(url)
          .then((res)=>{
            alert(res.data.message);
            this.hideModal();
            this.$emit('delete')
          })
          .catch((err)=>{
            alert(err.response.data.message)
          })
      },
      hideModal(){
        delProductModal.hide();
      }
    },
    template:
    /*html */
    `
    <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
           aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{ delItem.title }}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button 
              @click="delProduct"
              type="button" class="btn btn-danger">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    `
});
// 頁數元件
app.component('pagination',{
    props:["pages"],
    methods:{
      emitPages(item){
        this.$emit('getPage',item)
      }
    },
    template:/*html*/ 
    `
      <nav aria-label="Page navigation example">
        <ul class="pagination">
        
          <li
            class="page-item"
            :class="{'disabled': pages.current_page === 1}"
          >
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="emitPages(pages.current_page - 1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          
          <li
            v-for="(item, index) in pages.total_pages"
            :key="index"
            class="page-item"
            :class="{'active': item === pages.current_page}"
          >
            <a
              class="page-link"
              href="#"
              @click.prevent="emitPages(item)"
            >{{ item }}</a>
          </li>
          <li>
            <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="emitPages(pages.current_page +1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
          </li>
        </ul>
      </nav>
    `,
   
});
app.mount('#app');

