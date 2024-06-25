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
        :rules="[{ required: true, message: 'Please input your username!' }]"
        >
        <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
        >
        <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">
                <a-button @click="showModal" type="link">隐私政策</a-button>
            </a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button 
                :disabled="!(formState.username === 'ylgy' && formState.password === '123456' && formState.remember)"
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

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const formState = reactive<FormState>({
      username: 'ylgy',
      password: '123456',
      remember: false,
    });
    
    const onFinish = () => {
      console.log('Success:', formState);
      router.push('/index');
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
}
</style>