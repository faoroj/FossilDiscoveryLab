import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter';

const NewsletterSubscribe = () => {

  const MAILCHIMP_URL = 'https://gmail.us9.list-manage.com/subscribe/post?u=e9975d41787a17e116807433d&amp;id=8b64d596ab&amp;f_id=0033eae3f0';
  

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