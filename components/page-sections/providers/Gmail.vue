<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ButtonBase from '~~/components/common/button/ButtonBase.vue';
import { useApiRequest } from '~~/hooks/api';

const completed = ref(false);

const clientId =
  'CLIENT_ID';
const scopes = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/pubsub',
];
const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
const redirectUri = 'http://localhost:3001/callback/google';
const params: Record<string, string> = {
  access_type: 'offline',
  client_id: clientId,
  redirect_uri: redirectUri,
  response_type: 'code',
  scope: scopes.join(' '),
  include_granted_scopes: 'true',
  prompt: 'consent',
  state: 'something',
};
const child = ref<Window | null>(null);

const url = computed(() => {
  const query = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return `${oauth2Endpoint}?${query}`;
});

const authorize = () => {
  child.value = window.open(
    url.value,
    'GoogleOauth2',
    'width=550,height=170,left=150,top=200,toolbar=1,status=1,'
  );
};

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data.key === 'google:oauth2') {
      const data = event.data.data;
      if (data.state === params.state) {
        completed.value = true;
      }
    }
  });
});
</script>

<template>
  <div>
    <ButtonBase v-if="completed" color-scheme="green:soft" size="sm">
      <span>
        <FontAwesomeIcon icon="fa-solid fa-check" />
      </span>
      <span>Completed</span>
    </ButtonBase>
    <ButtonBase
      v-else
      color-scheme="white"
      @click="authorize"
      size="sm"
    >
      Continue with Google
    </ButtonBase>
  </div>
</template>
