import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__content">
        <img src="/public/images/logo.svg" alt="photo" />
        <div className="Nav__content-socials">
          <span>
            <img src="./images/Main/instagram.svg" alt="photo" />
          </span>
          <span>
            <img src="./images/Main/tg.svg" alt="photo" />
          </span>
          <span>
            <img src="./images/Main/wp.svg" alt="photo" />
          </span>
          <p>+995 555 55 55 55</p>
        </div>
      </div>
    </nav>
  );
}
