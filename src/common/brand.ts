/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Shitty AI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'big-AGI',
  },
  Meta: {
    Description: 'Leading open-source AI web interface to help you learn, think, and do. AI personas, superior privacy, advanced features, and fun UX.',
    SiteName: 'Shitty AI | Harnessing AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@shittyai',
  },
  URIs: {
    Home: 'https://shittyai.com',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/shittyai',
    SupportInvite: 'https://discord.gg/zKpRdny5',
    // Twitter: 'https://www.twitter.com/enricoros'
    PrivacyPolicy: 'https://shittyai.com/privacy',
  },
};
