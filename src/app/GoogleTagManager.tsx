import Script from 'next/script';

export const HeadTag = () => {
  return (
    <Script strategy='lazyOnload' id='google-tag-manager'>
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
    </Script>
  );
};

export const BodyTag = () => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
};
