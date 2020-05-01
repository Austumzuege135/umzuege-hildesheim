import Head from "next/head";

const Leistungen = () => (
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

    <div class="hero-head-leistungen">
      <div class="heading">
        <h1>UMZUG UND ENTRÜMPELUNG</h1>
        <p>UNSERE LEISTUNGEN IM ÜBERBLICK</p>
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

    <section class="customers">
      <h2>Umzüge, Entrümpelung und Haushaltsauflösungen</h2>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-privatumzug.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Privatumzug</h3>
          <p>
            Sie suchen ein seriöses und zuverlässiges Umzugsunternehmen für
            Ihren Privatumzug in Hildesheim? Dann hat Ihre Suche hier und jetzt
            ein Ende. Denn wir von Aust Umzüge sind eine professionelle
            Umzugsfirma aus Hildesheim für kleine und große Privatumzüge in der
            gesamten Region. Ein seriöses Umzugsunternehmen für den Privatumzug
            zu finden, dass dann auch noch preiswert ist, ist wirklich nicht
            einfach. Denn das Angebot ist groß und die Leistungen ganz
            unterschiedlich. Woher soll man dann wissen, ob man auch wirklich
            ein gutes und günstiges Angebot für seinen Umzug erhalten hat?
            Sparen Sie sich die mühevolle Arbeit mit dem Anschreiben der
            einzelnen Umzugsfirmen und dem lästigen Vergleichen der Preise,
            fordern Sie einfach bei uns Ihr kostenloses Umzugsangebot an. Wir
            bieten Ihnen einen erstklassigen Umzugsservice zu einem günstigen
            Preis!
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/privatumzug.html"
            title="Privatumzüge"
          >
            <b>Mehr zu Privatumzügen</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihren Privatumzug"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-firmenumzug.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Firmenumzug</h3>
          <p>
            Sie suchen ein seriöses und zuverlässiges Umzugsunternehmen für
            Ihren Firmenumzug in Hildesheim? Dann sind Sie hier bei Aust Umzüge
            genau richtig. Denn wir sind ein professionelles Umzugsunternehmen
            aus Hildesheim für Firmenumzüge aller Art in der gesamten Region.
            Ein erfahrenes und seriöses Umzugsunternehmen für einen Firmenumzug
            zu finden, ist wirklich nicht einfach. Denn das Angebot auf dem
            Markt ist groß und die angebotenen Leistungen ganz unterschiedlich.
            Einen korrekten Vergleich der Anbieter mit dem gleichen
            Preis-Leistungs-Verhältnis zu machen, ist da nicht leicht. Sparen
            Sie sich die mühevolle Arbeit und fordern Sie bei uns Ihr
            kostenloses Umzugsangebot an. Wir bieten Ihnen einen zuverlässigen
            Umzugsservice zu einem fairen Preis!
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/firmenumzug.html"
            title="Firmenumzug"
          >
            <b>Mehr zu Firmenumzügen</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihren Firmenumzug"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-fernumzug.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Fern und Überseeumzüge</h3>
          <p>
            Sie planen schon seit längerem Ihren Fernumzug und sind jetzt auf
            der Suche nach einem zuverlässigen und preiswerten
            Umzugsunternehmen? Dann sind Sie hier bei Aust Umzüge genau richtig!
            Denn wir realisieren Fernumzüge von Hildesheim aus, oder jeder
            anderen Stadt in Deutschland, europaweit Fernumzüge oder auch
            Überseeumzüge. Ganz gleich ob es sich dabei um einen privaten Umzug
            oder um einen Fernumzug mit der Firma handelt, wir realisieren
            kleine und auch große Fernumzüge – international! Zudem sind wir bei
            internationalen Umzügen mit der Zollabwicklung bestens vertraut und
            verfügen über die nötige Fachkompetenz. Wir bieten Ihnen einen
            kostenlosen Service für die Zollabwicklung von Ihrem Umzugsgut. Wir
            führen seit vielen Jahren erfolgreich Umzüge aller Art in Europa und
            auch weltweit durch und bieten Ihnen einen zuverlässigen
            Umzugsservice für Ihren Fernumzug zu einem fairen Preis!
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/fern-und-ubersee.html"
            title="Fernumzug und Überseeumzug"
          >
            <b>Mehr zu Fern und Überseeumzügen</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihren Fernumzug"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-seniorenumzug.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Seniorenumzug</h3>
          <p>
            Ein Umzug ist Ihnen zu viel und Sie schaffen diesen körperlich
            nicht? So geht es sehr vielen Menschen, vor allem Menschen höheren
            Alters, Senioren die alleine leben. Doch das ist kein Problem, denn
            hier helfen und beraten wir Sie gerne, um Ihren Seniorenumzug für
            Sie so angenehm wie möglich zu gestalten. Bei Seniorenumzügen ist es
            wichtig, dass ein Umzug möglichst stressfrei abläuft. Wir führen
            seit vielen Jahren erfolgreich Seniorenumzüge in Hildesheim und
            Umgebung durch, von klein bis groß. Wir bieten Ihnen einen
            zuverlässigen Umzugsservice für Ihren Umzug zu einem fairen Preis!
            Mit Aust Umzüge sorgenfrei in einen neuen Lebensabschnitt.
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/seniorenumzug.html"
            title="Seniorenumzug"
          >
            <b>Mehr zu Seniorenumzug</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihren Seniorenumzug"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-umzugshelfer.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Umzugshelfer</h3>
          <p>
            Seriöse und fleißige Umzugshelfer in Hildesheim gesucht? Sie stecken
            gerade in Ihren Umzugsvorbereitungen und suchen händeringend gute
            Möbelpacker, dann können wir Ihnen weiterhelfen! Sie müssen Ihren
            Umzug in Hildesheim nicht alleine erledigen, holen Sie sich
            professionelle Hilfe von Aust Umzüge. Unsere Umzugshelfer sind
            Zuverlässig, freundlich und ortskundig. Dies garantiert Ihnen einen
            reibungslosen und schnellen Umzug. Wozu wollen Sie alles selber
            machen? Überlassen Sie die schwere Arbeit unserem eingespielten
            Team. Hier geht alles Hand in Hand und Sie brauchen sich einfach nur
            zurücklehnen und zuschauen, wie der Umzug für Sie erledigt wird.
            Schnell, zuverlässig und garantiert innerhalb der vorgegebenen Zeit
            erreicht alles seinen Bestimmungsort im neuen Zuhause.
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/umzugshelfer.html"
            title="Umzugshelfer"
          >
            <b>Mehr zu Umzugshelfern</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihre Umzugshelfer"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-halteverbot.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Halteverbot</h3>
          <p>
            Sie stehen kurz vor Ihrem Umzug und müssen noch viel erledigen? Dann
            machen Sie sich Ihren Umzug einfacher, mit einem professionellen
            Umzugsunternehmen. Fleißige Umzugshelfer von Aust Umzüge erledigen
            den Umzug in Hildesheim und Umgebung im Handumdrehen für Sie! Sie
            wohnen städtisch und in einer dicht bebauten Straße mit wenigen
            Parkmöglichkeiten? Was machen Sie dann am Umzugstag, wo parken Sie
            den Transporter, der Ihr Umzugsgut von A nach B bringen soll? Für
            jene, die kaum Parkmöglichkeiten vor der Haustür haben, bieten wir
            Ihnen die Einrichtung einer Halteverbotszone am Umzugstag an. Dies
            erspart Ihnen unnötige Laufwege und Schlepperei am Umzugstag.
            Schließlich muss Ihr gesamtes Hab und Gut verladen werden. Wenden
            Sie sich an uns, wir sind ein erfahrenes Umzugsunternehmen aus
            Hildesheim und haben schon viele Umzüge aller Art erfolgreich
            erledigt.
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/halteverbot.html"
            title="Halteverbot"
          >
            <b>Mehr zum Thema Halteverbot</b>
          </a>
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-malerarbeiten.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Malerarbeiten</h3>
          <p>
            Im Zuge eines Umzugs gibt es immer viel zu tun. Denn nicht nur, dass
            der Umzug selber anstrengend und arbeitsintensiv ist, auch drum
            herum fallen viele Arbeiten an. Das sind zum Beispiel die
            Umzugsvorbereitung, dass Renovieren oder Streichen der alten Wohnung
            sowie die Malerarbeiten in der neuen Wohnung. Der Vermieter kann bei
            Auszug zwar nicht verlangen, dass Sie alle Wände neu weiß streichen.
            Jedoch ist die Farbauswahl stark eingeschränkt. Alle Farben, die
            nicht hell, dezent oder neutral sind, gilt es daher bei Auszug zu
            streichen. Als Beispiel: Eine dunkelgraue Wand, auch wenn es sich
            dabei nur um ein Teilstück handelt, muss daher bei Auszug weiß
            übergestrichen werden. Wir realisieren nicht nur Umzüge aller Art
            zum günstigen Preis, sondern auch die anfallenden Malerarbeiten.
            Sparen Sie sich daher die mühevolle Arbeit mit dem Anschreiben der
            einzelnen Malerfirmen und dem lästigen Vergleichen der Preise,
            fordern Sie einfach bei uns Ihr kostenloses Angebot an. Wir bieten
            Ihnen einen erstklassigen Umzugsservice und professionelle
            Malerarbeiten zu einem günstigen Preis!
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/malerarbeiten.html"
            title="Malerarbeiten"
          >
            <b>Mehr zu den Malerarbeiten</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für anstehende Malerarbeiten"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-umzugsberatung.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Umzugsberatung</h3>
          <p>
            Die Arbeit bei einem Umzug wird oft unterschätzt und fängt schon
            viele Wochen vorher an. Doch womit beginnt man und wann? Damit Sie
            bei Ihrem Umzug nichts vergessen und Sie sich Stress und unnötige
            Kosten sparen können, beraten wir Sie gerne umfassend rund um Ihren
            Umzug. Wir nehmen uns die Zeit und beantworten Ihnen alle Fragen,
            die im Zusammenhang mit Ihrem Umzug stehen und bieten Ihnen
            Hilfestellungen, damit Ihr Umzug erfolgreich verläuft – ohne
            Zwischenfälle. Denn wir sind eine erfahrene Umzugsfirma aus
            Hildesheim, die weiß worauf es bei einem Umzug ankommt und was
            beachtet werden sollte. Wir realisieren nicht nur Umzüge aller Art
            zum günstigen Preis, sondern bieten Ihnen auch eine professionelle
            Umzugsberatung. Kontaktieren Sie uns jederzeit. Wir bieten Ihnen
            einen erstklassigen Umzugsservice und professionelle
            Umzugsberatungen.
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/umzugsberatung.html"
            title="Umzugsberatung"
          >
            <b>Mehr zu unserer Umzugsberatung</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihre Umzugsberatung"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-moebelaufbau.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Demontage der Möbel</h3>
          <p>
            Zu einem Umzug gehört mehr, als Umzugskartons packen und
            transportieren. Ihre Möbel müssen gut gesichert und meistens vorher
            demontiert werden, damit diese sicher und unbeschädigt ihren
            Bestimmungsort erreichen. In der neuen Wohnung angekommen muss alles
            wieder aufgebaut und eingeräumt werden. Die Demontage der Möbel und
            vor allem die Küchendemontage traut sich nicht jedermann zu und ist
            ein enormer Kraftakt. Aus diesem Grund bieten wir Ihnen mit unserem
            Umzugsservice die Demontage Ihrer Möbel bei einem Umzug mit an.
            Unser fachkundiges und perfekt aufeinander eingespieltes Umzugsteam
            realisiert in kürzester Zeit eine komplette Demontage Ihrer Küche,
            Schrankwand, Sofalandschaften und vieles mehr. Wir bieten Ihnen eine
            preiswerte Demontage und Montage Ihrer Möbel bei Ihrem Umzug in
            Hildesheim. Vertrauen Sie den Profis von Aust Umzüge!
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/demontage_der_moebel.html"
            title="Möbeldemontage"
          >
            <b>Demontage Ihrer Möbel</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihre Möbel"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="display">
        <div>
          <img
            class="display-img"
            src="assets/img/leistungen-haushaltsaufloesung.jpg"
            alt="Simple online Businesscard"
          />
        </div>
        <div>
          <h3>Haushaltsauflösungen</h3>
          <p>
            Sie benötigen Hilfe bei einer Haushaltsauflösung in Hildesheim? Dann
            sind Sie hier bei Aust Umzüge genau an der richtigen Adresse! Denn
            als professionelles Umzugsunternehmen aus Hildesheim kümmern wir uns
            nicht nur um Umzüge und der Gleichen sondern führen auch
            Haushaltsauflösungen jeder Art durch. Haushaltsauflösungen sind oft
            emotional, denn sie finden meistens unfreiwillig statt und an allen
            Gegenständen in einer Wohnung oder einem Haus hängt eine Geschichte.
            Zudem ist die Auflösung einer Wohnung oder eines Hauses eine
            körperlich sehr große Anstrengung. Es muss alles raus transportiert
            werden, daher ist es für viele Menschen besser, wenn diese schweren
            Arbeiten ein seriöses Unternehmen übernimmt. Kontaktieren Sie uns
            jederzeit, wir übernehmen die Haushaltsauflösung und erledigen
            professionell und nach Absprache alles für Sie.
          </p>
          <br />
          <br />
          <a
            class="button"
            href="leistungen/haushaltsaufloesungen.html"
            title="Haushaltsauflösungen"
          >
            <b>Hier erfahren Sie mehr</b>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <a
            class="button"
            href="kostenloses-angebot.html"
            title="Kostenlosees Angebot für Ihre Haushaltsauflösung"
          >
            <b>Zum kostenlosen Angebot</b>
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>
      <br />
    </section>
    <div class="wrapper">
      <br />
      <br />
      <br />
      <br />
      <h2>Was Sie suchen ist nicht dabei?</h2>
      <p>
        Kein Problem. Kontaktieren Sie uns Direkt und wir geben unser Bestes
        auch Ihr Problem zu lösen!
      </p>
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

export default Leistungen;
