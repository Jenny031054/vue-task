export default {
  
    props:[ 'tempProduct','addToCart' ],
    data(){
        return {
            productDetailModal:null,
            qty: 1
        }
    },
    watch:{
      tempProduct(){
        this.qty = 1;
        // 監聽tempProduct的值的變化，如果有變動的話就將qty屬性改成 1 (類似初始化的感覺)
        // 但是修改一個品項 跳出去之後再點回來qty 還是會維持原本的數值，因為tempProduct沒有變動
      }
      
    },
    methods:{
        openModal(){
            this.productDetailModal.show()
        },
        closeModal(){
            this.productDetailModal.hide()
        }
        
    },
    mounted(){
        this.productDetailModal = new bootstrap.Modal(this.$refs.productDetailModal);
    },
    template:
    /*html*/
    `
    <div class="modal fade" 
            id="productModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true" 
            ref="productDetailModal"
          >
              <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content border-0">
                  <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                      <span>{{ tempProduct.title }}</span>
                    </h5>
                    <button type="button" class="btn-close"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-sm-6">
                        <img  :src="tempProduct.imageUrl" class="img-fluid"  alt="">
                      </div>
                      <div class="col-sm-6">
                        <span class="badge bg-primary rounded-pill">{{ tempProduct.category }}</span>
                        <p>商品描述：{{tempProduct.description }}</p>
                        <p>商品內容：{{ tempProduct.content}}</p>
                        <div v-if="tempProduct.origin_price === tempProduct.price " class="h5" >{{ tempProduct.price  }} 元</div>
                        <del class="h6" >原價 {{tempProduct.origin_price }} 元</del>
                        <div class="h5" >現在只要 {{ tempProduct.price }} 元</div>
                        <div>
                          <div class="input-group">
                            <select class="form-select" v-model="qty">
                              <option  
                               v-for="i in 20" :value="i ">{{ i }}</option>
                            </select>  
                            <button type="button" class="btn btn-primary"
                               @click="addToCart(tempProduct.id,qty)"
                            >加入購物車</button>
                          </div>
                        </div>
                      </div>
                      <!-- col-sm-6 end -->
                    </div>
                  </div>
                </div>
              </div>
      </div>
    
    `

};
