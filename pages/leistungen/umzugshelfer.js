import Link from "next/link";
import Head from "next/head";

const Umzugshelfer = () => (
  <div>
    <Head>
      <title>
        Sie benötigen lediglich ein paar helfende Hände für Ihren Umzug? Unsere
        Umzugshelfer stehen Ihnen verlässlich mit Rat und Tat zur Seite.
      </title>
      <meta
        name="description"
        content="Sie brauchen lediglich ein paar helfende Hände bei Ihrem Umzug? Gerne leihen wir Ihnen diese!"
      />
    </Head>
    <div className="hero-head-umzugshelfer">
      <div className="heading">
        <h1>Unsere Umzugshelfer</h1>
        <p>Damit Sie mit Ihrem Umzug nicht alleine im Regen stehen</p>
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
        Sie brauchen noch etwas Hilfe bei Ihrem anstehenden Umzug? Kein Problem!
        Wir haben helfende Hände.
      </h2>
      <br />
      <br />
      <p>
        Seriöse und fleißige Umzugshelfer in Hildesheim gesucht? Sie stecken
        gerade in Ihren Umzugsvorbereitungen und suchen händeringend gute
        Möbelpacker, dann können wir Ihnen weiterhelfen! Sie müssen Ihren Umzug
        in Hildesheim nicht alleine erledigen, holen Sie sich professionelle
        Hilfe von Aust Umzüge. Unsere Umzugshelfer sind Zuverlässig, freundlich
        und ortskundig. Dies garantiert Ihnen einen reibungslosen und schnellen
        Umzug. Wozu wollen Sie alles selber machen? Überlassen Sie die schwere
        Arbeit unserem eingespielten Team. Hier geht alles Hand in Hand und Sie
        brauchen sich einfach nur zurücklehnen und zuschauen, wie der Umzug für
        Sie erledigt wird. Schnell, zuverlässig und garantiert innerhalb der
        vorgegebenen Zeit erreicht alles seinen Bestimmungsort im neuen Zuhause.
        <br />
        <br />
        <br />
        <br />
      </p>

      <h3>Fleißige und zuverlässige Umzugshelfer</h3>
      <br />
      <br />
      <p>
        Ein Umzug ist zeitaufwendig, stressig und kostet viel Kraft. Alles muss
        aus den Schränken geräumt und sicher für den Transport verpackt und in
        Umzugskartons verstaut werden. Umzugskartons müssen beschriftet werden
        und Schubläden sowie Türen an den Schränken abgeklebt werden. Die Couch
        und Sitzpolster müssen eingeschlagen werden, damit diese vor
        Verschmutzungen geschützt sind. All das und noch viel mehr gehört zu
        einer guten Umzugsvorbereitung. Doch dann muss noch alles von A nach B
        geschleppt werden. Wir erledigen das alles für Sie, und zwar zu einem
        absolut fairen Preis. Buchen Sie einfach Ihre Umzugshelfer in Hildesheim
        online über Aust Umzüge und schonen Sie sich und Ihr Portemonnaie.
        <br />
        <br />
        <br />
        <br />
      </p>

      <h3>Kostenlose Angebote mit Festpreisgarantie</h3>
      <br />
      <br />
      <p>
        Bei uns erhalten Sie ein kostenloses und unverbindliches Angebot für
        Ihre Umzugshelfer mit Festpreisgarantie. Unsere Umzugshelfer sorgen für
        einen stressfreien Umzug zum fairen Preis. Wir garantieren Ihnen nicht
        nur einen erstklassigen Umzugsservice mit professionellen Umzugshelfern,
        sondern auch einen günstigen Preis. Fordern Sie jetzt hier bei uns Ihr
        Umzugsangebot an!
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
      </p>
    </div>
  </div>
);

export default Umzugshelfer;
