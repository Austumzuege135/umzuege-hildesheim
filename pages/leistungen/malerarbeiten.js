import Link from "next/link";
import Head from "next/head";

const Malerarbeiten = () => (
  <div>
    <Head>
      <title>Aust Umzüge und Haushaltsauflösungen</title>
      <meta
        name="description"
        content="Ärger mit den Wänden in Ihrer alten Wohnung? Auch das übernehmen wir für Sie! Sämtliche Malerarbeiten und Ausbesserungen der Wände übernehmen wir gerne!"
      />
    </Head>
    <div className="hero-head-malerarbeiten">
      <div className="heading">
        <h1>Malerarbeiten</h1>
        <p>Sorgen Sie sich mit uns nicht um etwaige Verluste Ihrer Kaution</p>
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
      <h2>Malerarbeiten bei einem Umzug</h2>
      <br />
      <br />
      <p>
        Im Zuge eines Umzugs gibt es immer viel zu tun. Denn nicht nur, dass der
        Umzug selber anstrengend und arbeitsintensiv ist, auch drum herum fallen
        viele Arbeiten an. Das sind zum Beispiel die Umzugsvorbereitung, dass
        Renovieren oder Streichen der alten Wohnung sowie die Malerarbeiten in
        der neuen Wohnung. Der Vermieter kann bei Auszug zwar nicht verlangen,
        dass Sie alle Wände neu weiß streichen. Jedoch ist die Farbauswahl stark
        eingeschränkt. Alle Farben, die nicht hell, dezent oder neutral sind,
        gilt es daher bei Auszug zu streichen. Als Beispiel: Eine dunkelgraue
        Wand, auch wenn es sich dabei nur um ein Teilstück handelt, muss daher
        bei Auszug weiß übergestrichen werden. Wir realisieren nicht nur Umzüge
        aller Art zum günstigen Preis, sondern auch die anfallenden
        Malerarbeiten. Sparen Sie sich daher die mühevolle Arbeit mit dem
        Anschreiben der einzelnen Malerfirmen und dem lästigen Vergleichen der
        Preise, fordern Sie einfach bei uns Ihr kostenloses Angebot an. Wir
        bieten Ihnen einen erstklassigen Umzugsservice und professionelle
        Malerarbeiten zu einem günstigen Preis!
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Unsere Leistungen rund um Ihren Umzug in Hildesheim</h3>
      <br />
      <br />
      <p>
        Jeder Umzug ist anders und stellt uns jedes Mal vor neue
        Herausforderungen. Das können die örtlichen Gegebenheiten sein, die
        Parkplatzsituation vor der Haustür oder ein knappes Zeitfenster. Für uns
        als erfahrene Umzugsfirma ist das alles kein Problem. Wir haben schon
        unzählige Umzüge in und um Hildesheim realisiert. Wir bieten Ihnen nicht
        nur fleißige und ortskundige Umzugshelfer und den Transporter, sondern
        auch das Umzugsmaterial sowie einen Umzugsservice rund um Ihren Umzug.
        Denn wir liefern Ihnen auf Wunsch auch die Umzugskartons bis in die
        Wohnung und entsorgen nach dem Umzug das genutzte Umzugsmaterial
        ordnungsgemäß für Sie. Neben dem Verpacken des Umzugsguts und dem
        Sichern von Möbelstücken übernehmen wir auf Wunsch auch die Einrichtung
        einer Halteverbotszone für Sie. Zudem erledigen wir sämtliche
        Malerarbeiten vor und auch nach Ihrem Umzug. Wenn Sie Ihr neues Zuhause
        frisch gestrichen haben möchten, dann kontaktieren Sie uns gerne!
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Kostenloses Angebot für Malerarbeiten</h3>
      <br />
      <br />
      <p>
        Für Ihre finanzielle Planungssicherheit während des Umzugs, erhalten Sie
        von uns kostenlose und unverbindliche Angebote für Malerarbeiten rund um
        Ihren Umzug in Hildesheim und der Region. Ganz gleich, ob es sich dabei
        um einen Privatumzug oder Firmenumzug handelt, von uns erhalten Sie
        faire Preise und Angebote mit Festpreisgarantie. Fordern Sie jetzt Ihr
        Malerangebot online bei Aust Umzüge an!
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

export default Malerarbeiten;
