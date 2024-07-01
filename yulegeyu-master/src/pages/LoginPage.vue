<template>
  <div class="login">
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
        <a-form-item
        label="账号"
        name="username"
        :rules="[{ required: true, message: '请输入账号！' }]"
        >
        <a-input placeholder="请输入账号/手机号" v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码！' }]"
        >
        <a-input-password placeholder="请输入密码" v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">
                <a-button @click="showModal" type="link">隐私政策</a-button>
            </a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button 
                :disabled="!(formState.username && formState.password && formState.remember)"
                type="primary" html-type="submit">登录</a-button>
        </a-form-item>
    </a-form>
     <a-modal style="height: 80vh" v-model:visible="visible" title="隐私政策" @ok="handleOk">
      <iframe src="https://web.cailian.net/ys.html" border="0"></iframe>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from "vue-router";
// import { message } from 'antd';
import { message } from 'ant-design-vue';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: false,
    });
    
    const onFinish = () => {
      if(formState.username.indexOf('ylgy') != -1 && formState.password.indexOf('123456') != -1){
        router.push('/index');
      }else{
        message.error('账号或密码错误');
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      visible.value = false;
    };
    
    return {
      formState,
      onFinish,
      onFinishFailed,
      visible,
      showModal,
      handleOk,
    };
  },
});
</script>
<style scoped>
.login{
    height: 80vh;
    width: 90vw;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.ant-form{
  width: 100%;
}
.ant-checkbox-wrapper .ant-btn{
  margin: 0;
  padding: 0;
}
</style>