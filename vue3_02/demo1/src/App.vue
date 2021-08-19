<template>
  <div>
  <!--| 1.插值操作 {{}} |-->
  <h2>{{msg+str}}</h2>

  <!--| 2.指令操作  v-  |-->
  <h2 v-pre>{{str}}禁止解析</h2>
  <h2 v-once>{{str}}只初始化一次，值修改了，也不变化</h2>
  <h2 v-text="msg+`这是一个简单的text()方法`+`<a href=''></a>`"></h2>
  <h2 v-html="`<a href=''>插入HTML</a>`"></h2>
  
  <!-- 3.v-bind -->
  <input :type="typeName" v-bind:value="str" />
  <div :style="[fontSize]">测试</div>
  <div :style="{'font-size':fontSize}">测试</div>
  <div :class="classArr">测试</div>
  <div :class="classObj">测试</div>
  <div :class="{className}">测试</div>

  <!-- 4.计算属性 computed -->
  <h2> {{ getTitle() }}</h2>
  <h2> {{ title }}</h2>
  <h3> {{ title }}</h3>
  <h2> {{ title }}</h2>
  <h2> {{ title }}</h2>
  <button @click="updateTypeName()">更新typeName</button>

  <!-- 5.事件监听v-on -->
  <hr>
  <button v-on:click="vOn($event)"> 没有传递参数</button>
  <br/>
  <!-- 6.事件修饰符
    @事件.stop  阻止事件冒泡
        .self 只有自身事件触发才可以执行（不是子元素），事件冒泡时绕过
        .capture 优先执行此事件
        .prevent 阻止自身的事件
        .once 事件只被执行一次
   -->
    <div @click="one()" style="width:300px;height:500px;background:red;" >
      <!-- 阻止事件冒泡：阻止外层的事件发生 -->
      <div @click.stop="two()" style="width:200px;height:400px;background:green;" >
        <!-- 自身事件触发：只有自身触发事件，才发生事件的触发，冒泡等不会触发，绕过这一层的此事件 -->
          <!-- 串行化执行（注意循序） -->
        <div @click.self.stop="three()" style="width:100px;height:300px;background:pink;" >
          <div @click="four()" style="width:80px;height:200px;background:rgb(45, 160, 180);" >
            事件冒泡
        </div>
        </div>
      </div>
    </div>

    <br/>
    <a href="http://www.baidu.com" @click.once="once()">跳转到百度去吧</a>
    <br/>
    <br/>
    <br/>
    <hr/>
    <!-- 7. v-if v-show 
      v-if 删除DOM元素
      v-show 基于CSS样式隐藏
    -->

    <div v-if="isTure">v-if</div>
    <div v-show="isTure">v-show</div>

    <!-- if else -->
    <div v-if="isTure">
      111111<br/>
      111111<br/>
    </div>
    <div v-else>
      222222<br/>
      222222<br/>
    </div>
    <!-- 多条件分支 -->
    <div v-if="str == 1">
      111111<br/>
      111111<br/>
    </div>
    <div v-else-if="str == 2">
      222222<br/>
      222222<br/>
    </div>
    <div v-else>
      333333<br/>
      333333<br/>
    </div>
    <button @click="isTure=!isTure"> 显示/隐藏 </button>
  
    <!-- 8. v-for 
      v-for="值,键,ID  in  遍历元素" :key=""
     -->
    <ul>
      <li v-for="item in lists" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li v-for="item ,index in lists.slice(0,3)" :key="index">{{index+2+" : "+item}}</li>
    </ul>
    <ul>
      <li v-for="item ,index in obj" :key="index">{{index+" : "+item}}</li>
    </ul>
    <ul>
      <li v-for="item ,index,id in obj" :key="index" >{{id+" "+index+" : "+item}}</li>
    </ul>

    <!-- 9. v-model
      > 解释：
        v-model 可实现双向绑定，任意一方变化，都变化
        :value 只是实现了单项绑定，只有原变量变化，value才可变化
      > 修饰符
        .lazy 类似懒加载，触发方式由 input 事件触发更改为 change 事件触发.(失去焦点\回车等)
        .number 用于自动将用户输入的值转换为数值类型，如无法被 parseFloat() 转换，则返回原始内容

    -->
    v-model:<input type="text" v-model.lazy="msg"  />
    :value: <input type="text" :value="msg"  />  
    .number: <input type="text" v-model.number="msg"  />  
    .trim: <input type="text" v-model.trim="msg"  />  
    {{msg}} =》 {{typeof(msg)}}
    <button @click="msg+='123'">更新msg</button>

    <label for="a">
      <input id="a" type="radio" name="sex" value="东" v-model="sex">东
    </label>
    <label for="b">
      <input id="b" type="radio" name="sex" value="西" v-model="sex">西
    </label>
    <label for="c">
      <input  id="c" type="radio" name="sex" value="南" v-model="sex">南
    </label>
    <br/>
    <input type="checkbox" value="false" v-model="isAgree" />同意协议 {{isAgree}}
    <br/>
    <input type="checkbox" value="Java" v-model="AiHao" />Java
    <input type="checkbox" value="Php" v-model="AiHao" />Php
    <input type="checkbox" value="TypeScript" v-model="AiHao" />TypeScript
    <input type="checkbox" value="Vue" v-model="AiHao" />Vue
    <input type="checkbox" value="Go" v-model="AiHao" />Go
    <input type="checkbox" value="Rust" v-model="AiHao" />Rust

    <br/>
    <input type="text" @keyup.enter="addAiHao($event)" v-model="AiHaoItem" />
    {{AiHaoItem}} - {{AiHao}}
    
    <!-- 10. 键盘上按键的监听
        .keyup.enter
              .tab
              .delete  “退格”和“删除”
              .esc
              .space
              .up
              .down
              .left
              .right
        .keydown相同
     -->
  </div>
</template>
<script >
  let tmp;
  let updateTxt = "txt";

  /**
   * for in , for of ,forEach小知识点
   */
  console.log("===============测试内容==============")
  let books = [
    {id:1, name:"好"},
    {id:2, name:"坏"},
  ];
  //  for in 遍历
  for(let i in books){
    console.log(i ,"i的类型是：", typeof i); // string 序列号
  }
  //  for of 遍历
  for(let i of books){
    console.log(i, "i的类型是：", typeof i); // Object 元素对象
  }
  //  forEach 遍历
  books.forEach((v,i,a)=>{  // v：元素， i:序列号， a 当前调用forEach的对象
    console.log(v)
    console.log(i)
    console.log(a)
    a[i].name+="哈哈哈" // 引用传值，books也修改了
  })
  console.log(books)

  console.log(parseFloat("a123")) // 非数字开头的字符串无法转换，NAN

  console.log("===============测试内容==============")


  export default ({
    name: 'App',
    data(){
      return {
        typeName:"number",
        str:3,
        msg:"1",
        fontSize:'50px',
        classObj: {one: false, two:true},
        className:true,
        classArr:["one","two"],  // 数组方式
        isTure:false
        ,lists:['php','java','python','TypeScript','React']
        ,obj:{name:"学习城市",url:"http:/www", slogen:"智慧城市新生活"}
        ,sex:"南"
        ,isAgree:false
        ,AiHao:["Php","Go"]
        ,AiHaoItem:""
      };
    },
    setup() {
        
      
      return {
        
      }
    },
    computed:{
      title:{
        get(){
          console.log("调用次数"); // 不管引用多少次，只执行一次，除非返回值发生变化
          return this.msg+'-'+this.typeName;
        }
      }
    },
    methods:{
      getTitle(){
        return this.msg+'=='+this.typeName;
      },
      updateTypeName(){
        tmp = this.typeName;
        this.typeName = updateTxt;
        updateTxt = tmp;
      },
      vOn(e){
        console.log(e)
      },
      one(){
        console.log("第一层执行")
      },
      two(){
        console.log("第二层");
      }
      ,three(){
        console.log("第三层");
      }
      ,four(){
        console.log("第四层");
      }
      ,once(){
        console.log("来啊，点我啊")
      }
      ,addAiHao(e){
       if(this.AiHaoItem != ""){
         if(this.AiHao.includes(this.AiHaoItem)){

          this.AiHaoItem = "已经包含这个值了";
         }else{
          this.AiHao.push(this.AiHaoItem);
          this.AiHaoItem = "";
         }
       }else{
         console.log(e);
       }
      }
    }
});

</script>
<style scoped>
.one{
  background: green;
}
.two {
  color:red;
}
.className{
  font-size: 100px;
}
</style>