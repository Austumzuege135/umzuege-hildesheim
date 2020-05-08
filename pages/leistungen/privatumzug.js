import Head from "next/head";
import Link from "next/link";

const Privatumzug = () => (
  <div>
    <Head>
      <title>Aust Umzüge und Haushaltsauflösungen</title>
      <meta
        name="description"
        content="Sie möchten Ihren persöhnlichen Haushalt an einen anderen Ort verlagern? Für Ihren Privatumzug unterbreiten wir Ihnen gerne Ihr kostenloses Angebot!"
      />
    </Head>

    <div className="hero-head-privatumzug">
      <div className="heading">
        <h1>PRIVATUMZÜGE</h1>
        <p>DAMIT SIE SICH DEN STRESS SPAREN</p>
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
        Wir sind Ihr verlässlicher Partner um Ihren privaten Umzug entspannt zu
        gestalten
      </h2>
      <br />
      <br />
      <p>
        Sie suchen ein seriöses und zuverlässiges Umzugsunternehmen für Ihren
        Privatumzug in Hildesheim? Dann hat Ihre Suche hier und jetzt ein Ende.
        Denn wir von Aust Umzüge sind eine professionelle Umzugsfirma aus
        Hildesheim für kleine und große Privatumzüge in der gesamten Region. Ein
        seriöses Umzugsunternehmen für den Privatumzug zu finden, dass dann auch
        noch preiswert ist, ist wirklich nicht einfach. Denn das Angebot ist
        groß und die Leistungen ganz unterschiedlich. Woher soll man dann
        wissen, ob man auch wirklich ein gutes und günstiges Angebot für seinen
        Umzug erhalten hat? Sparen Sie sich die mühevolle Arbeit mit dem
        Anschreiben der einzelnen Umzugsfirmen und dem lästigen Vergleichen der
        Preise, fordern Sie einfach bei uns Ihr kostenloses Umzugsangebot an.
        Wir bieten Ihnen einen erstklassigen Umzugsservice zu einem günstigen
        Preis!
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Unsere Leistungen für Ihren Privatumzug</h3>
      <br />
      <br />
      <p>
        Ob ein Umzug mit der ganzen Familie oder ein Umzug für eine Person
        alleine, jeder Umzug ist anders und es gibt immer wieder neue
        Herausforderungen. Das können die örtlichen Gegebenheiten sein, wie eine
        Dachgeschosswohnung ohne Fahrstuhl oder es gibt keine Parkmöglichkeit
        vor der Haustür für den Umzugswagen. Manchmal ist es aber auch der
        Zeitdruck, es muss dann alles ganz schnell und unbedingt innerhalb eines
        festen Zeitfensters erledigt werden. Für uns ist das alles kein Problem.
        Wir haben schon unzählige Privatumzüge in und um Hildesheim realisiert.
        Wir bieten Ihnen nicht nur fleißige und ortskundige Umzugshelfer und den
        Transporter, sondern auch das Umzugsmaterial. Denn wir liefern Ihnen auf
        Wunsch auch die Umzugskartons, Kleiderboxen und Polstermaterial bis in
        die Wohnung und entsorgen nach dem Umzug das genutzte Umzugsmaterial
        ordnungsgemäß für Sie. Neben dem Verpacken des Umzugsguts und dem
        Sichern von Möbelstücken übernehmen wir auf Wunsch auch die Einrichtung
        einer Halteverbotszone für Sie.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Gratis Angebot mit Festpreisgarantie</h3>
      <br />
      <br />
      <p>
        Damit Sie finanzielle Planungssicherheit haben, erhalten Sie von uns
        kostenlose und unverbindliche Angebote für Ihren Privatumzug oder
        Firmenumzug mit Festpreisgarantie. Auf uns und unsere günstigen Preise
        können Sie sich verlassen. Fordern Sie jetzt Ihr Umzugsangebot online
        bei uns an!
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

export default Privatumzug;
