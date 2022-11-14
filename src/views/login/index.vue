<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


const router =  useRouter()


const handleSubmit =(data:any)=>{
  localStorage.setItem("token",'true')
  router.push({
    path:"/"
  })
  
}

// type formRuls={
//     name:string,
//     pass:number,

// }

const form =reactive({
  name:"admin",
  pass:"12345",
  imgCode:"V9AM"
})


</script>

<template>
    <div id="login">
      <div class="app-login">
       <a-form ref="formRef" class="app-login-form" :model="form"   @submit="handleSubmit">
        <a-form-item field="name"
          :rules="[{required: true,message:'请输入用户名'}]" :validate-trigger="['change','input']" hide-label>
          <a-input v-model="form.name" placeholder="用户名:admin" >
            <template #prefix>
              <icon-user/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item field="pass"
          :rules="[{required: true,message:'请输入密码'}]" :validate-trigger="['change','input']" hide-label>
          <a-input-password v-model="form.pass" placeholder="密码:12345" allow-clear>
            <template #prefix>
              <icon-lock/>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item field="imgCode" class="image-code" hide-label>
          <a-input v-model="form.imgCode" placeholder="V9AM" size="large"/>
          <img class="login-code-img" src="../../assets/login-code.8c841f1c.png" alt=""/>  
        </a-form-item>
        <a-space class="wrapper" direction="vertical">
          <a-button type="primary" html-type="submit" long >确定</a-button>
        </a-space>
       </a-form>
      </div>
    </div>
</template>

<style lang="scss" scoped>
#login{
    width: 100%;
    height: 100vh;
    display: flex;
    .app-login{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .app-login-form{
         width: 300px;   
         padding: 30px 30px 30px ;
         box-shadow: 0 0 10px 1px #e1e1e1;
         background: #fff;
         .image-code{
          .login-code-img{
            height: 32px;
            cursor: pointer;
            border: 1px solid #ccc;
            margin-left: 15px;
          }
         }
        }
    }
}
</style>