<script lang="ts" setup>
import { useForm } from 'vue3-form';
import ButtonSubmit from '~~/components/common/button/ButtonSubmit.vue';
import Form from '~~/components/common/form/Form.vue';
import FormGroup from '~~/components/common/form/FormGroup.vue';

const form = useForm({
  name: {},
  description: {},
  industry: {},
});
</script>

<template>
  <Form>
    <div class="flex flex-col">
      <FormGroup
        v-model="form.fields.name.value"
        :form="form"
        id="name"
        name="name"
        label="Company Name"
        placeholder="e.g. CredPal"
      />
      <FormGroup
        v-model="form.fields.description.value"
        :form="form"
        id="description"
        name="description"
        label="Company Description"
        placeholder="e.g. Credpal is an awesome fintech company..."
        type="textarea"
      />
      <FormGroup
        v-model="form.fields.industry.value"
        :form="form"
        id="industry"
        name="industry"
        label="Company Industry"
        placeholder="e.g. Fintech"
      />
    </div>
    <ButtonSubmit :form="form">Save Changes</ButtonSubmit>
  </Form>
</template>
