import { Provider } from '~~/types/models';

export interface Industry {
  name: string;
  providers: Provider[];
}

export const industries: Industry[] = [
  {
    name: 'Email',
    providers: [
      {
        name: 'Gmail',
        slug: 'gmail',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      },
      {
        name: 'Outlook',
        slug: 'outlook',
        logo: 'https://logos-download.com/wp-content/uploads/2016/09/Outlook_logo_wordmark.png',
      },
    ],
  },
  {
    name: 'Support',
    providers: [
      {
        name: 'Freshdesk',
        slug: 'freshdesk',
        logo: 'https://www.freshdesk.com/hubfs/freshdesk-logo.svg',
      },
      {
        name: 'Zohodesk',
        slug: 'Zohodesk',
        logo: 'https://www.zoho.com/desk/images/logo.svg',
      },
      {
        name: 'Zendesk',
        slug: 'zendesk',
        logo: 'https://www.zendesk.com/wp-content/themes/zendesk/dist/images/logo-zendesk.svg',
      },
      {
        name: 'Intercom',
        slug: 'intercom',
        logo: 'https://intercom.com/img/intercom-logo.svg',
      },
    ],
  },
  {
    name: 'Productivity',
    providers: [
      {
        name: 'Slack',
        slug: 'slack',
        logo: 'slack',
      },
      {
        name: 'Microsoft teams',
        slug: 'Microsoft teams',
        logo: 'Microsoft teams',
      },
      {
        name: 'Google chat',
        slug: 'Google chat',
        logo: 'Google chat',
      },
      {
        name: 'Notion',
        slug: 'Notion',
        logo: 'Notion',
      },
      // {
      //   name: 'Discord',
      //   slug: 'Discord',
      //   logo: 'Discord',
      // },
    ],
  },
  {
    name: 'Social Media',
    providers: [
      {
        name: 'Facebook',
        slug: 'facebook',
        logo: 'https://www.facebook.com/images/fb_icon_325x325.png',
      },
      {
        name: 'Twitter',
        slug: 'twitter',
        logo: 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitter-square2-512.png',
      },
      {
        name: 'Instagram',
        slug: 'instagram',
        logo: 'https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png',
      },
      // {
      //   name: 'TikTok',
      //   slug: 'tiktok',
      //   logo: 'https://www.tiktok.com/favicon.ico',
      // },
    ],
  },
  {
    name: 'CRM',
    providers: [
      {
        name: 'Salesforce',
        slug: 'salesforce',
        logo: '',
      },
      {
        name: 'Hubspot',
        slug: 'Hubspot',
        logo: '',
      },
      {
        name: 'Microsoft Dynamics 365',
        slug: 'microsoft_dynamics_365',
        logo: '',
      },
    ],
  },
  {
    name: 'Suite',
    providers: [
      {
        name: 'Microsoft',
        slug: 'Microsoft',
        logo: '',
      },
    ],
  },
  {
    name: 'Survey',
    providers: [
      {
        name: 'SurveyMonkey',
        slug: 'SurveyMonkey',
        logo: '',
      },
      {
        name: 'Typeform',
        slug: 'Typeform',
        logo: '',
      },
      {
        name: 'Qualtrics',
        slug: 'Qualtrics',
        logo: '',
      },
    ],
  },
  {
    name: 'Ecommerce',
    providers: [
      {
        name: 'WooCommerce',
        slug: 'WooCommerce',
        logo: '',
      },
      {
        name: 'Shopify',
        slug: 'Shopify',
        logo: '',
      },
      {
        name: 'Magento',
        slug: 'Magento',
        logo: '',
      },
    ],
  },
  {
    name: 'Project/Product Management ',
    providers: [
      {
        name: 'Asana',
        slug: 'Asana',
        logo: '',
      },
      {
        name: 'Trello',
        slug: 'Trello',
        logo: '',
      },
      {
        name: 'Jira',
        slug: 'Jira',
        logo: '',
      },
    ],
  },
  {
    name: 'Business Intelligence',
    providers: [
      {
        name: 'Power BI',
        slug: 'Power BI',
        logo: '',
      },
    ],
  },
];
