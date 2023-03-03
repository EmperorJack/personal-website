import { Link } from './shared/Link';

const links = {
  github: 'https://github.com/EmperorJack',
  'facebook-square': 'https://www.facebook.com/jackvpurvis',
  instagram: 'https://www.instagram.com/jackvpurvis',
  'youtube-play': 'https://www.youtube.com/user/EmperorrJack',
  mixcloud: 'https://www.mixcloud.com/innerbound/',
  // twitter: 'https://twitter.com/jackvpurvis',
  linkedin: 'https://www.linkedin.com/in/purvisjack',
  'behance-square': 'https://www.behance.net/jackpurvis',
};

export function Social() {
  return (
    <div className="social">
      {Object.entries(links).map(([service, url]) => (
        <Link key={service} href={url} className="social__link">
          <i className={`fa fa-${service} fa-sm`} />
        </Link>
      ))}
    </div>
  );
}
