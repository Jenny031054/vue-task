import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// 要先宣告，方便可以在不同的作用域底下去使用，以免下面程式碼會因為找不到值而出錯

//

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
        menuData :{
          Salad: [
            {
              id: 1,
              title: '香煎骰子牛沙拉',
              origin_price:150,
              price: 120,
              category:"salad",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"當你品嚐香煎骰子牛沙拉時，你會發現它結合了精緻的烹飪技巧和新鮮的食材，呈現出一道令人垂涎的美味佳餚。這道沙拉以嫩滑的鮮嫩牛肉骰子為主角，經過恰到好處的香煎，保留了肉質的鮮嫩多汁。配以豐富的蔬菜和新鮮的生菜，為整體口感增添了清爽的層次感。調味方面，可能會搭配一些特色醬汁，如香濃的沙拉醬或微辣的辣椒醬，讓每一口都充滿驚喜和滿足。這道香煎骰子牛沙拉不僅口感豐富，而且營養均衡，是一道適合任何場合的美味佳餚，無論是作為正餐的主菜或是輕盈的午餐選擇，都能帶來愉悅的用餐體驗",
              imageUrl:
                'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 2,
              title: '南瓜膺嘴豆溫沙拉',
              origin_price:150,
              price: 120,
              category:"salad",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"南瓜膺嘴豆溫沙拉將南瓜的甜美和豆類的營養結合在一起，呈現出一道營養豐富又美味的溫沙拉。這道菜以新鮮的南瓜為主角，南瓜經過烹煮後散發出濃郁的甜味和柔軟的質地，搭配口感豐富的膺嘴豆，帶來豐富的口感層次。沙拉中可能還會加入一些新鮮的蔬菜，如葉菜類或番茄等，提升整體的口感和營養價值。調味方面，可能會使用一些香料或酸甜的醬汁，以提升菜餚的風味。這道南瓜膺嘴豆溫沙拉不僅味道美味，而且營養均衡，富含膳食纖維、維生素和礦物質，是一道適合健康飲食的佳餚選擇",
              imageUrl:
                'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 3,
              title: '舒肥雞胸沙拉',
              origin_price:150,
              price: 120,
              category:"salad",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"舒肥雞胸沙拉是一道融合了美味和健康的佳餚。這道沙拉以嫩滑的雞胸肉為主要成分，雞胸肉可能先經過特殊的烹調方式，如烤、煎或蒸，以保留其鮮嫩多汁的特性。配以新鮮的蔬菜，如生菜、番茄、黃瓜等，增添色彩和口感的層次。此外，沙拉中可能還會加入一些類似堅果、水果或奶酪等配料，為整體風味帶來豐富的變化。調味方面，可能會使用一些健康的沙拉醬或酸甜的醬汁，使每一口都充滿美味。這道舒肥雞胸沙拉不僅口感豐富，而且富含高質量的蛋白質、維生素和礦物質，是一道適合健康飲食的美味選擇，無論是作為正餐的主菜或是輕盈的午餐選擇，都能帶來愉悅的用餐體驗",
              imageUrl: "https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/tunasalad.jpg?raw=true",
            },
            {
              id: 4,
              title: '季節水果沙拉',
              origin_price:150,
              price: 120,
              category:"salad",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"季節水果沙拉是一道清新爽口的美食，將當季的水果以創意搭配，展現出豐富多彩的色彩和口感。這道沙拉的主要成分是各種新鮮的水果，如草莓、藍莓、葡萄、水蜜桃、橙子等，每一種水果都帶有獨特的風味和營養價值。除了水果外，沙拉可能還會加入一些堅果或種子，如核桃、杏仁或瓜子，增添口感的豐富度。調味方面，可以使用一些清爽的酸甜醬汁或蜂蜜檸檬汁，提升整體的風味。這道季節水果沙拉不僅美味，而且營養豐富，富含維生素、礦物質和天然的抗氧化劑，是一道適合任何時節的健康甜點或開胃菜，讓人在享受美食的同時也能為身體注入活力",
              imageUrl:
                'https://images.unsplash.com/photo-1688923130928-8468d6af8d7e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 5,
              title: '泰式青木瓜絲沙拉',
              origin_price:150,
              price: 120,
              category:"salad",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"泰式青木瓜絲沙拉是一道風靡泰國的美味佳餚，以青木瓜為主要原料，呈現出清爽爽口的口感和獨特的泰式風味。這道沙拉以未成熟的青木瓜絲為基礎，配以新鮮的蔬菜，如青豆、番茄、紅辣椒等，營造出豐富的色彩和口感。另外，可能還會添加一些花生碎或蝦米，增添濃郁的香氣和口感。調味方面，通常會使用酸甜辣的泰式醬汁，包括檸檬汁、魚露、糖和辣椒等調味料，讓每一口都充滿著濃厚的泰式風味。這道泰式青木瓜絲沙拉不僅口感獨特，而且營養豐富，富含維生素和纖維，是一道清爽健康的美食選擇，讓人在享受美味的同時也能感受到東南亞的獨特風情。",
              imageUrl:
                'https://images.unsplash.com/photo-1616176673711-1673690c021f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 6,
              title: '番茄乾酪季節沙拉',
              origin_price:150,
              price: 120,
              category:"salad",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"番茄乾酪季節沙拉是一道融合了番茄的酸甜、乾酪的香濃和時令蔬菜的清新的美味沙拉。這道沙拉以新鮮的番茄為基礎，可能會使用多種顏色和品種的番茄，增添色彩和口感的層次。此外，沙拉中可能會加入一些時令的蔬菜，如青葱、紅洋蔥或甜椒，為整體口感帶來豐富的變化。配料方面，則會添加一些乾酪，如帕馬森芝士、莫扎瑞拉或羅馬乾酪，增添濃郁的奶香和鹹味。調味方面，可能會使用一些香草、橄欖油和醋等調味料，提升整體的風味。這道番茄乾酪季節沙拉不僅美味，而且營養豐富，富含維生素和礦物質，是一道適合各種場合的美味佳餚，無論是作為前菜、主菜還是配菜，都能帶來愉悅的用餐體驗。",
              imageUrl:
                'https://images.unsplash.com/photo-1549745708-fa4a8423a0b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 7,
              title: '酪梨穀物能量沙拉',
              origin_price:150,
              price: 120,
              category:"salad",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"酪梨穀物能量沙拉是一道結合了酪梨的滋味和穀物的營養的美味佳餚。這道沙拉以新鮮成熟的酪梨為基礎，其柔軟奶油質地和豐富的營養價值為整道菜帶來了濃厚的口感和風味。除了酪梨外，沙拉還可能包括多種穀物，如糙米、燕麥、藜麥或藜蘆米等，這些穀物富含纖維和蛋白質，為身體提供持久的能量。此外，沙拉中可能還加入一些生菜、番茄、胡蘿蔔等蔬菜，增添色彩和營養的多樣性。調味方面，通常會使用一些酸甜的沙拉醬或香草醬汁，為沙拉增添風味。這道酪梨穀物能量沙拉不僅美味可口，而且營養豐富，是一道適合作為主菜或健康輕食的絕佳選擇，讓您在享受美食的同時也能滿足身體的營養需求。",
              imageUrl:
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
          Burger: [
            {
              id: 1,
              title: '經典花生培根牛肉堡',
              origin_price:200,
              price: 180,
              category:"burger",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"經典花生培根牛肉堡是一道結合了多種美味食材的美味漢堡，絕對是肉食愛好者的最愛。這款堡包以新鮮的牛肉餅為主體，可能採用頂級的碎牛肉，經過烤、煎或燒烤處理，保留了肉汁鮮嫩的口感。堡包上可能搭配著香酥的培根，為口感增添豐富的層次和咸香的風味。此外，堡包中可能還夾著新鮮的生菜、番茄和洋蔥等蔬菜，為整體口感增添清爽和飽足感。特別的是，這款堡包可能會淋上濃郁的花生醬，帶來濃郁的堅果風味，與牛肉和培根的口感相得益彰。這道經典花生培根牛肉堡不僅口感豐富，而且飽含營養，是一道令人垂涎的美食，無論是作為午餐還是晚餐，都能滿足您對美味的渴望。",
              imageUrl:
                'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 2,
              title: '培根起司太陽蛋漢堡',
              price: 180,
              origin_price:200,
              price: 180,
              category:"burger",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"培根起司太陽蛋漢堡是一道結合了培根、起司和太陽蛋的美味漢堡，絕對是早午餐的絕佳選擇。這款漢堡以新鮮的漢堡餅或三明治麵包為底，上面可能夾著香酥的培根，為整體口感增添了豐富的咸香風味和口感。此外，堡包上可能還搭配著濃郁的起司片，融化在熱鬆軟的麵包上，營造出濃郁的奶香和濕潤的口感。特別的是，這款漢堡上還加上了一個太陽蛋，蛋黃可以流動，搭配培根和起司的風味，讓整個漢堡更加濃郁美味。這道培根起司太陽蛋漢堡不僅口感豐富，而且營養均衡，是一道美味的早午餐選擇，讓您在享受美食的同時也能滿足對營養的需求。",
              imageUrl:
                'https://images.unsplash.com/photo-1601894087104-0c18bc34dbd6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 3,
              title: '酥炸嫩雞起司堡',
              price: 180,
              origin_price:200,
              price: 180,
              category:"burger",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"酥炸嫩雞起司堡是一道結合了酥脆雞排和香濃起司的美味漢堡，絕對是炸物愛好者的最愛。這款漢堡以新鮮的漢堡餅或三明治麵包作為底部，上面夾著酥脆金黃的炸雞排，外層酥脆，內裡嫩滑多汁，口感絕佳。此外，堡包中夾著熔化的香濃起司片，營造出濃郁的奶香和融合感，與炸雞的鹹香味相得益彰。可能會添加些許生菜、番茄或洋蔥等蔬菜，為整體口感增添清爽和層次感。這道酥炸嫩雞起司堡不僅口感豐富，而且美味可口，是一道讓人欲罷不能的美食，無論是作為午餐還是晚餐，都能帶來滿滿的滿足感。",
              imageUrl:
                'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 4,
              title: '松露蕈菇牛肉堡',
              price: 120,
              origin_price:200,
              price: 180,
              category:"burger",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"松露蕈菇牛肉堡結合了頂級的牛肉、香濃的松露醬和新鮮的蕈菇，呈現出一道豐富奢華的美味漢堡。這款堡包可能以新鮮的牛肉餅或漢堡餅為基礎，上面夾著精心烹製的牛肉餅，肉質鮮嫩多汁。此外，可能還會添加新鮮的蕈菇，增添口感的豐富度和風味的層次。特別的是，這道漢堡上可能淋上精心調製的松露醬，散發出濃郁的松露香氣，與牛肉和蕈菇的風味相得益彰。這款堡包可能還會搭配一些蔬菜，如生菜、番茄或洋蔥，為整體口感增添清爽和層次感。這道松露蕈菇牛肉堡不僅口感豐富，而且風味獨特，是一道讓人垂涎欲滴的美食，無論是作為特別的主菜還是享受豪華美食的絕佳選擇。",
              imageUrl:
                'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 5,
              title: '青檸嫩雞鮮蔬堡',
              price: 150,
              origin_price:200,
              price: 180,
              category:"burger",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"青檸嫩雞鮮蔬堡結合了清新的青檸風味、嫩滑的雞肉和多種新鮮蔬菜，呈現出一道健康美味的漢堡。這款堡包可能使用新鮮的漢堡餅或全麥餅作為底部，上面夾著嫩滑的雞肉片，可能是烤過或煎過的雞肉，保持了肉質的嫩滑和多汁。此外，漢堡上可能夾著各種新鮮蔬菜，如生菜、番茄、黃瓜和紅洋蔥等，為整體口感增添清爽和層次感。特別的是，這款漢堡可能會淋上新鮮榨取的青檸汁，帶來清新的酸爽風味，為整體口感增添了一絲清爽。這道青檸嫩雞鮮蔬堡不僅口感豐富，而且營養均衡，是一道適合健康飲食的美食，無論是作為午餐還是輕盈的晚餐，都能帶來愉悅的用餐體驗。",
              imageUrl:
                'https://plus.unsplash.com/premium_photo-1668618294318-6452e93c6802?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 6,
              title: '酥脆洋蔥圈牛肉堡',
              price: 120,
              origin_price:200,
              price: 180,
              category:"burger",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"酥脆洋蔥圈牛肉堡是一道美味可口的漢堡，結合了香氣四溢的酥脆洋蔥圈和多汁的牛肉餅。這款漢堡可能以新鮮的漢堡餅或三明治麵包作為底部，上面夾著經過特殊處理的牛肉餅，可能是烤過或煎過的，保持了肉質的嫩滑和多汁。漢堡上可能夾著一層酥脆的洋蔥圈，外層酥脆，內裡甜蜜，為整體口感增添了豐富的層次。此外，漢堡可能夾著生菜、番茄和醬汁，以增添清爽的口感和酸甜的風味。這道酥脆洋蔥圈牛肉堡不僅外觀誘人，而且風味獨特，是一道適合作為主餐的美食，給人帶來滿滿的滿足感。",
              imageUrl:
                'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?q=80&w=1104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
          Sandwich: [
            {
              id: 1,
              title: '燻鮭魚酪梨開放三明治',
              price: 120,
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"燻鮭魚酪梨開放三明治是一道結合了燻鮭魚、酪梨和其他美味配料的精緻三明治。這款三明治以新鮮的麵包為底部，可能是托斯卡尼風格的麵包或全麥土司，質地鬆軟。上面可能鋪滿了切片的酪梨，酥軟滑順，為整體口感帶來綿密的奶油質地和淡淡的果香。然後，可能會放上燻鮭魚片，鮮嫩多汁，散發出濃郁的煙燻風味，與酪梨的風味相得益彰。這款三明治可能還會加入一些生菜或蔬菜，如番茄片、洋蔥圈或蕃茄醬，增添清爽和層次感。調味方面，可能會加入一些橄欖油、檸檬汁或黑胡椒，為整體風味提供平衡和豐富。這道燻鮭魚酪梨開放三明治不僅美味可口，而且營養豐富，是一道適合作為輕盈午餐或下午茶的美食，為您的用餐體驗增添一絲奢華和享受。",
              imageUrl:
                'https://images.unsplash.com/photo-1627308595216-439c00ade0fe?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 2,
              title: '莓果奶酪法式蜂蜜吐司',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              description:"莓果奶酪法式蜂蜜吐司是一道美味可口的法式早餐或下午茶，結合了莓果、奶酪和蜂蜜的獨特風味。這款吐司可能使用法式吐司或者吐司麵包，其質地鬆軟且稍微帶有酥脆外皮。上面可能鋪滿了新鮮的莓果，如草莓、藍莓或覆盆子，為整個吐司增添了豐富的口感和果香。接著，可能會加上一層奶酪，可能是軟質的奶酪或奶油芝士，為吐司帶來濃郁的奶香和滑順的質地。最後，可能會淋上一些蜂蜜，增添甜味和香氣。整個吐司可能會在烤箱中稍微加熱，讓奶酪稍微融化，蜂蜜滲入麵包中，使整個吐司更加美味。這款莓果奶酪法式蜂蜜吐司不僅口感豐富，而且營養豐富，是一道適合作為精緻早餐或下午茶的美食，為您的用餐體驗增添一絲法式風情和享受。",
              imageUrl:
                'https://images.unsplash.com/photo-1676037150606-ce6df635189e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 3,
              title: '酪梨太陽蛋酸種吐司',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              description:"酪梨太陽蛋酸種吐司是一道美味健康的早餐或下午茶選擇，融合了酪梨、太陽蛋和酸種吐司的獨特風味。這款吐司可能使用自製或購買的酸種麵包，其質地鬆軟、口感細緻，並帶有微酸的風味。上面可能鋪滿了成熟的酪梨片，酪梨的柔軟奶油質地和香濃味道為整個吐司增添了豐富的口感和營養。接著，在酪梨上可能加入一個煎蛋，蛋黃可能會流動，帶來奶香和營養。這款吐司可能會再撒上一些黑胡椒或香草調味，增添風味。整體而言，這款酪梨太陽蛋酸種吐司不僅美味可口，而且營養豐富，是一道適合作為輕盈早餐或下午茶的美食，為您的用餐體驗增添一絲清新和享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://plus.unsplash.com/premium_photo-1672639601612-4fcf7dab1ae6?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 4,
              title: '香料起司牛肉熱壓',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              description:"香料起司牛肉熱壓是一道美味多汁的熱壓三明治，結合了香料調味的牛肉和濃郁的起司。這款三明治可能使用新鮮的法國麵包或義式麵包作為底部，上面鋪滿了經過調味的牛肉片，可能使用各種香料，如黑胡椒、迷迭香、蒜粉等，讓肉質更加美味。然後，可能會加入一層厚厚的起司片，可能是切片起司或芝士絲，使整個三明治充滿濃郁的奶香味。這道三明治可能會再加入一些洋蔥圈、蕃茄片或生菜等蔬菜，為口感增添清爽和層次感。最後，將整個三明治放入熱壓器中，進行熱壓，使起司融化，麵包變得酥脆，同時讓香料的風味更加融入牛肉和起司之中。這款香料起司牛肉熱壓不僅口感豐富，而且風味獨特，是一道適合作為午餐或晚餐的美食，為您的用餐體驗帶來滿滿的滿足感。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 5,
              title: '檸檬嫩雞三明治',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              description:"檸檬嫩雞三明治是一道清新爽口的美食，結合了柔軟多汁的嫩雞肉和檸檬的清新風味。這款三明治可能使用新鮮的吐司或麵包作為底部，上面鋪滿了烤或煎過的嫩雞肉片，肉質鮮嫩多汁。然後，可能會添加一層新鮮檸檬片，檸檬的酸甜味為整體口感帶來清新的風味和香氣。這道三明治可能會搭配一些生菜或其他蔬菜，如番茄或黃瓜，為口感增添清爽和層次感。調味方面，可能會添加一些橄欖油、黑胡椒或香草調味，增添風味。這款檸檬嫩雞三明治不僅口感豐富，而且營養均衡，是一道適合作為輕盈早餐或午餐的美食，為您的用餐體驗增添一絲清新和享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1576194555759-22b1e99820f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 6,
              title: '香煎牛肉培根蛋吐司',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              description:"香煎牛肉培根蛋吐司是一道豐富美味的早餐或午餐選擇，結合了煎牛肉、培根和蛋的美味。這道吐司可能使用新鮮的吐司麵包，經過烤或煎後酥脆金黃。上面可能鋪滿了煎過的牛肉片，口感嫩滑多汁，帶有香氣扑鼻的煎炒香味。此外，可能會加入一些煎培根，增添鹹香的風味和酥脆的口感。然後，在吐司上可能加上一個煎蛋，蛋黃可能會流動，為整體口感帶來奶香和柔軟的質地。這道吐司可能會搭配一些生菜、番茄或酸黃瓜等蔬菜，為口感增添清爽和層次感。調味方面，可能會撒上一些黑胡椒或香草調味，增添風味。這款香煎牛肉培根蛋吐司不僅美味可口，而且營養豐富，是一道令人垂涎的美食，為您的早餐或午餐帶來滿滿的滿足感。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1608847569619-b5602f65ffa0?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 7,
              title: '黑胡椒牛肉潛艇堡',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              description:"黑胡椒牛肉潛艇堡是一道風味濃郁的美食，將黑胡椒牛肉和其他美味配料製作成的潛艇堡，味道絕佳。這款潛艇堡可能使用新鮮的潛艇麵包，切開後夾上了嫩煎的黑胡椒牛肉片，肉質鮮嫩多汁，並搭配了濃郁的黑胡椒醬汁，為整體口感增添了香濃的風味。此外，可能會添加一些生菜、番茄、紅洋蔥或酸黃瓜等蔬菜，為口感增添清爽和層次感。特別的是，這道潛艇堡可能會撒上一些切碎的芝士，讓風味更加豐富。這款黑胡椒牛肉潛艇堡不僅美味可口，而且營養豐富，是一道適合作為午餐或晚餐的美食，為您的用餐體驗增添一絲美味和享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 8,
              title: '羅勒番茄蛋開放式吐司',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              description:"羅勒番茄蛋開放式吐司是一道清新美味的吐司，結合了新鮮的羅勒、番茄和美味的煎蛋，呈現出豐富多彩的口感和風味。這款吐司以新鮮的吐司麵包為基礎，可能是全麥或多穀麵包，質地鬆軟。上面可能鋪滿了新鮮的羅勒葉，散發出濃郁的香味和清新的芳香。然後，可能會鋪上一層切片的番茄，酸甜爽口，為整體口感增添清爽和層次感。接著，可能會加入一個煎蛋，蛋黃可能會流動，為整體口感增添豐富的奶香味和柔軟的質地。這款開放式吐司可能還會淋上一些橄欖油、檸檬汁或黑胡椒，提升整體風味的層次和豐富度。這道羅勒番茄蛋開放式吐司不僅美味可口，而且營養豐富，是一道適合作為輕盈早餐或下午茶的美食，為您的用餐體驗增添一絲清新和享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl: 'https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/tomatoSandwich.jpg?raw=true',
            },
            {
              id: 9,
              title: '酪梨火腿鮮蔬三明治',
              origin_price:200,
              price: 180,
              category:"sandwich",
              number:1,
              description:"酪梨火腿鮮蔬三明治是一道美味多汁的三明治，融合了酪梨的奶香、火腿的鹹香和各種新鮮蔬菜的清爽。這款三明治以新鮮的麵包為底部，可能是多穀麵包或全麥土司，提供了營養豐富的底座。上面可能鋪滿了切片的酪梨，酥軟滑順，為整體口感帶來了豐富的奶香味道和濃郁的質地。接著，可能會加入一些切片的火腿，火腿的鹹香味與酪梨的香甜味相得益彰。這款三明治可能還會加入各種新鮮蔬菜，如生菜、番茄、黃瓜和紅洋蔥等，為整體口感增添清爽和層次感。調味方面，可能會添加一些橄欖油、檸檬汁或黑胡椒，為整體風味提供平衡和豐富。這道酪梨火腿鮮蔬三明治不僅美味可口，而且營養豐富，是一道適合作為輕盈午餐或下午茶的美食，為您的用餐體驗增添一絲奢華和享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl: 'https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/avocadoSandwich.jpg?raw=true',
            },
          ],
          Brunch: [
            {
              id: 1,
              title: '巴西野莓優格燕麥碗',
              origin_price:200,
              price: 180,
              category:"brunch",
              number:1,
              description:"巴西野莓優格燕麥碗是一道營養豐富、美味健康的早餐或輕食，結合了新鮮的巴西野莓、優格和燕麥，提供了豐富的纖維、蛋白質和維生素。這道燕麥碗可能以燕麥片作為基礎，上面鋪滿了新鮮的巴西野莓，這種野生莓果擁有豐富的抗氧化劑和維生素，帶來甜美的口感和果香。然後，可能加入一些優格，增添奶香和滑順的口感，同時提供益生菌，有助於腸道健康。此外，可能會加入一些堅果、種子或果仁，如杏仁片、南瓜籽或核桃碎，增添口感和營養價值。最後，可以淋上一些蜂蜜或楓糖漿，增添甜味，或撒上一些肉桂粉或朱古力粉，提升風味。這款巴西野莓優格燕麥碗不僅美味可口，而且營養豐富，是一道適合作為早餐或健康點心的佳品，為您的用餐體驗增添一絲活力和美好。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl: 'https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/yogret.jpg?raw=true',
            },
            {
              id: 2,
              title: '燻鮭魚乾酪班尼迪克蛋',
              origin_price:250,
              price: 180,
              category:"brunch",
              number:1,
              description:"燻鮭魚乾酪班尼迪克蛋是一道美味的早餐或早午餐選擇，結合了燻鮭魚、乾酪和班尼迪克蛋的精緻風味。這道菜的特色在於其獨特的口感和豐富的層次，以及鮮嫩的燻鮭魚和絲滑的班尼迪克蛋的完美結合，將燻鮭魚片放在烤好的麵包或英式鬆餅上，然後蓋上一層柔軟的班尼迪克蛋。班尼迪克蛋是一種以水煮蛋的方式製作，使蛋白煮熟而蛋黃保持流動狀態的煎蛋，通常配以醋和鹽來提升風味。在製作過程中，還會灑上一些乾酪，例如切達乾酪或帕馬森乾酪，增添濃郁的奶香味和鹹味。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl: 'https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/BenedictEggs.jpg?raw=true',
            },
            {
              id: 3,
              title: '培根太陽蛋早午餐',
              origin_price:240,
              price: 200,
              category:"brunch",
              number:1,
              description:"培根太陽蛋早午餐是一道經典美味的選擇，結合了煎蛋的滑順和培根的鹹香。在這道美食中，煎蛋的蛋黃如同太陽般明亮，搭配上酥脆的培根，令人口感滿足。搭配烤麵包、香腸或土豆，讓這道早午餐更加營養均衡。簡單易做的製作過程，使其成為忙碌早晨的理想選擇，為您的一天注入美味和活力。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl: 'https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/bacon.jpg?raw=true',
            },
            {
              id: 4,
              title: '焗烤酪梨班尼迪克蛋',
              origin_price:200,
              price: 180,
              category:"brunch",
              number:1,
              description:"焗烤酪梨班尼迪克蛋結合了煙燻火腿、酥脆培根和綿密酪梨的美味。在這道菜中，蛋白經過輕輕烹煮後，蛋黃保持柔軟的狀態，搭配上煙燻火腿和香脆培根的鹹香，以及酪梨的奶香和濃郁口感，豐富了整體風味。烤至金黃的麵包片為這道菜增添了酥脆的口感。這道早餐不僅美味可口，而且營養豐富，是一道令人垂涎的健康選擇，絕對能為您的一天帶來愉悅的開始。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1618669377018-23ea391e58dd?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 5,
              title: '莓果優格厚鬆餅',
              origin_price:200,
              price: 180,
              category:"brunch",
              number:1,
              description:"莓果優格厚鬆餅是一道美味的早餐或下午茶選擇，結合了新鮮的莓果和健康的優格，搭配鬆軟豐富的鬆餅。這道鬆餅可能以新鮮的莓果為裝飾，如草莓、藍莓或紅莓，增添豐富的口感和果香。厚鬆餅可能會使用優格或發酵酸奶替代部分液體成分，讓鬆餅更加濕潤和有彈性。這款早餐或下午茶美食不僅美味可口，而且營養豐富，是一道能夠提供能量和滿足感的健康選擇。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1499638309848-e9968540da83?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 6,
              title: '漢堡排佐嫰蛋早餐盤',
              price: 250,
              price: 120,
              origin_price:200,
              price: 180,
              category:"brunch",
              number:1,
              description:"漢堡排佐嫰蛋早餐盤是一道滿足的早餐，結合了美味的漢堡排和嫩蛋。這道早餐可能包括一片美味的漢堡排，外皮酥脆內裡鮮嫩多汁，搭配上一個煎蛋，蛋黃微微流動。可能還包括一些香腸、煎土豆或烤麵包，提供豐富的營養和口感。這道早餐盤可能會搭配一些生菜、番茄或酸黃瓜等蔬菜，增添清爽和層次感。這款早餐盤不僅美味可口，而且營養豐富，是一個美好的開始，為您的一天注入活力和能量。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 7,
              title: '鮭魚鮮蔬沙拉碗',
              origin_price:230,
              price: 180,
              category:"brunch",
              number:1,
              description:"鮭魚鮮蔬沙拉碗結合了優質的鮭魚和豐富的新鮮蔬菜，是一道營養均衡的健康美食。這道沙拉可能包括新鮮的鮭魚片，可能是烤過或煎過的，肉質鮮嫩多汁。搭配上各種蔬菜，如葉菜、紅、黃、綠椒、番茄、胡蘿蔔等，增添豐富的口感和營養。可能還會加入一些堅果或種子，如核桃、松子或奇亞籽，提供額外的纖維和蛋白質。這款沙拉可能會以柚子醋或橄欖油搭配調味，增添清爽的酸味和香氣。這道鮭魚鮮蔬沙拉碗不僅美味可口，而且營養豐富，是一道讓您享受健康美食的理想選擇。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1604259597308-5321e8e4789c?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 8,
              title: '鮮蔬起司雙拼貝果',
              origin_price:230,
              price: 190,
              category:"brunch",
              number:1,
              description:"鮮蔬起司雙拼貝果結合了清新的鮮蔬和濃郁的起司，是一道令人垂涎的早餐或午餐選擇。這款貝果可能會搭配多種鮮蔬，如番茄、生菜、紅洋蔥等，為口感增添清爽和層次感。同時，可能會加入兩種不同口味的起司，如切達起司和莫札瑞拉起司，為整個貝果增添濃郁的奶香味和豐富的口感。這款鮮蔬起司雙拼貝果可能會輕輕烤至外皮酥脆，內裡鬆軟，讓您一口咬下即可感受到多層次的美味。這道早餐或午餐美食不僅美味可口，而且營養豐富，為您的用餐體驗增添一絲享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
          Pasta: [
            {
              id: 1,
              title: '番茄肉醬斜管麵',
              origin_price:240,
              price: 200,
              category:"pasta",
              number:1,
              description:"番茄肉醬斜管麵是一道經典的義大利美食，將香濃的番茄醬和美味的肉醬淋在斜管形狀的麵條上。這款麵食可能會使用新鮮的番茄和香料調製出濃郁的番茄醬，再加入經過烹煮的肉醬，使風味更加豐富。麵條本身可能會帶有彈性的口感，能夠完美吸附醬汁，讓每一口都充滿滿足感。這道料理可能會撒上一些帕馬森芝士或碎香草作為點綴，增添風味層次。这是一道令人垂涎的美食，適合作為午餐或晚餐，為您帶來濃郁的義大利風味和滿足感。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 2,
              title: '松露奶油培根義大利麵',
              origin_price:200,
              price: 180,
              category:"pasta",
              number:1,
              description:"松露奶油培根義大利麵是一道豐富美味的義大利料理，結合了奢華的松露風味、濃郁的奶油醬和香脆的培根。鮮嫩的義大利麵可能會被淋上奶油醬，醬汁濃郁滑順，帶有微妙的松露香氣。煎至酥脆的培根可能會撒在麵上，增添口感和鹹香味道。這道料理可能會用新鮮的帕馬森芝士撒上一層，提升整體風味。這是一道極具誘人的美食，適合作為特別場合或美食愛好者的享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl: 'https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/baconPasta.jpg?raw=true',
            },
            {
              id: 3,
              title: '白酒蛤俐蒜香義大利麵',
              origin_price:260,
              price: 220,
              category:"pasta",
              number:1,
              description:"白酒蛤俐蒜香義大利麵是一道精緻美味的義大利料理，以新鮮的蛤蜊為主角，搭配蒜香和白酒，味道鮮美迷人。煮熟的義大利麵可能會被淋上以白酒、蒜和橄欖油烹製而成的湯汁，醬汁濃郁，帶有微妙的蒜香和白酒香氣。加入的蛤蜊會釋放出豐富的海鮮風味，與醬汁完美融合。這道料理可能會用新鮮的香草和檸檬皮作為點綴，提升整體口感。這是一道令人垂涎的美食，適合作為特別場合或對美食有要求的人士品嚐。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 4,
              title: '青醬海鮮筆管麵',
              origin_price:200,
              price: 180,
              category:"pasta",
              number:1,
              description:"青醬海鮮筆管麵是一道精緻美味的義大利料理，融合了清新的青醬和鮮美的海鮮。筆管形狀的麵條可能會被淋上以新鮮香草、松子、大蒜、橄欖油和帕馬森芝士磨成的青醬，味道鮮美。加入的各種海鮮，如蝦、貝類和魚肉，會釋放出豐富的海洋風味，與青醬完美融合。這道料理可能會用新鮮的檸檬皮和香草作為點綴，增添清新的風味。這是一道令人垂涎的美食，適合作為特別場合或對美食有要求的人士品嚐。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1616299908398-9af1134ad522?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 5,
              title: '義式牛肉寬管麵',
              origin_price:280,
              price: 250,
              category:"pasta",
              number:1,
              description:"義式牛肉寬管麵是一道豐富美味的義大利料理，特色在於搭配了口感豐富的寬管形狀麵條和美味的牛肉醬。這款麵食可能會使用寬大的麵管，能夠完美吸附牛肉醬的風味。牛肉醬可能會用牛絞肉、番茄醬、洋蔥、大蒜和香料等調製而成，口感濃郁，風味豐富。可能會撒上新鮮的帕馬森芝士作為點綴，增添濃郁的奶香味道。這道料理香氣撲鼻，口感豐富，絕對是一道讓人垂涎三尺的美食，適合與家人或朋友一同享用。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 6,
              title: '奶油燻雞寬管麵',
              origin_price:200,
              price: 180,
              category:"pasta",
              number:1,
              description:"奶油燻雞寬管麵是一道濃郁美味的義大利料理，結合了鮮嫩的燻雞和奶油醬。這款麵食可能會使用寬大的管狀麵條，能夠完美捕捉奶油醬的風味。燻雞可能會被切成絲狀，加入到奶油醬中，使整道菜的口感更加豐富。奶油醬通常以奶油、大蒜、鮮奶油和帕馬森芝士製成，濃郁滑順。這道料理可能會撒上新鮮的香草或黑胡椒作為點綴，增添風味層次。這是一道讓人垂涎欲滴的美食，適合與家人或朋友一同享用。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 7,
              title: '德腸奶香通心粉',
              origin_price:200,
              price: 180,
              category:"pasta",
              number:1,
              description:"德腸奶香通心粉是一道美味的意大利面菜肴，特色在于搭配了香濃的德式香腸和奶香濃郁的通心粉。通心粉煮熟後，可能會與切碎的德式香腸混合，使風味更加豐富。奶香醬汁通常以奶油、奶酪和一些香料烹製而成，口感濃郁滑順。這道料理可能會加入一些煮熟的青菜或蔬菜，如菠菜或花椰菜，增添色彩和營養。最後，可能會灑上一些帕馬森芝士或碎香草作為點綴，提升整體風味。這是一道令人垂涎的美食，適合與家人或朋友一同享用。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1607546965882-e025ff0edc61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
          Drink: [
            {
              id: 1,
              title: '莊園美式咖啡',
              origin_price:150,
              price: 120,
              category:"drink",
              number:1,
              description:"莊園美式咖啡是一種以美式咖啡製作方式調製的咖啡品，通常以莊園等級的咖啡豆烘焙而成。這種咖啡可能會以中度烘焙，味道平衡，帶有柔和的果香和堅果風味。製作時，常使用咖啡機沖泡，將熱水通過咖啡粉濾出，製作出潔淨、清新的咖啡口感。莊園美式咖啡清新醒神，是許多人在早晨或一天的開始時喜歡享用的咖啡選擇。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1494314671902-399b18174975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww',
            },
            {
              id: 2,
              title: '醇濃厚乳拿鐵',
              origin_price:160,
              price: 150,
              category:"drink",
              number:1,
              description:"醇濃厚乳拿鐵是一種濃郁香滑的咖啡飲品，混合了濃縮咖啡和豐滿的奶泡。這款飲品的製作方式是將濃縮咖啡或濃縮綠咖啡豆與熱牛奶混合，然後在上方添加豐富的奶泡。飲用時，濃縮咖啡的濃郁香氣與豐滿的奶泡完美融合，帶來濃郁、順滑的口感。這種飲品不僅味道濃郁，而且質地豐富，是許多咖啡愛好者的最愛選擇。醇濃厚乳拿鐵不僅適合在早晨享用，而且也是下午休息或晚上放鬆的理想選擇。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1564707967-342059441709?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 3,
              title: '黑糖拿鐵',
              origin_price:200,
              price: 180,
              category:"drink",
              number:1,
              description:"黑糖拿鐵是一種濃郁香甜的咖啡飲品，混合了黑糖和鮮奶。這款飲品的製作方式是將濃縮咖啡或濃縮綠咖啡豆與熱牛奶混合，然後加入黑糖調味，使飲品更加濃郁和香甜。黑糖的獨特風味為這款拿鐵帶來了深厚的口感和甜味，與牛奶的濃郁奶香完美融合。這種飲品不僅味道美味，而且有助於提神醒腦，是許多人在早晨或下午茶時間的最愛選擇。無論是冷飲還是熱飲，黑糖拿鐵都是一種令人愉悅的享受，適合在各種場合中享用。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1622240506921-042a4e71c172?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 4,
              title: '藍莓香蕉果昔',
              origin_price:200,
              price: 180,
              category:"drink",
              number:1,
              description:"藍莓香蕉果昔是一款健康美味的飲品，結合了藍莓和香蕉的營養價值和天然甜味。這款果昔可能會使用新鮮的藍莓和香蕉，再加入適量的牛奶、乳製品或果汁，然後混合打碎成綿滑的質地。飲用時，藍莓和香蕉的風味交融在一起，帶來清新的口感和豐富的果香，令人愉悅。這種果昔不僅口感柔和，而且富含維生素、礦物質和纖維，對身體健康有益。藍莓香蕉果昔是一種理想的早餐或健康零食，為您帶來美味和營養的雙重享受。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1588929473475-d16ffd5d068c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
            },
            {
              id: 5,
              title: '鳳梨柳橙鮮果汁',
              origin_price:200,
              price: 180,
              category:"drink",
              number:1,
              description:"鳳梨柳橙鮮果汁是一種清新的飲品，結合了鳳梨和柳橙的天然甜味和營養價值。這款果汁可能會使用新鮮的鳳梨和柳橙，將其榨汁或混合打碎成泥狀，然後過濾出來。飲用時，其濃郁的水果香氣和天然的甜味讓人心曠神怡。這種飲品不僅口感清爽，而且富含維生素C、纖維和其他營養成分，對健康有益。鳳梨柳橙鮮果汁是一種理想的清涼飲品，特別適合在夏季享用，為您帶來愉悅的味覺體驗。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://plus.unsplash.com/premium_photo-1666262370578-59f5736c0202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGp1aWNlfGVufDB8fDB8fHww',
            },
            {
              id: 6,
              title: '鮮果綠拿鐵',
              origin_price:150,
              price: 110,
              category:"drink",
              number:1,
              description:"鮮果綠拿鐵是一種清新的咖啡飲品，結合了新鮮的水果和濃郁的咖啡，具有獨特的口味和豐富的營養。這款飲品通常以濃縮咖啡或濃縮綠咖啡豆製成，混合鮮果汁或果泥，如蘋果、藍莓、草莓或芒果等，搭配鮮奶或奶泡。飲用時，其清新的水果風味和濃郁的咖啡香氣交織在一起，帶來愉悅的味覺享受。這種飲品不僅口感柔和，而且營養豐富，是一種理想的清涼飲品，特別適合在炎熱的天氣中享用。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 7,
              title: '沁涼薄荷茶',
              origin_price:200,
              price: 180,
              category:"drink",
              number:1,
              description:"沁涼薄荷茶是一種清爽的草本茶，以薄荷為基礎製成。這種茶具有清涼的口感和強烈的薄荷香氣，常被用來在炎熱的天氣中解渴。沁涼薄荷茶不含咖啡因，因此也適合在晚間飲用，幫助放鬆身心。製作方式通常是將乾燥的薄荷葉沖泡在熱水中，然後等待幾分鐘，讓薄荷的風味充分釋放出來。這種茶可以冷飲或熱飲，可以加入蜂蜜、檸檬或其他水果以增添風味。沁涼薄荷茶不僅口感清新，而且有助於提神醒腦，是一種受歡迎的健康飲品。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1593487806527-40dcc19864bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYXxlbnwwfHwwfHx8MA%3D%3D',
            },
            {
              id: 8,
              title: '南非國寶茶',
              origin_price:180,
              price: 140,
              category:"drink",
              number:1,
              description:"南非國寶茶，也稱為羅伯斯特茶（Rooibos Tea），是一種源自南非的茶飲。這種茶由羅伯斯特植物的葉子製成，不含咖啡因，因此成為了許多人的健康茶飲選擇。南非國寶茶具有獨特的甜香和堅果味，並帶有些許木質的氣息。這種茶被認為有豐富的抗氧化物質，有助於提升免疫力和改善消化系統。常見的飲用方式是將羅伯斯特茶葉沖泡於熱水中，可以單喝或添加牛奶、蜂蜜或檸檬等調味。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl:
                'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 9,
              title: '伯爵鮮奶茶',
              origin_price:200,
              price: 180,
              category:"drink",
              number:1,
              description:"伯爵鮮奶茶是一種結合了伯爵茶和鮮奶的茶飲，將茶香和奶香完美融合。伯爵茶是一種以中等烘焙的紅茶為基礎，加入柑橘皮和佛手柑的香料調製而成的茶，口感帶有柔和的香氣和淡淡的柑橘味道。這種茶通常會與鮮奶結合，奶茶的口感豐潤滑順，香氣四溢。常見的製作方式是將熱的伯爵茶與蒸熱的鮮奶混合，並加入適量的糖或其他甜味劑調味。伯爵鮮奶茶既充滿茶香又帶有奶香，是一種讓人愜意放鬆的茶飲選擇。",
              isFavorite:false,
              unit:"份",
              is_enabled:true,
              imageUrl: 'https://github.com/Jenny031054/Luminous-Brunch/blob/main/assets/images/menuImg/milktea.jpg?raw=true',
            },
          ],
        },
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
        this.postData()
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
            console.log(res.data)
            const { products , pagination } = res.data
            this.products = products;
            console.log(products)
            this.pagination = pagination;

          })
          .catch((err)=>{
            alert(err.response.data.message);
            window.location= 'login.html';
          })
        },
        postData(){
          let { Pasta } = this.menuData;
          
          let {Brunch }= this.menuData;
          let {Drink }= this.menuData;
          
         
          // aaaa.forEach((item,index)=>{
          //   console.log(item);
          //   let itttem = { data:  item }
          //   axios.post("https://vue3-course-api.hexschool.io/v2/api/jenny031054/admin/product",itttem)
          //   .then((res)=>{
          //     console.log(res)
          //   })
          //   .catch((err)=>{
          //     console.log(err)
          //   })
          // });
        }
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


