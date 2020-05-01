import Head from "next/head";

const Ratgeber = () => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Aust Umzüge und Haushaltsauflösungen</title>
      <meta
        name="description"
        content="Aust Umzüge & Haushaltsauflösungen ist Ihre verlässlicher Partner, wenn es rund um Umzüge geht"
      />
      <link async rel="stylesheet" href="assets/css/style.css" />
      <link
        async
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/img/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/img/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preload" href="/static/css/style.css" rel="stylesheet" />
    </Head>
    <header>
      <h1 class="logo">
        <a href="index.html" title="Startseite">
          <img
            class="logo-pic"
            src="assets/img/logo.jpg"
            alt="Logo Ihrer Umzugsfirma"
          />
        </a>
      </h1>

      <input type="checkbox" id="nav-toggle" class="nav-toggle" />

      <nav>
        <ul>
          <li>
            <a href="index.html" title="Startseite">
              Home
            </a>
          </li>
          <li>
            <a
              href="leistungen.html"
              title="Unsere Leistungen für Umzüge und Haushaltsauflösungen"
            >
              Leistungen
            </a>
          </li>
          <li>
            <a href="bewertungen.html" title="Bewertungen unserer Kunden">
              Bewertungen
            </a>
          </li>
          <li>
            <a href="ratgeber.html" title="Unser Ratgeber für Ihren Umzug">
              Ratgeber
            </a>
          </li>
          <li>
            <a
              href="kontakt.html"
              title="Ihr Kontakt zu Ihrem Partner für Umzüge"
            >
              Kontakt
            </a>
          </li>
          <li>
            <a
              href="kostenloses-angebot.html"
              title="Ihr kostenloses Angebot"
              class="button"
            >
              Kostenloses Angebot
            </a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
    <div class="kontakt">
      <div class="wrapper">
        <b>
          Haben Sie Fragen?
          <a
            href="tel:05121- 7558379"
            title="Rufen Sie uns unverbindlich an - Hier klicken"
          >
            05121- 7558379{" "}
          </a>
          | Montag - Freitag von 09:00 - 19:00 Uhr
        </b>
      </div>
    </div>

    <div class="hero-head-ratgeber">
      <div class="heading">
        <h1>WAS SOLLTEN SIE BEI EINEM UMZUG BEACHTEN?</h1>
        <p>UND ANDERE THEMEN RUND UM DAS THEMA MÖBEL</p>
      </div>
    </div>
    <div class="seperator">
      <h3>
        <a href="kostenloses-angebot.html" title="Zum kostenlosen Angebot">
          <img
            src="assets/img/message-icon.png"
            alt="Schreiben Sie uns eine Nachricht"
          />
          Kostenloses Angebot erhalten
        </a>
      </h3>
    </div>
    <div class="wrapper">
      <br />
      <br />
      <br />
      <br />
      <h2>Welche Vorbereitung müssen Sie vor Ihrem Umzug beachten?</h2>
      <br />
      <br />
      <h3>
        Und woran sollten Sie auch <u>nach</u> Ihrem Umzug denken?
      </h3>
      <br />
      <br />
      <p>
        In unserem ersten Beitrag rund um das Thema umziehen möchten wir Ihnen
        eine nützliche Checkliste bereitstellen.
        <br />
        Bei jedem Umzug gibt es allerhand Dinge zu beachten und wir wollen Sie
        vorsorglich Informieren, sodass Sie alles reibungslos Planen können und
        vor allem nicht an unvorhergesehenen Problemen verzeifeln.
        <br />
        <br />
        Lesen Sie also hier über typische Stolpersteine und lassen Sie uns Ihnen
        kostenfrei dabei helfen, Ihren Umzug so entspant wie möglich zu
        gestalten.
        <br />
        Selbstverständlich können Sie uns jederzeit auch persönlich um Rat
        fragen.
      </p>

      <br />
      <br />
      <a
        href="blog/umzug-checkliste.html"
        title="Checkliste für Ihren Umzug"
        class="button"
      >
        Ihre Checkliste
      </a>
      <br />
      <br />
      <br />
      <br />
    </div>

    <div class="divider_small"></div>
    <div class="wrapper">
      <div class="footer">
        <div>
          <h2>Anschrift & Kontakt</h2>
          <h3>Aust Umzüge & Haushaltsäuflösungen</h3>
          <p>
            Alex Aust
            <br />
            Ehrlicherstr. 38
            <br />
            31135 Hildesheim
            <br />
            <br />
            Telefon: 05121 – 7558379
            <br />
            Mobil: 0176 – 70745281
            <br />
            E-Mail: info@aust-umzuege.de
            <br />
            <br />
          </p>
        </div>
        <div>
          <h2>Bürozeiten</h2>
          <p>
            Montag – Freitag: 09:00 – 19:00 Uhr <br />
            Samstag nach Vereinbarung
            <br />
            Sonntag geschlossen <br />
            <br />
            <a href="rechtliches/impressum.html" title="Impressum">
              Impressum
            </a>
            <br />
            <br />
            <a href="rechtliches/datenschutz.html" title="Datenschutzerklärung">
              Datenschutzerklärung
            </a>
            <br />
            <br />
            <a href="rechtliches/agbs.html" title="Unsere AGBs">
              AGBs
            </a>
            <br />
            <br />
          </p>
        </div>
        <div class="right">
          <a
            href="https://profis.check24.de/profil/aust-umzuge-haushaltsauflosungen/qyekqm"
            target="_blank"
            rel="noreferrer"
            title="Check24 Seite"
          >
            <img
              src="assets/img/check24.png"
              alt="Check 24 Bewertungen über uns"
              class="social"
            />
          </a>
          <div>
            <a
              href="https://www.instagram.com/austumzuege/"
              rel="noreferrer"
              target="_blank"
              title="Unsere Instagramseite"
            >
              <img
                src="assets/img/instagram-icon.png"
                class="social"
                alt="Bild Link zu Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/Austumzuege/"
              rel="noreferrer"
              target="_blank"
              title="Unsere Facebookseite"
            >
              <img
                src="assets/img/facebook-icon.png"
                class="social"
                alt="Bild Link zu Facebook"
              />{" "}
            </a>
            <br />
            <br />
            <a
              href="https://www.clemensfabig.com"
              target="_blank"
              rel="noreferrer"
              title="Webdesign made by Clemens Fabig"
            >
              Made with ❤ by Clemens Fabig
            </a>
            <br />
            <br />
            <a
              href="rechtliches/impressum.html"
              target="_blank"
              rel="noreferrer"
              title="Impressum"
            >
              © 2020, by Alex Aust
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ratgeber;
