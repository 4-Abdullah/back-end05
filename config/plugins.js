module.exports = ({ env }) => ({
    
    // email: {
    //   config: {
    //     provider: 'sendgrid',
    //     providerOptions: {
    //       apiKey: env('SENDGRID_API_KEY'),
    //     },
    //     settings: {
    //       defaultFrom: 'abdullahmaliksher@strapi.io',
    //       defaultReplyTo: 'abdullahmaliksher@strapi.io',
    //     },
    //   },
    // },
      // ... 
       
    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'abdullahmaliksher@gmail.com',
          defaultReplyTo: 'abdullahmaliksher4@gmail.com',
        },
      },
    },

    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
    },
    
  });