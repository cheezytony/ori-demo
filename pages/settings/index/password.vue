<script lang="ts" setup>
import ButtonSubmit from '~~/components/common/button/ButtonSubmit.vue';
import Form from '~~/components/common/form/Form.vue';
import FormGroup from '~~/components/common/form/FormGroup.vue';
</script>

<template>
  <Form>
    <div class="gap-x-8 grid grid-cols-1">
      <FormGroup
        name="password"
        id="old-password"
        label="Old Password"
        placeholder="e.g. myOldPassword-7H5A1"
        type="password"
      />
      <FormGroup
        name="password"
        id="new-password"
        label="New Password"
        placeholder="e.g. myNewPassword-1A5S3"
        type="password"
      />
    </div>

    <ButtonSubmit>Save Changes</ButtonSubmit>
  </Form>
</template>
