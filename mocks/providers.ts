import { Component as VueComponent } from 'vue';
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
        description:
          'We use Gmail as our primary email provider for customer support. The Gmail API allows us to easily manage and respond to customer inquiries, as well as track and analyze customer engagement.',
      },
      {
        name: 'Email Forwarding',
        slug: 'email_forwarding',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
        description:
          'We use Gmail as our primary email provider for customer support. The Gmail API allows us to easily manage and respond to customer inquiries, as well as track and analyze customer engagement.',
      },
      {
        name: 'Outlook',
        slug: 'outlook',
        logo: 'https://logos-download.com/wp-content/uploads/2016/09/Outlook_logo_wordmark.png',
        description:
          'We use Outlook for customer support, which allows us to respond to customer inquiries and concerns through our Outlook account. The Outlook API allows us to integrate with other tools and platforms, such as CRM and analytics.',
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
        description:
          'We use Freshdesk for our ticketing system, which allows us to efficiently track and manage customer support requests. The Freshdesk API allows us to integrate with other tools and platforms, such as email and social media.',
      },
      {
        name: 'Zohodesk',
        slug: 'Zohodesk',
        logo: 'https://www.zoho.com/desk/images/logo.svg',
        description:
          'We use Zoho Desk for our customer support management, which allows us to automate and streamline our support processes. The Zoho Desk API allows us to easily integrate with other systems and platforms, such as CRM and billing.',
      },
      {
        name: 'Zendesk',
        slug: 'zendesk',
        logo: 'https://www.zendesk.com/wp-content/themes/zendesk/dist/images/logo-zendesk.svg',
        description:
          'We use Zendesk for our customer service platform, which allows us to manage and respond to customer inquiries through multiple channels, such as email, chat, and social media. The Zendesk API allows us to integrate with other tools and platforms, such as CRM and analytics.',
      },
      {
        name: 'Intercom',
        slug: 'intercom',
        logo: 'https://intercom.com/img/intercom-logo.svg',
        description:
          'We use Intercom for our customer messaging platform, which allows us to communicate with customers in real-time and respond to their inquiries and concerns. The Intercom API allows us to integrate with other tools and platforms, such as CRM and analytics.',
      },
    ],
  },
  {
    name: 'Social Media',
    providers: [
      {
        name: 'Facebook',
        slug: 'facebook',
        logo: 'https://www.facebook.com/images/fb_icon_325x325.png',
        description:
          'We use Facebook to communicate with our customers and respond to their inquiries and concerns through our Facebook page. The Facebook API allows us to integrate with other tools and platforms, such as CRM and analytics.',
      },
      {
        name: 'Twitter',
        slug: 'twitter',
        logo: 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitter-square2-512.png',
        description:
          'We use Twitter to communicate with our customers and respond to their inquiries and concerns through our Twitter account. The Twitter API allows us to integrate with other tools and platforms, such as CRM and analytics.',
      },
      {
        name: 'Instagram',
        slug: 'instagram',
        logo: 'https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png',
        description:
          'We use Instagram to communicate with our customers and respond to their inquiries and concerns through our Instagram account. The Instagram API allows us to integrate with other tools and platforms, such as CRM and analytics.',
      },
      {
        name: 'TikTok',
        slug: 'tiktok',
        logo: 'https://www.tiktok.com/favicon.ico',
        description:
          'We use TikTok to communicate with our customers and respond to their inquiries and concerns through our TikTok account. The TikTok API allows us to integrate with other tools and platforms, such as CRM and analytics.',
      },
    ],
  },
];
