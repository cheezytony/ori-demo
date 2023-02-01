<script lang="ts" setup>
import { useForm, getFieldError } from 'vue3-form';
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
  title: 'Create your account'
})

const router = useRouter();
const registerForm = useForm({
  first_name: {},
  last_name: {},
  company_name: {},
  phone: {},
  email: {},
  password: {},
  terms: { rules: ['nullable'], value: false },
});

const submit = () => router.push('/');
</script>

<template>
  <div class="flex">
    <div class="w-full md:w-7/12 lg:w-7/12 xl:w-8/12 mx-auto">
      <div class="mb-12">
        <Heading level="1" class="mb-2">Get Started.</Heading>
        <p>Create your account to get started with lending Edge.</p>
        <p class="text-red-500">Fields with * are required.</p>
      </div>

      <form
        ref="form"
        class="contact__form"
        novalidate
        @submit.prevent="submit"
      >
        <div class="flex flex-col">
          <div class="gap-x-8 grid grid-cols-1 md:grid-cols-2">
            <FormGroup
              v-model="registerForm.fields.first_name.value"
              name="first_name"
              id="first_name"
              :form="registerForm"
              label="First Name *"
              placeholder="e.g. Steve"
            />
            <FormGroup
              v-model="registerForm.fields.last_name.value"
              name="last_name"
              id="last_name"
              :form="registerForm"
              label="Last Name *"
              placeholder="e.g. Sam"
            />
            <FormGroup
              v-model="registerForm.fields.company_name.value"
              type="company_name"
              name="company_name"
              id="company_name"
              :form="registerForm"
              label="Company *"
              placeholder="e.g. CredPal"
            />
            <FormGroup
              v-model="registerForm.fields.phone.value"
              type="phone"
              name="phone"
              id="phone"
              :form="registerForm"
              label="Phone Number *"
              placeholder="e.g. 08012345678"
            />
            <FormGroup
              v-model="registerForm.fields.email.value"
              type="email"
              name="email"
              id="email"
              :form="registerForm"
              label="Email Address *"
              placeholder="e.g. example@email.com"
            />
            <FormGroup
              v-model="registerForm.fields.password.value"
              type="password"
              name="password"
              id="password"
              :form="registerForm"
              label="Password *"
              placeholder="e.g. myPassword-153"
              :display-all-errors="true"
            />
          </div>

          <div class="w-full mt-4">
            <div class="mb-4">
              <FormCheckbox
                v-model="(registerForm.fields.terms.value as boolean)"
                name="terms"
                id="terms"
              >
                I agree to all the
                <RouterLink to="/terms" target="_blank">Terms</RouterLink>,
                <RouterLink to="/privacy" target="_blank">
                  Privacy Policy
                </RouterLink>
                and <RouterLink to="/fees" target="_blank">Fees</RouterLink>.
              </FormCheckbox>
              <div
                class="block text-red-500 text-sm"
                v-if="getFieldError(registerForm.fields.terms)?.length"
              >
                You need to agree to the terms of service to proceed.
              </div>
            </div>
          </div>

          <div class="w-full">
            <MessageDefault color-scheme="green" v-if="registerForm.success">
              <i class="bi bi-check-square" />
              <span class="ml-1">{{ registerForm.success }}</span>
            </MessageDefault>
            <MessageDefault color-scheme="red" v-else-if="registerForm.error">
              <i class="bi bi-exclamation-square" />
              <span class="ml-1">{{ registerForm.error }}</span>
            </MessageDefault>

            <div class="mb-3 mt-4">
              <ButtonSubmit :form="registerForm"> Create Account </ButtonSubmit>
            </div>

            <p class="mb-3">
              Already have an account?
              <RouterLink to="/login"> Login </RouterLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
