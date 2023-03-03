import { Social } from './Social';

export function Header() {
  return (
    <div className="header">
      <div className="header__title">Jack Purvis</div>

      <div className="header__social">
        <Social />
      </div>
    </div>
  );
}
