<script lang="ts" setup>
import { useForm } from 'vue3-form';
import ButtonSubmit from '~~/components/common/button/ButtonSubmit.vue';
import Form from '~~/components/common/form/Form.vue';
import FormGroup from '~~/components/common/form/FormGroup.vue';

const form = useForm({
  first_name: {},
  last_name: {},
  phone: {},
});

</script>

<template>
  <Form>
    <div class="gap-x-8 grid grid-cols-1 md:grid-cols-2">
      <FormGroup
        v-model="form.fields.first_name.value"
        :form="form"
        name="first_name"
        id="first_name"
        label="First Name"
        placeholder="e.g. Mike"
      />
      <FormGroup
        v-model="form.fields.last_name.value"
        :form="form"
        name="last_name"
        id="last_name"
        label="Last Name"
        placeholder="e.g. Wizowski"
      />
      <FormGroup
        name="email"
        id="email"
        label="Email Address"
        placeholder="e.g. mike.w@monsters.inc"
        :disabled="true"
      />
      <FormGroup
        v-model="form.fields.phone.value"
        :form="form"
        name="phone"
        id="phone"
        label="Phone Number"
        placeholder="e.g. 08012345678"
      />
    </div>

    <ButtonSubmit>Save Changes</ButtonSubmit>
  </Form>
</template>
