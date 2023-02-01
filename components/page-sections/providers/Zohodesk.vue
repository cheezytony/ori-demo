<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ButtonBase from '~~/components/common/button/ButtonBase.vue';
import { useApiRequest } from '~~/hooks/api';

const oauth2Endpoint = 'https://accounts.zoho.com/oauth/v2/auth';
const clientId = 'CLIENT_ID';
const scope = ['Desk.tickets.ALL'].join(',');
const redirectUri = 'http://localhost:3001/callback/zohodesk';
const state = '-5466400890088961855';
const params = [
  'response_type=code',
  'client_id=' + clientId,
  'scope=' + scope,
  'redirect_uri=' + redirectUri,
  'access_type=offline',
  'state=' + state,
];
const url = computed(() => oauth2Endpoint + '?' + params.join('&'));
const completed = ref(false);

const authorize = () => {
  window.open(
    url.value,
    'ZohodeskOauth2',
    'width=550,height=170,left=150,top=200,toolbar=1,status=1,'
  );
};

onMounted(() => {
  window.addEventListener('message', (event) => {
    const data = event.data;
    console.log(data);
    if (data.key !== 'zohodesk:oauth2') return;
    if (data.data.state !== state) return;
    console.log('load');
    
    completed.value = true;
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
      Continue with Zohodesk
    </ButtonBase>
  </div>
</template>
