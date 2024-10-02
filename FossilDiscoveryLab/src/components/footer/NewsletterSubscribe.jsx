import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter';

const NewsletterSubscribe = () => {

  const MAILCHIMP_URL = import.meta.env.VITE_MAILCHIMP_URL;
  

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={({ subscribe, status, message }) => {
        console.log('subscribe function:', subscribe);
        return (
          <Newsletter
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;