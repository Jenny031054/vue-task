console.log('hello world');
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// 讀取外部的資源
VeeValidateI18n.loadLocaleFromURL('./zh_TW.json');


Object.keys(VeeValidateRules).forEach(rule => {
  if (rule !== 'default') {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
  }
});
// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW'),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});



// 測試成功！
// 建立全域變數
const apiUrl = 'https://ec-course-api.hexschool.io';
const apiPath = 'jenny031054';


// 建立modal元件
// import productDetailModal from './productDetailModal.js';
// const productDetailModal = {
//     props:[ 'tempProduct','addToCart' ],
//     data(){
//         return {
//             productDetailModal:null,
//             qty: 1
//         }
//     },
//     watch:{
//       tempProduct(){
//         this.qty = 1;
//         // 監聽tempProduct的值的變化，如果有變動的話就將qty屬性改成 1 (類似初始化的感覺)
//         // 但是修改一個品項 跳出去之後再點回來qty 還是會維持原本的數值，因為tempProduct沒有變動
//       }
      
//     },
//     methods:{
//         openModal(){
//             this.productDetailModal.show()
//         },
//         closeModal(){
//             this.productDetailModal.hide()
//         }
        
//     },
//     mounted(){
//         this.productDetailModal = new bootstrap.Modal(this.$refs.productDetailModal);
//     },
//     template:
//     /*html*/
//     `
//     <div class="modal fade" 
//             id="productModal" tabindex="-1" role="dialog"
//             aria-labelledby="exampleModalLabel" aria-hidden="true" 
//             ref="productDetailModal"
//           >
//               <div class="modal-dialog modal-xl" role="document">
//                 <div class="modal-content border-0">
//                   <div class="modal-header bg-dark text-white">
//                     <h5 class="modal-title" id="exampleModalLabel">
//                       <span>{{ tempProduct.title }}</span>
//                     </h5>
//                     <button type="button" class="btn-close"
//                             data-bs-dismiss="modal" aria-label="Close"></button>
//                   </div>
//                   <div class="modal-body">
//                     <div class="row">
//                       <div class="col-sm-6">
//                         <img  :src="tempProduct.imageUrl" class="img-fluid"  alt="">
//                       </div>
//                       <div class="col-sm-6">
//                         <span class="badge bg-primary rounded-pill">{{ tempProduct.category }}</span>
//                         <p>商品描述：{{tempProduct.description }}</p>
//                         <p>商品內容：{{ tempProduct.content}}</p>
//                         <div v-if="tempProduct.origin_price === tempProduct.price " class="h5" >{{ tempProduct.price  }} 元</div>
//                         <del class="h6" >原價 {{tempProduct.origin_price }} 元</del>
//                         <div class="h5" >現在只要 {{ tempProduct.price }} 元</div>
//                         <div>
//                           <div class="input-group">
//                             <select class="form-select" v-model="qty">
//                               <option  
//                                v-for="i in 20" :value="i ">{{ i }}</option>
//                             </select>  
//                             <button type="button" class="btn btn-primary"
//                                @click="addToCart(tempProduct.id,qty)"
//                             >加入購物車</button>
//                           </div>
//                         </div>
//                       </div>
//                       <!-- col-sm-6 end -->
//                     </div>
//                   </div>
//                 </div>
//               </div>
//       </div>
    
//     `
// }
import productDetailModal from './productDetailModal.js'


// 建立vue初始環境
const app = Vue.createApp({
    components:{ productDetailModal },
    data(){
        return {
            tempProduct:{},
            productList:[],
            carts:{},
            tempCart:{},
            errors:'格式錯誤',
            user:{},
            status:{
              addToCartLoading:'',
              delCartLoading:''
            }
        }
    },
    mounted(){
        this.getProduct();
        this.getCartData()
        
    },
    
    methods:{
        getProduct(){
            axios.get(`${apiUrl}/v2/api/${apiPath}/products`)
            .then((res)=>{
                console.log( res.data);
                this.productList = res.data.products
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        openDetailModal(product){
          this.tempProduct = product;
          this.$refs.productDetailModal.openModal()

        },
        addToCart(productId , qty = 1){
          const order = {
            "data": {
              "product_id": productId,
              "qty": qty
            }
          };
          this.status.addToCartLoading = productId ;
          axios.post(`${apiUrl}/v2/api/${apiPath}/cart` , order)
            .then((res)=>{
                console.log(res.data);
                this.status.addToCartLoading ='';
                this.$refs.productDetailModal.closeModal();
                this.getCartData()
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        getCartData(){
            axios.get(`${apiUrl}/v2/api/${apiPath}/cart`)
            .then((res)=>{
              this.carts = res.data.data
              console.log('購物車列表',this.carts);
            })
            .catch((err)=>{
                console.log(err)
            });
        },
        delAllCart(){
          axios.delete(`${apiUrl}/v2/api/${apiPath}/carts`)
          .then((res)=>{
            console.log(res);
            this.getCartData();
          })
          .catch((err)=>{
              console.log(err)
          });
        },
        delCart(cartId){
          this.status.delCartLoading = cartId,
          axios.delete(`${apiUrl}/v2/api/${apiPath}/cart/${cartId}`)
          .then((res)=>{
            console.log('刪除成功！',res);
            this.getCartData();

          })
          .catch((err)=>{
              console.log(err)
          });
        },
        changeCartQty(qty,id,productId){
            const item = {
              "data": {
                "product_id": productId,
                "qty": qty
              }
            };
            console.log(qty,id,productId)
            axios.put(`${apiUrl}/v2/api/${apiPath}/cart/${id}` , item)
              .then((res)=>{
                  console.log(res.data);
                  this.getCartData()
              })
              .catch((err)=>{
                  console.log(err)
              })
          
        },
        isPhone(value){
          const phoneNumber = /^(09)[0-9]{8}$/
          return phoneNumber.test(value) ? true : '需要正確的電話號碼'
        },
        onSubmit(){
            const orderInfo = {
              "data": {
                "user": {
                  "name": this.user.name,
                  "email": this.user.email,
                  "tel": this.user.tel,
                  "address": this.user.area
                },
                "message": this.user.message
              }
            };
            if(this.carts.length === 0 ){
              axios.post(`${apiUrl}/v2/api/${apiPath}/order`, orderInfo)
              .then((res)=>{
                  console.log(res.data);
                  this.user = {};
                  this.getCartData();
                  alert('訂單已送出成功！')
              })
              .catch((err)=>{
                  console.log(err)
              })  
            }else{
              alert('購物車內沒有商品歐！')
            };
        
            
        }
    }

});


app.component('VForm', VeeValidate.Form);
app.component('VField', VeeValidate.Field);
app.component('ErrorMessage', VeeValidate.ErrorMessage);

app.mount('#app')