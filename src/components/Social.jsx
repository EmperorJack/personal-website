import React from 'react';
import Link from './shared/Link.jsx';

const links = {
  github: 'https://github.com/EmperorJack',
  'facebook-square': 'https://www.facebook.com/jackvpurvis',
  instagram: 'https://www.instagram.com/jackvpurvis',
  'youtube-play': 'https://www.youtube.com/user/EmperorrJack',
  twitter: 'https://twitter.com/jackvpurvis',
  'behance-square': 'https://www.behance.net/jackpurvis',
};

const Social = () => (
  <div className="social">
    {Object.entries(links).map(([service, url]) => (
      <Link
        key={service}
        url={url}
        customClassName="social__link"
      >
        <i className={`fa fa-${service} fa-sm`}></i>
      </Link>
    ))}
  </div>
);

export default Social;
