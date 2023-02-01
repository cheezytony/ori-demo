<script lang="ts" setup>
import { useForm } from 'vue3-form';
import FormGroup from '~~/components/common/form/FormGroup.vue';
import Heading from '~~/components/common/typography/Heading.vue';
import ButtonSubmit from '~~/components/common/button/ButtonSubmit.vue';
import MessageDefault from '~~/components/common/message/MessageDefault.vue';
import Form from '~~/components/common/form/Form.vue';
import FormCheckbox from '~~/components/common/form/FormCheckbox.vue';

definePageMeta({
  layout: 'auth',
});

useHead({
  title: 'Login to your account'
})

const router = useRouter();
const loginForm = useForm({
  email: {},
  password: {},
});

const submit = () => router.push('/');
</script>

<template>
  <section class="row">
    <div class="w-full md:w-7/12 xl:w-1/2 mx-auto">
      <div class="mb-12">
        <Heading level="1" class="mb-2">Hi, Welcome Back.</Heading>
        <p>Login to your account to resume your progress.</p>
      </div>

      <Form ref="form" novalidate @submit="submit">
        <div class="flex flex-col">
          <div class="w-full">
            <FormGroup
              v-model="loginForm.fields.email.value"
              type="email"
              name="email"
              id="email"
              :form="loginForm"
              label="Email Address"
              placeholder="e.g. example@email.com"
              :disabled="!!loginForm.success"
            />
          </div>

          <div class="w-full">
            <FormGroup
              v-model="loginForm.fields.password.value"
              type="password"
              name="password"
              id="password"
              :form="loginForm"
              label="Password"
              placeholder="e.g. myPassword-153"
              :disabled="!!loginForm.success"
            />
          </div>

          <div class="flex justify-between">
            <FormCheckbox>Remember Me?</FormCheckbox>
            <RouterLink to="/forgot/password" class="text-sm">
              Reset Password?
            </RouterLink>
          </div>

          <div class="w-full">
            <MessageDefault color-scheme="green" v-if="loginForm.success">
              <i class="bi bi-check-square" />
              <span class="ml-1">{{ loginForm.success }}</span>
            </MessageDefault>
            <MessageDefault color-scheme="red" v-else-if="loginForm.error">
              <i class="bi bi-exclamation-square" />
              <span class="ml-1">{{ loginForm.error }}</span>
            </MessageDefault>

            <div class="mb-3 mt-4">
              <ButtonSubmit :disabled="loginForm.success" :form="loginForm">Login</ButtonSubmit>
            </div>

            <p class="mb-3">
              Not registered yet?
              <RouterLink to="/register">
                Create your account
              </RouterLink>
            </p>
          </div>
        </div>
      </Form>
    </div>
  </section>
</template>
