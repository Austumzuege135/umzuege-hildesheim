import Link from "next/link";
import Head from "next/head";

const Einpackservice = () => (
  <div>
    <Head>
      <title>
        Einpacken und Auspacken Ihrer Gegenstände ist oft mit sehr viel Mühe
        verbunden. Alles muss sicher verstaut und geplant werden. Da wir es eh
        schon schleppen werden, packen wir es Ihnen aber auch gerne Fachgerecht
        ein.
      </title>
      <meta
        name="description"
        content="Sie haben gar keine Lust auf die Vorbereitung für Ihren Umzug? Gerne helfen wir Ihnen bereits beim verpacken Ihrer Habseligkeiten, holen Sie sich Ihr kostenloses Angebot für das rundum sorglos Paket"
      />
    </Head>
    <div className="hero-head-einpackservice">
      <div className="heading">
        <h1>UNSER EINPACKSERVICE</h1>
        <p>GERNE HELFEN WIR IHNEN AUCH VOR UND NACH DEM UMZUG</p>
      </div>
    </div>
    <div className="seperator">
      <h3>
        <Link href="/kostenloses-angebot">
          <a title="Zum kostenlosen Angebot">
            <img
              src="/static/img/message-icon.png"
              alt="Schreiben Sie uns eine Nachricht"
            />
            Kostenloses Angebot erhalten
          </a>
        </Link>
      </h3>
    </div>
    <div className="wrapper">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>
        Umziehen kann sehr stresig sein, deswegen ist es unsere Aufgabe Ihnen
        bei Bedarf alles abzunehmen.
      </h2>
      <br />
      <br />
      <p>
        Sie suchen einen zuverlässigen Partner rund um das Thema Umzug? Bei uns
        sind Sie goldrichtig. Wir kümmern uns nicht nur um den Umzug als sochen,
        sondern, sofern Sie es wünschen, auch um schlichtweg alles andere.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Wo andere passen fangen wir erst an</h3>
      <br />
      <br />
      <p>
        Uns ist es egal, ob Sie ihre Möbel selbst auf- und abbauen, Ihre
        persönlichen Gegenstände ein- und auspacken wollen oder schlichtweg ein
        paar helfende Hände bei Ihrem Umzug benötigen. <br />
        Gerne unterbreiten wir Ihnen Ihr Angebot für Ihren maßgeschneiderten und
        möglichst stressfreien Umzug, passend zu Ihrem Budget.
        <br />
        Unser Einpackservice ist 100% zuverlässig und diskret.
      </p>
      <br />
      <br />
      <br />
      <br />

      <Link href="/leistungen">
        <a
          className="button"
          title="Zurück zu Leistungen für Umzüge und Haushaltsauflösungen"
        >
          <b>Zurück zur Übersicht</b>
        </a>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link href="/kostenloses-angebot">
        <a
          className="button"
          title="Kostenlosees Angebot für Ihren Privatumzug"
        >
          <b>Zum kostenlosen Angebot</b>
        </a>
      </Link>
      <br />
      <br />
      <br />
    </div>
  </div>
);

export default Einpackservice;
