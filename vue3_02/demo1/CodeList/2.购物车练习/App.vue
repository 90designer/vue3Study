<template>
    <div>
        <div v-if="books.length == 0">购物车为空哦！</div>
        <table v-else>
            <caption><h2>购物车</h2></caption>
            <tr>
                <th></th>
                <th>编号</th>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品总价</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
            <tr v-for="item,index in books" :key="index">
                <td><input type="checkbox" v-model="item.checkbox"></td>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price.toFixed(2)}}</td>
                <td>{{ (item.price*100) * (item.count*100)/10000 }}</td>
                <td>
                    <button :class="item.count<=1?'carBtn carBtNot':'carBtn'" :disabled="item.count<=1" @click="jian(item.id)">-</button>
                    {{item.count}}
                    <button :class="item.count>=10?'carBtn carBtNot':'carBtn'" :disabled="item.count>=10" @click="jia(item.id)">+</button>
                </td>
                <td>
                    <button class="delBtn" @click="delBook(index)">删除</button>
                </td>
            </tr>
            <tr>
                <th colspan="7">合计：{{getTotalPrice}} 元</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default ({
    name:"App",
    data(){
        return {
            books:[
                {id:1,checkbox:true,name:"PHP从入门到跑路", price:10.02, count:1},
                {id:2,checkbox:true,name:"Java从入门到跑路", price:11, count:1},
                {id:3,checkbox:true,name:"Rust从入门到跑路", price:12, count:1},
                {id:4,checkbox:true,name:"Golang从入门到跑路", price:13, count:1},
                {id:5,checkbox:true,name:"TypeScript从入门到跑路", price:14, count:1},
                ]
            ,carBtn:["carBtn"]
        }
    }
    ,computed:{
        getTotalPrice:{
          get(){
            let totalPrice = 0;
            this.books.forEach(val=>{
                if(val.checkbox){
                    totalPrice += (val.price*100) * (val.count*100)
                }
            })
            return totalPrice/10000;
          }
        }
    }
    ,methods: {
        jia(id){
            this.books.forEach((val)=>{
                if(val.id == id){
                    val.count++;
                    if(val.count >= 10){
                        val.count = 10;
                    }
                }
            })
        }
        ,jian(id){
            for(let item of this.books){
                if(item.id === id){
                    item.count--;
                    if(item.count <=1 ){
                        item.count = 1;
                    }
                }
            }
        }
        ,delBook(id){
            if(this.books.length < 2){
                if(!window.confirm("确定删除最后一个吗？")){
                    return false;
                }
            }
            this.books.splice(id,1);
        }
    },
})
</script>
<style scoped>
    table{
        width:800px;
        border:1px solid rgb(0, 183, 255);
        border-collapse: collapse;
        text-align: center;
    }
    th{
        background:rgb(0, 183, 255);
        border: 1px solid rgb(0, 183, 255);
        padding: 10px ;
    }
    td{
        border: 1px solid rgb(221, 220, 220);
        padding: 10px ;
    }
    .carBtn{
        border:none;
        width: 32px;
        height:32px;
        cursor:pointer; 
        /* not-allowed */
    }
    .carBtNot{
        cursor:not-allowed;
    }
    .delBtn{
        width:60px;
        height:26px;
        cursor: pointer;
        border:none;
        background: orangered;
        border-radius: 3px;
        color:#fcfcfc;
    }

</style>