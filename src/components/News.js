import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
export default class News extends Component {
  //   static propTypes = {second: third}
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Steve Dent",
      title:
        "Porsche Taycans will charge faster and go farther with latest update",
      description:
        "Porsche is releasing a comprehensive dealer-installed update to its sporty Taycan EV that provides a substantial range boost, faster charging, updated infotainment features and more, The Drive reported. The changes are available for free to all Taycans ever m…",
      url: "https://www.engadget.com/porsche-taycans-will-charge-faster-and-go-farther-with-latest-ota-updates-082654912.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-07/da414940-07ff-11ed-bf9f-a76e168ce897",
      publishedAt: "2022-07-20T08:26:54Z",
      content:
        "Porsche is releasing a comprehensive dealer-installed update to its sporty Taycan EV that provides a substantial range boost, faster charging, updated infotainment features and more, The Drive report… [+1948 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Thailand admits to using phone spyware, cites national security - Reuters",
      description:
        "A Thai minister has admitted the country uses surveillance software to track individuals in cases involving national security or drugs, amid revelations that government critics' phones had been hacked using the Israeli-made Pegasus spyware.",
      url: "https://www.reuters.com/world/asia-pacific/thailand-admits-using-phone-spyware-cites-national-security-2022-07-20/",
      urlToImage:
        "https://www.reuters.com/resizer/LWrm3-E5XNkC4cX4F9t_qfPUsRo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C6XIAMZZXFJYVJM6E7RC3BERA4.jpg",
      publishedAt: "2022-07-20T09:45:00Z",
      content:
        "BANGKOK, July 20 (Reuters) - A Thai minister has admitted the country uses surveillance software to track individuals in cases involving national security or drugs, amid revelations that government c… [+2528 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Alex Hern",
      title: "TikTok’s privacy problem isn’t what you think",
      description:
        "The Chinese app’s real problem is not its aggressive data collection. But it is a fool’s errand to prove that the tech giant is a threat to the west<ul><li>Don’t get TechScape delivered to your inbox? Sign up here</li></ul>What’s the problem with TikTok? It’s…",
      url: "https://amp.theguardian.com/technology/2022/jul/20/tiktoks-privacy-problem-isnt-what-you-think",
      urlToImage:
        "https://i.guim.co.uk/img/media/788039dc6c19df33a2b703a6634fb073ddc32cc5/0_184_5082_3049/master/5082.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ee7db43639221fca63c1a7441102b175",
      publishedAt: "2022-07-20T10:40:23Z",
      content:
        "Whats the problem with TikTok? Its a harder question to answer than it seems.\r\nThe social video app, which has joined Facebook/Instagram, YouTube and Twitter in the list of societally important socia… [+7634 chars]",
    },
    {
      source: {
        id: null,
        name: "Entrepreneur",
      },
      author: "Jea Yu",
      title: "PayPal Stock is Attempting to Put in the Floor",
      description:
        "Digital payments platform PayPal, Inc. (NASDAQ: PYPL) shares have fallen (-62%) on the year and back below its 2020 pandemic lows. The Company enjoyed accelerated growth during the pandemic but...",
      url: "https://www.entrepreneur.com/article/431761",
      urlToImage:
        "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-431761.jpeg",
      publishedAt: "2022-07-20T05:00:00Z",
      content:
        "Digital payments platform PayPal, Inc. (NASDAQ: PYPL) shares have fallen (-62%) on the year and back below its 2020 pandemic lows. The Company enjoyed accelerated growth during the pandemic but now c… [+4845 chars]",
    },
    {
      source: {
        id: null,
        name: "Hackaday",
      },
      author: "Lewin Day",
      title: "Porting Doom But In The Opposite Direction",
      description:
        "Doom was first released for MS-DOS, and is one of the pillar titles of the broader first-person-shooter genre. It’s also become a bit of a meme for being ported to any and every weird platfor…",
      url: "https://hackaday.com/2022/07/20/porting-doom-but-in-the-opposite-direction/",
      urlToImage:
        "https://hackaday.com/wp-content/uploads/2022/07/Doom-RPG-01-Entrance-All-Secrets-No-Commentary-0-50-screenshot-e1658291272657.png",
      publishedAt: "2022-07-20T08:00:41Z",
      content:
        "Doom was first released for MS-DOS, and is one of the pillar titles of the broader first-person-shooter genre. It’s also become a bit of a meme for being ported to any and every weird platform under … [+1087 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Mark Coppock",
      title: "MSI Creator Z16P review: Creators yes, gamers no",
      description:
        "The MSI Creator Z16P is a creative powerhouse, with excellent performance for those who create content for a living. But its gaming chops are underwhelming.",
      url: "https://www.digitaltrends.com/computing/msi-creator-z16p-review/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/07/msi-creator-z16p-featured-e1657738979557.jpg?p=1",
      publishedAt: "2022-07-20T10:15:12Z",
      content:
        "Laptops designed for creative professionals have become extremely popular over the last several years. Every manufacturer has a line or two aimed at creative work, none more so than MSI with its aptl… [+18721 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Andy Boxall",
      title:
        "Nothing Phone 1 review: Get past the hype, and the Phone 1 shines",
      description:
        "The Nothing Phone 1 is instantly recognizable due to those eye-catching flashing LEDs on the back, but what's the phone like to actually live with?",
      url: "https://www.digitaltrends.com/mobile/nothing-phone-1-review/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/07/Nothing-Phone-1-Glyph-Back-Black.jpg?p=1",
      publishedAt: "2022-07-20T10:00:18Z",
      content:
        "Trying to separate the Nothing Phone 1 from the hype around it is a difficult task. The involvement of Carl Pei, the OnePlus co-founder with a significant following in the tech community, has meant a… [+20880 chars]",
    },
    {
      source: {
        id: null,
        name: "Every.to",
      },
      author: "Brie Wolfson",
      title: "What I Miss About Working at Stripe",
      description: "Nostalgia for another way of working",
      url: "https://every.to/p/what-i-miss-about-working-at-stripe",
      urlToImage:
        "https://d24ovhgu8s7341.cloudfront.net/uploads/post/cover/2217/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
      publishedAt: "2022-07-20T00:23:44Z",
      content:
        "Hello, Every readers! \r\nWhen writer and researcher Brie Wolfsonthinks back on her time working at Stripe, the thing that stands out to her is that people really cared about the work. Cared enough to … [+12873 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Malte Kirchner",
      title:
        "iPhone 14: Produktionsstart laut Analyst unter erschwerten Bedingungen",
      description:
        "Bei einigen Vorlieferanten Apples für das iPhone 14 hakt es laut Analyst Ming-Chi Kuo noch. Welche Auswirkungen das auf den Produktionsstart haben könnte.",
      url: "https://www.heise.de/news/iPhone-14-Produktionsstart-laut-Analyst-unter-erschwerten-Bedingungen-7184603.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/7/9/0/7/0/IMG_0012-92dbe1caefcdf3b0.jpg",
      publishedAt: "2022-07-20T11:03:00Z",
      content:
        "Angesichts der anhaltenden Lieferketten-Probleme sieht sich Apple auch beim iPhone 14 einigen Widrigkeiten ausgesetzt. Mehrere Hersteller von Komponenten für das neue Smartphone können angeblich nich… [+1607 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title: "Jailbreak für iOS 15 und iPadOS 15 im Anflug",
      description:
        "Das Katz-und-Maus-Spiel um die iPhone-Abdichtung geht weiter. Das Odyssey Team will demnächst mit Cheyote auch iOS 15 und das iPhone 13 unterstützen.",
      url: "https://www.heise.de/news/Jailbreak-fuer-iOS-15-und-iPadOS-15-im-Anflug-7184336.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/5/7/8/9/2/4/cheyote_jailbreak-59336779c2ebcbb3.png",
      publishedAt: "2022-07-20T08:23:00Z",
      content:
        "Fans von Jailbreaks haben unter iOS 15 und iPadOS 15 bislang kein Glück. Trotz der Tatsache, dass die Betriebssysteme bereits in wenigen Monaten von Apple durch Version 16 abgelöst werden sollen, feh… [+2153 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "iFixit teardown shows there’s not much inside the new M2 MacBook Air",
      description:
        "The new M2 MacBook Air is finally here. And while some customers won’t get their hands on it for another month, those who bought it during pre-order have now received their new laptop. iFixit also got its hands on the M2 MacBook Air to show us a full teardown…",
      url: "https://9to5mac.com/2022/07/19/ifixit-teardown-m2-macbook-air/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/M2-MacBook-Air-iFixit-teardown.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-07-20T02:55:07Z",
      content:
        "The new M2 MacBook Air is finally here. And while some customers won’t get their hands on it for another month, those who bought it during pre-order have now received their new laptop. iFixit also go… [+3696 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Netflix’s new ad-supported plan won’t have full catalog available",
      description:
        "Netflix has been struggling recently as the company lost over 200,000 subscribers earlier this year, which resulted in the company’s stock going down. In an attempt to regain subscribers, Netflix has confirmed that it will launch a cheaper ad-supported plan. …",
      url: "https://9to5mac.com/2022/07/19/netflix-ad-supported-plan-wont-have-full-catalog/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/netflix-ad-supported-plan.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-07-20T00:41:43Z",
      content:
        "Netflix has been struggling recently as the company lost over 200,000 subscribers earlier this year, which resulted in the company’s stock going down. In an attempt to regain subscribers, Netflix has… [+2494 chars]",
    },
    {
      source: {
        id: "spiegel-online",
        name: "Spiegel Online",
      },
      author: "DER SPIEGEL",
      title:
        "Google lässt Prototypen seiner neuen Augmented-Reality-Brille im Alltag testen",
      description:
        "Navigation und Echtzeitübersetzungen direkt im Blickfeld – wie gut klappt das? Google will ab August einige Dutzend Menschen mit einer früheren Version einer neuen Datenbrille auf die Straße schicken.",
      url: "https://www.spiegel.de/netzwelt/gadgets/google-laesst-prototypen-seiner-neuen-augmented-reality-brille-im-alltag-testen-a-9e74c465-ef7d-4cf7-9f7c-da92bd5c84c9",
      urlToImage:
        "https://cdn.prod.www.spiegel.de/images/378c40b8-3f7f-4059-af4c-2a399d2d406b_w1129_r1.77_fpx44.03_fpy55.01.jpg",
      publishedAt: "2022-07-20T09:26:45Z",
      content:
        "Google ist mit der Entwicklung seiner neuen Augmented-Reality-Brille weit genug vorangekommen, um Prototypen öffentlich zu testen. Einige Dutzend Mitarbeiterinnen und Mitarbeiter sowie ausgewählte Te… [+2317 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Amber Neely)",
      title:
        "'Ted Lasso' cast in 'mourning' as filming for third season wraps up",
      description:
        'The stars of "Ted Lasso" are preparing to wrap up the wildly popular Apple TV+ sports comedy as Apple has not renewed the series for a fourth season.While the cast and crew began filming the third, and presumed final, season of "Ted Lasso" on March 6, it seem…',
      url: "https://appleinsider.com/articles/22/07/20/ted-lasso-cast-in-mourning-as-filming-for-third-season-wraps-up",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/40473-77970-yeikes-xl.jpg",
      publishedAt: "2022-07-20T00:58:30Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1572 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Christine McKee)",
      title:
        "Get up to $200 in Samsung credit to preorder upcoming Galaxy Fold, Watch devices",
      description:
        "Samsung's August Unpacked Event is almost here, and for a limited time you can secure a Samsung credit of up to $200 to be used on upcoming Galaxy devices.Get a $200 credit to use on 2022 Galaxy Fold devices ahead of the Unpacked event.Samsung's Galaxy Unpack…",
      url: "https://appleinsider.com/articles/22/07/20/get-up-to-200-in-samsung-credit-to-preorder-upcoming-galaxy-fold-watch-devices",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/49516-96849-galaxy-unpacked-credit-xl.jpg",
      publishedAt: "2022-07-20T01:37:03Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+912 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "小暮ひさのり",
      title:
        "早ければ今年中も？ M2 Pro・M2 Max版MacBook Proっていつ頃発売か気になるよね！",
      description:
        "Apple関連の情報でおなじみ、BloombergのMark Gurman（マーク・ガーマン）記者によると、より高性能なM2プロセッサ搭載の14インチ、16インチMacBook Proはすでに開発中。2022年秋から2023年春の間に発売される可能性があると述べています。",
      url: "https://www.gizmodo.jp/2022/07/macbook-pro-m2-pro-max.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2022/07/20/2022-07-20mak00-w960.jpg",
      publishedAt: "2022-07-20T09:30:00Z",
      content:
        "M2MacBook Air M2 ProM2 MaxMacBook Pro\r\nAppleBloombergMark GurmanM21416MacBook Pro20222023\r\n20223\r\nMacBookM2 ProM2 MaxMacBook Pro\r\nSource: Bloomberg, 9to5mac",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Max McHone",
      title:
        "Refurb Apple Watch Sale Offers Prices From $95 Today Only at Woot - CNET",
      description:
        "If you don't mind a few cosmetic blemishes, this one-day sale offers the lowest prices you'll find on various Apple Watch models right now.",
      url: "https://www.cnet.com/deals/refurb-apple-watch-sale-offers-prices-from-95-today-only-at-woot/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/c3c1c93b9a83cef90054e965a3d880f665a2a6d6/2020/09/15/60a76ee5-e1ae-4362-91fa-29a9adccb722/011-apple-event-9-15-2020-apple-watch-series-6.png?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-07-20T10:21:52Z",
      content:
        "Apple products, even older models, tend to hold their prices over the years so it can be hard to find a discount on the device you want. For that reason, going for a refurbished model is often the wa… [+2066 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Antoine Gautherie",
      title:
        "Arc A750 : que vaut la prochaine GPU d’Intel face à la RTX 3060 d’Nvidia ?",
      description:
        "Cette carte graphique devrait débarquer cet été, signant le début d'un grand bouleversement dans le monde du hardware.\nArc A750 : que vaut la prochaine GPU d’Intel face à la RTX 3060 d’Nvidia ?",
      url: "https://www.journaldugeek.com/2022/07/20/arc-a750-que-vaut-la-prochaine-gpu-dintel-face-a-la-rtx-3060-dnvidia/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/07/arca750.jpg",
      publishedAt: "2022-07-20T06:30:39Z",
      content:
        "Cette carte graphique devrait débarquer cet été, signant le début d'un grand bouleversement dans le monde du hardware.Intel vient de dévoiler une vidéo de présentation de sa prochaine carte graphique… [+3693 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Desmontan el MacBook Air M2: parecido al iPad en refrigeración y con una curiosa sorpresa",
      description:
        "Ver dentro de los nuevos dispositivos de Apple es ya casi una tradición. En esta ocasión le ha tocado al nuevo MacBook Air M2. Un ordenador que trae algunos cambios de diseño en su interior y un par de sorpresas que no esperábamos.\n<!-- BREAK 1 -->\nNueva suje…",
      url: "https://www.applesfera.com/portatil/desmontan-macbook-air-m2-parecido-al-ipad-refrigeracion-curiosa-sorpresa",
      urlToImage: "https://i.blogs.es/1caf05/hero/840_560.jpeg",
      publishedAt: "2022-07-20T06:28:03Z",
      content:
        "Ver dentro de los nuevos dispositivos de Apple es ya casi una tradición. En esta ocasión le ha tocado al nuevo MacBook Air M2. Un ordenador que trae algunos cambios de diseño en su interior y un par … [+1461 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "El nuevo MacBook Air M2 tiene una “característica” que nadie esperaba y que carga su batería… para siempre",
      description:
        "Mucho se está hablando de los nuevos ordenadores con Apple silicon. Los nuevos MacBook Air M2 están recibiendo atención en forma de reviews, de desmontajes que nos descubren interesantes sorpresas y también de cientos de pruebas que les hacemos los usuarios. …",
      url: "https://www.applesfera.com/curiosidades/nuevo-macbook-air-m2-tiene-caracteristica-que-nadie-esperaba-que-carga-su-bateria-para-siempre",
      urlToImage: "https://i.blogs.es/59ae29/hero/840_560.jpeg",
      publishedAt: "2022-07-20T08:23:40Z",
      content:
        "Mucho se está hablando de los nuevos ordenadores con Apple silicon. Los nuevos MacBook Air M2 están recibiendo atención en forma de reviews, de desmontajes que nos descubren interesantes sorpresas y … [+1573 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Cómo saber la RAM, disco duro, velocidad y demás características de nuestro Mac",
      description:
        "Además de poder decir que nuestro Mac es un MacBook Pro con M1, un MacBook Air M2 o un iMac M1, la configuración interna del dispositivo consta de varios detalles como la memoria RAM, la capacidad del almacenamiento, su velocidad y otras características. Cara…",
      url: "https://www.applesfera.com/tutoriales/como-saber-ram-disco-duro-velocidad-demas-caracteristicas-nuestro-mac",
      urlToImage: "https://i.blogs.es/04623f/hero/840_560.jpeg",
      publishedAt: "2022-07-20T07:32:17Z",
      content:
        "Además de poder decir que nuestro Mac es un MacBook Pro con M1, un MacBook Air M2 o un iMac M1, la configuración interna del dispositivo consta de varios detalles como la memoria RAM, la capacidad de… [+3197 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "El flexo de Xiaomi que se integra en HomeKit baja de precio en MediaMarkt y marca mínimo histórico",
      description:
        "Xiaomi es una marca con productos de todo tipo que suelen tener una buena relación calidad-precio. En su catálogo podemos encontrar algunos dispositivos que se integran con HomeKit, como el flexo Xiaomi Mi Smart LED Desk Lamp Pro, que se puede adquirir en Med…",
      url: "https://www.applesfera.com/seleccion/flexo-xiaomi-que-se-integra-homekit-baja-precio-mediamarkt-marca-minimo-historico",
      urlToImage:
        "https://i.blogs.es/41ff54/xiaomi-flexo-escritorio-02/840_560.jpg",
      publishedAt: "2022-07-20T08:45:47Z",
      content:
        "Xiaomi es una marca con productos de todo tipo que suelen tener una buena relación calidad-precio. En su catálogo podemos encontrar algunos dispositivos que se integran con HomeKit, como el flexo Xia… [+1287 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "El cargador para coche MFi de Belkin recarga el iPhone rápidamente y está de oferta a su precio más bajo",
      description:
        "Es habitual que los coches, desde hace unos años, vengan con conectores USB para poder recargar la batería de dispositivos, aunque si el coches es relativamente viejo puede que no tenga la potencia suficiente para recargar el móvil y solo funciones con memori…",
      url: "https://www.applesfera.com/seleccion/cargador-para-coche-mfi-belkin-recarga-iphone-rapidamente-esta-oferta-a-su-precio",
      urlToImage: "https://i.blogs.es/b284cd/cargador-belkin/840_560.jpg",
      publishedAt: "2022-07-20T05:36:59Z",
      content:
        "Es habitual que los coches, desde hace unos años, vengan con conectores USB para poder recargar la batería de dispositivos, aunque si el coches es relativamente viejo puede que no tenga la potencia s… [+1554 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Andreas Donath",
      title:
        "Qualitätsprobleme: Mitternachtsblaues Macbook Air ist nicht kratzfest",
      description:
        "Beim neuen Macbook Air in der Farbe Mitternachtsblau scheint schon nach kurzer Benutzung an einigen Stellen die Farbe abzuplatzen. (Macbook Air, Apple)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fqualitaetsprobleme-mitternachtsblaues-macbook-air-ist-nicht-kratzfest-2207-167006.html&referer=https%3A%2F%2Ft.co%2F06e102e038",
      urlToImage: null,
      publishedAt: "2022-07-20T05:33:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title:
        "Uber Ordered to Pay More Than $2 Million USD to Riders With Disabilities Over Lawsuit",
      description:
        "Uber has settled with the Department of Justice over claims that the company violated the Americans with Disabilities Act by charging disabled passengers fees when they take longer than two minutes to get into vehicles. Uber will credit double the amount of w…",
      url: "https://hypebeast.com/2022/7/uber-2-million-lawsuit-disabilities-waiting-charges",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Ftw-uber-2-million-lawsuit-disabilities-waiting-charges.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-07-20T04:34:48Z",
      content:
        "Uber has settled with the Department of Justice over claims that the company violated the Americans with Disabilities Act by charging disabled passengers fees when they take longer than two minutes t… [+1237 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title:
        "Master & Dynamic and Mercedes-AMG Deliver Range of High-Performance Earphones",
      description:
        "Following the debut of its custom-engineered face shield for Balenciaga's 51st Couture show, Mercedes-AMG partners with Master & Dynamic for a special-edition series of earphones and headphones. Inspired by the \"power, meticulous workmanship, and daring desig…",
      url: "https://hypebeast.com/2022/7/master-dynamic-mercedes-amg-collab-earphone-sound-collection-release-info",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F07%2Fmaster-dynamic-mercedes-amg-collab-earphone-sound-collection-release-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-07-20T03:24:26Z",
      content:
        "Following the debut of its custom-engineered face shield for Balenciaga’s 51st Couture show, Mercedes-AMG partners with Master &amp; Dynamic for a special-edition series of earphones and headphones. … [+1184 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Romain Vitt",
      title:
        "Pourquoi vous ne devez pas utiliser votre smartphone dans l’eau (même s’il est étanche)",
      description:
        "Pendant l’été les occasions de se retrouver dans l’eau se multiplient. Et quand on a un téléphone capable de capturer des photos et vidéos de qualité, on est forcément tentés de l’utiliser dans l’eau. On vous le déconseille, même si votre téléphone étanche. E…",
      url: "https://www.presse-citron.net/pourquoi-vous-ne-devez-pas-utiliser-votre-smartphone-dans-leau-meme-sil-est-etanche/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/07/smartphone-eau.jpg",
      publishedAt: "2022-07-20T10:45:36Z",
      content:
        "La démocratisation du smartphone a permis de se passer du bon vieil appareil photo compact pendant les vacances. En voyage, à moins dêtre photographe ou vidéaste professionnel ou semi-professionnel, … [+5652 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "鈴木悠斗",
      title:
        "古いPCを有効活用「ChromeOS Flex」、テレワークの悩みなど--週間人気記事をナナメ読み（7月13日～7月19日）",
      description:
        "CNET Japanで1週間（2022年7月13日～7月19日）に掲載された記事の中から、特に人気を集めた上位5本の記事をご紹介する。どんな記事が読者の関心を集めたのだろうか。",
      url: "https://japan.cnet.com/article/35190693/",
      urlToImage:
        "https://japan.cnet.com/storage/2022/07/20/26ba74efa15b02fefb730c7a2b878e70/t/640/480/d/20220720_naname_01.jpg",
      publishedAt: "2022-07-20T05:29:00Z",
      content:
        "CNET Japan120227137195\r\nGoogleChromeOS FlexPCMacChromebookOS27\r\n7\r\nAppleAirTagBluetoothApple\r\nCOCOAPCR44\r\nApple WatchwatchOS 9UIiPhoneApple Watch Series 7",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "A coalition representing Apple, Meta, and others asks India to amend its proposed IT rules, including allowing a self-regulatory grievance redressal mechanism (Manish Singh/TechCrunch)",
      description:
        "Manish Singh / TechCrunch:\nA coalition representing Apple, Meta, and others asks India to amend its proposed IT rules, including allowing a self-regulatory grievance redressal mechanism  —  An industry group representing several tech giants has requested the …",
      url: "https://www.techmeme.com/220720/p3",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-691021196.jpg?w=600",
      publishedAt: "2022-07-20T11:05:05Z",
      content:
        "The New Consumer— by Dan Frommer\r\nA publication about how and why people spend their time and money, focusing on the most interesting and innovative companies, people, products, and trends.",
    },
    {
      source: {
        id: null,
        name: "Les Numériques",
      },
      author: "Corentin Bechade",
      title:
        "Actualité : Contraint par l'UE, Google accepte désormais les systèmes de paiement alternatifs sur son Play Store européen",
      description:
        "Google devance le DMA. La nouvelle législation européenne n'est pas encore complètement entrée en vigueur, mais Google va d’ores et déjà accepter les systèmes de paiement alternatifs sur son Play Store.",
      url: "https://www.lesnumeriques.com/telephone-portable/contraint-par-l-ue-google-accepte-desormais-les-systemes-de-paiement-alternatifs-sur-son-play-store-europeen-n188195.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/news/18/188195/26026e50-contraint-google-accepte-desormais-les-systemes-de-paiement-alternatifs-sur-son-play-store-europeen__1200_630__overflow.jpeg",
      publishedAt: "2022-07-20T08:00:00Z",
      content:
        "Google devance le DMA. La nouvelle législation européenne n'est pas encore complètement entrée en vigueur, mais Google va dores et déjà accepter les systèmes de paiement alternatifs sur son Play Stor… [+3485 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Vanessa Friedman",
      title: "C’mon, Apple: Be the New New Celine",
      description:
        "With the metaverse looming, a shift in designer could make a big difference.",
      url: "https://www.nytimes.com/2022/07/20/style/apple-jony-ive-headset.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/07/21/fashion/20unbuttoned-apple1/20unbuttoned-apple1-facebookJumbo.jpg",
      publishedAt: "2022-07-20T10:35:32Z",
      content:
        "Still, Ms. Hankey and Mr. Dye worked alongside Mr. Ive for years on such products as the MacBook Air and the watch, and it seemed as if at least nominally Mr. Ive had maintained his ties as keeper of… [+1689 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "André Westphal",
      title: "Brydge ProDock für MacBooks vorgestellt",
      description:
        "Brydge hat sein neues ProDock für Apple MacBooks vorgestellt. Es handelt sich um eine vertikale Dockingstation mit Thunderbolt 4, deren Preis sich durchaus gewaschen hat. 399,99 US-Dollar fallen für das ProDock an, sodass wohl nur MacBook-Enthusiasten zuschla…",
      url: "https://stadt-bremerhaven.de/brydge-prodock-fuer-macbooks-vorgestellt/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Bryde-Pro-Dock.webp",
      publishedAt: "2022-07-20T09:00:56Z",
      content:
        "Brydge hat sein neues ProDock für Apple MacBooks vorgestellt. Es handelt sich um eine vertikale Dockingstation mit Thunderbolt 4, deren Preis sich durchaus gewaschen hat. 399,99 US-Dollar fallen für … [+2266 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Cassim Ketfi",
      title:
        "Google nous prévient que ses nouvelles lunettes connectées vont fuiter",
      description:
        "Google relance son projet de lunettes de réalité augmentée avec une phase de test grandeur réelle des prototypes.La réalité augmentée est sur toutes les bouches quand il s’agit des rumeurs entourant Apple et Meta, mais les deux acteurs ne sont pas les seuls à…",
      url: "https://www.frandroid.com/marques/google/1407103_google-nous-previent-que-ses-nouvelles-lunettes-connectees-vont-fuiter",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/07/google-lunettes-ar-prototype-final.jpg",
      publishedAt: "2022-07-20T06:00:36Z",
      content:
        "Google relance son projet de lunettes de réalité augmentée avec une phase de test grandeur réelle des prototypes.\r\nSource : Google\r\nLa réalité augmentée est sur toutes les bouches quand il sagit des … [+2067 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Cassim Ketfi",
      title:
        "Snapdragon 8 Gen 2 : on sait quand le prochain fleuron Qualcomm sera dévoilé",
      description:
        "Qualcomm prépare la présentation de son Snapdragon 8 Gen 2, seulement quelques mois après le lancement du 8+ Gen 1.La sortie du nouveau fleuron de Qualcomm se fera plus tôt cette année, comme nous pouvions le supposer. Seulement quelques mois après le lanceme…",
      url: "https://www.frandroid.com/marques/qualcomm/1407123_snapdragon-8-gen-2-on-sait-quand-le-prochain-fleuron-qualcomm-sera-devoile",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2022/07/qualcomm-snapdragon.jpg",
      publishedAt: "2022-07-20T07:13:42Z",
      content:
        "Qualcomm prépare la présentation de son Snapdragon 8 Gen 2, seulement quelques mois après le lancement du 8+ Gen 1.\r\nSource : Qualcomm\r\nLa sortie du nouveau fleuron de Qualcomm se fera plus tôt cette… [+1575 chars]",
    },
    {
      source: {
        id: null,
        name: "Ifanr.com",
      },
      author: "杜沅傧",
      title: "新 MacBook Air 最大的变化是设计，而不是 M2",
      description:
        "散热设计过于简陋。#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      url: "https://www.ifanr.com/1501463",
      urlToImage:
        "https://s3.ifanr.com/wp-content/uploads/2022/07/Snipaste_2022-07-20_09-59-35.jpg",
      publishedAt: "2022-07-20T02:04:20Z",
      content:
        "MacBook Air \r\nMacBook Air \r\n Retina MacBook Pro Air \r\n 2018 MacBook Air Retina \r\nAir Mac\r\n2022MacBook Air MacBook Pro \r\n MacBook Air Air MacBook Pro\r\nM MacBook MacBook Air Pro MacBook \r\n MacBook Pro … [+1145 chars]",
    },
    {
      source: {
        id: null,
        name: "Cnbeta.com",
      },
      author: "raymon725",
      title: "一家银行起诉苹果 指控iPhone的NFC支付系统构成垄断",
      description:
        "对于以构建闭环生态而被大家所熟知的苹果来说，该公司经常被游戏和应用程序开发者吐槽设置围墙，迫使用户为一些本该免费或更实惠的东西支付溢价。但是现在，一家银行也就苹果的“Tap-to-Pay”NFC 支付系统提出了质疑。未来几个月，该公司或面临新的反垄断诉讼。 阅读全文",
      url: "https://www.cnbeta.com/articles/tech/1294533.htm",
      urlToImage:
        "https://static.cnbetacdn.com/article/2022/0720/18564c0628dbd1a.png",
      publishedAt: "2022-07-20T04:04:35Z",
      content:
        "Affinity Credit Union ACUTap-to-Pay\r\niPhone NFC ACU iPhone \r\n 0.15% 10 Android \r\nApple Pay \r\nACU Apple Pay iPhone \r\niPhone \r\nHagens Berman Steve Berman \r\n Apple Pay Android Google Pay Samsung Pay \r\n … [+40 chars]",
    },
    {
      source: {
        id: null,
        name: "Cnbeta.com",
      },
      author: "teikaei",
      title: "Apple Watch帮助缅因州一名女性从致命肿瘤中获救",
      description:
        "Apple Watch被认为拯救了缅因州一名女性的生命。据悉，手表发出的心房颤动警告使得该名女性得到了以手术处理致命肿瘤的救助。5月下旬，67岁的Kim Durkee收到来自她的Apple Watch的多个通知--警告她的心脏处于房颤状态。在不考虑前两晚的结果后，她觉得第三晚的数字有点太高了，这让她感觉到有点不舒服。 阅读全文",
      url: "https://www.cnbeta.com/articles/tech/1294399.htm",
      urlToImage:
        "https://static.cnbetacdn.com/thumb/article/2022/0720/e07b89d5add5ce0.jpg",
      publishedAt: "2022-07-20T00:48:58Z",
      content: "Apple Watch567Kim DurkeeApple Watch--",
    },
    {
      source: {
        id: null,
        name: "Touchlab.jp",
      },
      author: "Nakimo",
      title:
        "【10%OFF】楽天お買い物マラソンでシリーズ最小「Anker 711 Charger」がセール中",
      description:
        '楽天お買い物マラソンで、「Anker 711 Charger (Nano II 30W)」が10%OFF+ポイントで販売されています。 この充電器は、「Anker Nano II 30W」の後継モデルにあたり、充電性能は […]\nThe post 【10%OFF】楽天お買い物マラソンでシリーズ最小「Anker 711 Charger」がセール中 first appeared on Touch Lab - タッチ ラボ.©2019 "Touch Lab - タッチ ラボ".',
      url: "http://touchlab.jp/2022/07/rakuten_marathon_anker711_2022july20/",
      urlToImage:
        "http://touchlab.jp/wp-content/uploads/2022/07/anker_711_charger_10.jpg",
      publishedAt: "2022-07-20T02:05:57Z",
      content:
        "楽天お買い物マラソンで、「Anker 711 Charger (Nano II 30W)」が10%OFF+ポイントで販売されています。\nこの充電器は、「Anker Nano II 30W」の後継モデルにあたり、充電性能はそのままに次のような進化を遂げています：\n<ul>\n<li>小型化：約30%</li>\n<li>軽量化：約47g → 約34g</li>\n</ul>\nこれまで「Anker Nan… [+706 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Scott Nover",
      title: "The NCAA is realigning around two super-conferences",
      description:
        "An interview with Matt Brown of the Extra Points newsletter about USC and UCLA",
      url: "https://qz.com/2190096/the-big-ten-and-sec-could-control-college-sports/",
      urlToImage:
        "https://cms.qz.com/wp-content/uploads/2022/07/GettyImages-1355887893-e1658252389958.jpg?quality=75&strip=all&w=1200&h=630&crop=1",
      publishedAt: "2022-07-20T09:00:18Z",
      content:
        "As the blustery autumn drags on in Ann Arbor, Michigan, the short walk from my apartment to Michigan StadiumThe Big Housebecomes more difficult. No longer will shorts and a maize and blue t-shirt suf… [+13937 chars]",
    },
    {
      source: {
        id: null,
        name: "01net.com",
      },
      author: "Pierre FONTAINE",
      title:
        "iPhone 14 : les problèmes de production devraient n’avoir qu’un « impact limité »",
      description:
        "Alors que l’arrivée en quantité des nouveaux iPhone 14 et 14 Max semblait menacée par des problèmes dans la chaîne d’approvisionnement d’Apple, Ming-Chi Kuo se veut rassurant. D’après ses sources, l’impact de ces contre-temps sera limité et pourrait être comp…",
      url: "https://www.01net.com/actualites/iphone-14-les-problemes-de-production-devraient-navoir-quun-impact-limite.html",
      urlToImage:
        "https://www.01net.com/app/uploads/2022/06/Apple-IPhone-13-Pro-Max-ligthning.jpg",
      publishedAt: "2022-07-20T06:50:28Z",
      content:
        "Alors que larrivée en quantité des nouveaux iPhone 14 et 14 Max semblait menacée par des problèmes dans la chaîne dapprovisionnement dApple, Ming-Chi Kuo se veut rassurant. Daprès ses sources, limpac… [+4216 chars]",
    },
    {
      source: {
        id: null,
        name: "Noupe.com",
      },
      author: "Yen Pedrajas",
      title: "Graphic Design: Your Ultimate List of Tools and Resources",
      description:
        "We can’t do what we want to do without the aid of tools. Chefs employ fire to conjure up gastronomic wonders in the kitchen. Playing an instrument is an essential part of the music. A bridge that allows people to travel between two points in suspended space m…",
      url: "https://www.noupe.com/design/graphic-design-your-ultimate-list-of-tools-and-resources.html",
      urlToImage:
        "https://www.noupe.com/wp-content/uploads/2022/07/theme-photos-CGpifH3FjOA-unsplash.jpg",
      publishedAt: "2022-07-20T08:05:47Z",
      content:
        "We can't do what we want to do without the aid of tools. Chefs employ fire to conjure up gastronomic wonders in the kitchen. Playing an instrument is an essential part of the music. A bridge that all… [+13868 chars]",
    },
    {
      source: {
        id: null,
        name: "Androidworld.it",
      },
      author: "Alessandro Nodari",
      title:
        "WhatsApp è al lavoro sugli avatar: un nuovo modo di essere voi stessi",
      description:
        "Due anni fa Facebook aveva introdotto i suoi avatar, una sorta di clone dei memoji di Apple che potevano, con...\r\nL'articolo WhatsApp è al lavoro sugli avatar: un nuovo modo di essere voi stessi sembra essere il primo su Androidworld.",
      url: "https://www.androidworld.it/app/whatsapp-avatar.html",
      urlToImage:
        "https://www.androidworld.it/wp-content/uploads/2021/09/WhatsApp-Final.png",
      publishedAt: "2022-07-20T06:32:00Z",
      content:
        "Due anni fa Facebook aveva introdotto i suoi avatar, una sorta di clone dei memoji di Apple che potevano, con un po' di fatica, essere inseriti anche su WhatsApp.\r\nLa società di Mark Zuckerberg crede… [+1795 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (John Ballard)",
      title: "Looking for a Dividend Growth Stock? Look No Further Than Apple",
      description:
        "Investing in dividend growth stocks can significantly pad your returns over many years.",
      url: "https://www.fool.com/investing/2022/07/20/looking-for-a-dividend-growth-stock-look-apple/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/690804/investor-using-a-smartphone.jpg",
      publishedAt: "2022-07-20T09:46:00Z",
      content:
        "Apple(AAPL 2.67%) has been on a mission to return a substantial amount of its extra cash to shareholders. Although the stock currently pays a low dividend yield of 0.6%, the long-term reward of ownin… [+3357 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Sean Williams)",
      title:
        "5 Stocks Are Netting Warren Buffett a Combined $4.25 Billion in Annual Dividend Income",
      description:
        "Berkshire Hathaway will collect more than $6 billion in dividend income over the next 12 months. Just five holdings will account for about $4.25 billion.",
      url: "https://www.fool.com/investing/2022/07/20/5-stocks-warren-buffett-43-billion-dividend-income/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/690486/warren-buffett-brka-brkb-berkshire-hathaway-motley-fool5.jpg",
      publishedAt: "2022-07-20T09:06:00Z",
      content:
        "Since taking over as CEO of conglomerate Berkshire Hathaway(BRK.A 2.57%) (BRK.B 2.64%) in 1965, Warren Buffett has put on an investing clinic. The Oracle of Omaha, as he's come to be known, has creat… [+8296 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Will Healy)",
      title: "What TSMC Tells Us About the State of the Chip Industry",
      description:
        "Taiwan Semiconductor Manufacturer's earnings report indicates that the chip industry does not face the distress that many fear.",
      url: "https://www.fool.com/investing/2022/07/20/what-tsmc-tells-us-about-the-chip-industry/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/690387/technicianrepairscircuitboard.jpg",
      publishedAt: "2022-07-20T10:35:00Z",
      content:
        "Taiwan Semiconductor Manufacturing(TSM 3.08%), better known as TSMC, delivered strong earnings in its second-quarter report released last week. Slowing consumer spending and the cyclical nature of th… [+3872 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Justin Pope)",
      title: "3 Surefire Financials Stocks to Buy as You Near Retirement",
      description:
        "Need dependable stocks for your retirement but still want upside? Say no more.",
      url: "https://www.fool.com/investing/2022/07/20/3-surefire-financials-stocks-to-buy-as-you-near-re/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/688309/retired-couple-looks-at-papers.jpg",
      publishedAt: "2022-07-20T10:45:00Z",
      content:
        "Retiring means you switch your investor hat from accumulation to preservation, generating enough growth to keep inflation from eating at your wealth while avoiding the risk of ruining your retirement… [+4419 chars]",
    },
    {
      source: {
        id: null,
        name: "Creative Bloq",
      },
      author: "Jim McCauley",
      title: "Here's what you shouldn't do with your Apple tech",
      description: "Honestly I'm surprised about the rice thing.",
      url: "https://www.creativebloq.com/news/apple-tech-tips",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/LnZ6XVMbwJNE5HfSZpCRUm-1200-80.jpg",
      publishedAt: "2022-07-20T06:08:08Z",
      content:
        "Everybody knows that if you accidentally tip water all over your MacBook Pro or drop your iPhone in a pond, the best way to rescue it is to cover it in rice and let nature take its course, right? But… [+2207 chars]",
    },
    {
      source: {
        id: null,
        name: "Gothamist",
      },
      author: "Samantha Max",
      title:
        "NYPD officer who shot a man six years ago faces final review of his actions",
      description:
        "NYPD directs traffic at Clarendon Road and Flatbush Avenue not far from Delrawn Small's funeral at Harmony Funeral Home.\n \n\nThe case offers a window into the lengthy, complex process that follows killings by police [ more › ]",
      url: "https://gothamist.com/news/nypd-officer-who-shot-a-man-six-years-ago-faces-final-review-of-his-actions",
      urlToImage: "https://cms.prod.nypr.digital/images/332759/fill-1200x650/",
      publishedAt: "2022-07-20T09:01:17Z",
      content:
        "Its a different question than whether the officer committed a crime, Bodah said.\r\nIsaacs was acquitted at trial. That does not bar the CCRB from making a finding of administrative misconduct, excessi… [+2043 chars]",
    },
    {
      source: {
        id: null,
        name: "Nextpit.de",
      },
      author: "Benjamin Lucks",
      title:
        "Video-Bokeh im Vergleich: Welches Handy bietet den besseren Kino-Look?",
      description:
        "Videos mit unscharfem Hintergrund gibt es in immer mehr Handys. Aber welches Modell bietet dabei die beste Leistung?(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
      url: "https://www.nextpit.de/video-bokeh-im-vergleich-dieses-handy-bietet-den-besten-kino-look",
      urlToImage:
        "https://fscl01.fonpit.de/userfiles/7695213/image/video-bokeh-comparison/Kinomodus_DE.jpg",
      publishedAt: "2022-07-20T04:30:00Z",
      content:
        "Mit digitalem Video-Bokeh integrieren immer mehr Hersteller ein wirklich spannendes Feature in ihre Kamera-Smartphones. Dabei erkennen die Handys wie im Porträtmodus für Fotos, was Ihr im Vordergrund… [+10780 chars]",
    },
    {
      source: {
        id: null,
        name: "Nextpit.de",
      },
      author: "Dustin Porth",
      title: "Sommer, Sonne, Bass: JBL Tune 225 bei Media Markt zum Bestpreis!",
      description:
        "Bei Media Markt könnt Ihr aktuell die JBL Tune 225 zum Bestpreis kaufen. Ob sich das Angebot wirklich lohnt, erfahrt Ihr in unserem Deal-Check!(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
      url: "https://www.nextpit.de/sommer-sonne-bass-jbl-tune-225-bei-media-markt-zum-bestpreis",
      urlToImage:
        "https://fscl01.fonpit.de/userfiles/7695213/image/JBL-200-Deal_Check-NextPit.jpg",
      publishedAt: "2022-07-20T09:39:59Z",
      content:
        "Mit den steigenden Temperaturen können wir endlich wieder den Tag draußen verbringen. Ob Fahrrad fahren, am Rhein grillen oder einfach entspannt in der Stadt herumschlendern  in der Natur ist es doch… [+2038 chars]",
    },
    {
      source: {
        id: null,
        name: "DIE WELT",
      },
      author: "Olaf Gersemann, Olaf Gersemann",
      title:
        "„Der Noch-keine-Ferien-Effekt“ – Die aktuellen Corona-Zahlen für Sie erklärt",
      description:
        "Die dritte Omikron-Welle ist in vollem Gange. Olaf Gersemann erklärt und bewertet kurz und kompakt die aktuellen Zahlen. Alles, was Sie am 20. Juli wissen müssen.",
      url: "https://www.welt.de/wirtschaft/article238812729/Die-aktuellen-Corona-Zahlen-im-Ueberblick-Der-Noch-keine-Ferien-Effekt.html",
      urlToImage:
        "https://img.welt.de/img/wirtschaft/mobile238857427/4581352087-ci16x9-w1200/DWO-Teaser-30sek-Corona-Olaf-aw-jpg.jpg",
      publishedAt: "2022-07-20T03:57:50Z",
      content:
        "140.999 Corona-Fälle sind dem RKI gestern gemeldet worden.\r\n Im Vorwochenvergleich ergibt sich ein Plus von elf Prozent.\r\nDer 7-Tage-Schnitt der neuen Fälle hatte sich in der ersten Juli-Hälfte mit n… [+1420 chars]",
    },
    {
      source: {
        id: null,
        name: "DIE WELT",
      },
      author: "Gerhard Hegmann, Gerhard Hegmann",
      title:
        "Turbine plus Propeller – der A380 soll die alte Öko-Idee wiederbeleben",
      description:
        "Auf dem Weg zum Null-Emissions-Flugzeug nimmt Airbus die mindestens 40 Jahre alte Open-Rotor-Idee wieder auf. In einem neuen Ansatz wird der Antrieb am Riesenairbus erprobt. Die Ingenieure glauben, für das größte Problem eine Lösung gefunden zu haben.",
      url: "https://www.welt.de/wirtschaft/article240014255/Turbine-plus-Propeller-Airbus-testet-Oeko-Antrieb-am-A380.html",
      urlToImage:
        "https://img.welt.de/img/wirtschaft/mobile240014251/8431351017-ci16x9-w1200/A380-open-fan.jpg",
      publishedAt: "2022-07-20T09:58:21Z",
      content:
        "Die Flugzeughersteller stehen unter immer größerem Druck, umweltfreundlichere Modelle mit möglichst CO-freien Antrieben zu bauen. Auf der Luftfahrtmesse im britischen Farnborough kündigte Airbus jetz… [+3413 chars]",
    },
    {
      source: {
        id: null,
        name: "DIE WELT",
      },
      author: "Frederik Schindler, Frederik Schindler",
      title:
        "„Sammelbecken für Versager, Gangster, Minderbemittelte“, sagt der AfDler beim Austritt",
      description:
        "Mit dem neuen Bundesvorstand unter Chrupalla und Weidel steuert die AfD noch weiter nach rechts außen. Zahlreiche kommunale Mandatsträger haben die Partei seit der Neuaufstellung verlassen. Mancher rechnet dabei wütend mit seiner langjährigen politischen Heim…",
      url: "https://www.welt.de/politik/deutschland/article240008375/AfD-Austritte-Sammelbecken-fuer-Versager-Gangster-Minderbemittelte.html",
      urlToImage:
        "https://img.welt.de/img/politik/deutschland/mobile240008371/6281350587-ci16x9-w1200/AfD-Bundesparteitag.jpg",
      publishedAt: "2022-07-20T07:47:56Z",
      content:
        "Wer im Jahr 2022 einen Rechtsruck der AfD beklagt, ist spät dran. Mehr als sieben Jahre ist es her, dass der erste Bundesvorsitzende Bernd Lucke die Partei mit der Begründung verließ, dass er nicht a… [+8022 chars]",
    },
    {
      source: {
        id: null,
        name: "Numerama",
      },
      author: "Nicolas Lellouche",
      title:
        "Utiliser son MacBook Air verticalement sera-t-il possible grâce à une mise à jour ?",
      description:
        "En démontant le MacBook Air M2, le site iFixit a eu la surprise de tomber sur un accéléromètre, le composant présent dans les iPhone et iPad pour détecter son orientation. C'est la première fois qu'un Mac y a droit. Parfois, démonter un appareil électronique …",
      url: "https://www.numerama.com/tech/1044556-utiliser-son-macbook-air-verticalement-sera-t-il-possible-grace-a-une-mise-a-jour.html",
      urlToImage:
        "https://www.numerama.com/wp-content/uploads/2022/07/img-3989.jpg",
      publishedAt: "2022-07-20T09:44:10Z",
      content:
        "En démontant le MacBook Air M2, le site iFixit a eu la surprise de tomber sur un accéléromètre, le composant présent dans les iPhone et iPad pour détecter son orientation. C’est la première fois qu’u… [+2995 chars]",
    },
    {
      source: {
        id: "focus",
        name: "Focus",
      },
      author: "FOCUS",
      title:
        "FOCUS Online Deal-Tipp - Unbegrenzt Sprachen lernen: Mondly im Lifetime-Angebot für nur 79,99 Euro",
      description:
        "Sie möchten eigenständig und spielerisch eine neue Sprache erlernen? Dann ist Mondly ein heißer Tipp! Über FOCUS Online erhalten Sie für einmalig 79,99 Euro lebenslangen Zugriff auf 41 Sprachen in der App. Das Lifetime-Angebot gilt nur bis 31. Juli.",
      url: "https://www.focus.de/deals/beendete-deals/focus-online-deal-tipp-unbegrenzt-sprachen-lernen-mondly-im-lifetime-angebot-fuer-nur-79-99-euro_id_12698170.html",
      urlToImage:
        "https://p6.focus.de/img/fotos/id_11867800/fol-teaser-mondly.png?im=Crop%3D%2890%2C0%2C1080%2C540%29%3BResize%3D%281200%2C627%29&hash=1e89d5b25aed5df8264f5b6ad8730b9e208c699a5544f7c12f314674afab5cba",
      publishedAt: "2022-07-20T10:40:05Z",
      content:
        "Die Sprachkurs-App Mondly ermöglicht dank spielerischer Elemente das schnelle, eigenständige Erlernen von Fremdsprachen. Als FOCUS Online Deal-Tipp erhalten Sie die Lifetime-Lizenz zum Preis von einm… [+6010 chars]",
    },
    {
      source: {
        id: "la-repubblica",
        name: "La Repubblica",
      },
      author: "repubblicawww@repubblica.it (Redazione Repubblica.it)",
      title:
        'Netflix, arriva un "extra" per condividere l\'abbonamento: si parte con 2,99 dollari in Sudamerica',
      description:
        "Il gigante dello streaming in cerca di fonti di ricavo per spingere gli affari, dopo anni di forte crescita e il calo recente degli abbonati",
      url: "https://www.repubblica.it/economia/finanza/2022/07/20/news/abbonamento_netflix_costo_per_condividerlo-358453330/",
      urlToImage:
        "https://www.repstatic.it/content/nazionale/img/2022/07/20/103355129-9d4ded12-c7f0-454f-a02a-7e9e2958cdcb.jpg",
      publishedAt: "2022-07-20T08:34:05Z",
      content:
        "MILANO - Si parte dal Sudamerica, con 2,99 dollari al mese, ma il piano potrebbe presto espandersi negli altri Paesi in cui è presente. Netflix è in caccia di nuove fonti di ricavo, dopo i lunghi ann… [+3209 chars]",
    },
    {
      source: {
        id: null,
        name: "Techbang.com",
      },
      author: "小治",
      title:
        "TCL 確定引進 98 吋大型 QLED 電視以及最新 Mini LED C935 系列，預計下週正式發表",
      description:
        "今年 TCL 將引進旗艦至中階等多個系列型號，其中最受消費者矚目的，莫過於旗下最大尺寸的 98C735 以及採用 Mini LED 技術的旗艦 C935 系列。全球電視出貨量名列前矛的 TCL，在台灣是由群光電子總代理，由於國內智慧電視需求不斷提高，今年 TCL 將引進旗艦至中階等多個系列型號，其中最受消費者矚目的，莫過於旗下最大尺寸的 98C735 以及採用 Mini LED 技術的旗艦 C935 系列，目前已經可在店頭見到其身影，隨著產品陸續舖貨至各大通路，官方預計下週便會發出正式新聞稿，這次我們也受 TCL…",
      url: "https://www.techbang.com/posts/98214-tcl-98-inch-qled-tv-and-mini-led-c935-series",
      urlToImage:
        "https://cdn2.techbang.com/system/excerpt_images/98214/original/834cd2dd9b778526f62d9f47147bea5a.jpg?1658284752",
      publishedAt: "2022-07-20T05:30:00Z",
      content:
        "TCL TCL 98C735 Mini LED C935 TCL \r\n98C735 TCL  C735 LED QLED 192 4K UHD3840x2160 120Hz 120Hz HDR Dolby Vision IQHDR 10+ IMAX Enhanced Dolby Atmos DTS-HD TCL Onkyo 98C735 Onkyo Google TV Google Chrome… [+375 chars]",
    },
    {
      source: {
        id: null,
        name: "Techbang.com",
      },
      author: "郭奕顯",
      title:
        "LINE購物推全新改版「直播購物平台」， 活動同步開跑預計送出總價值超過 LINE POINTS 2,000萬點！",
      description:
        "LINE購物推出全新改版的「直播購物平台」 「直播盛典」活動同步開跑  全檔期預計送出總價值超過 LINE POINTS 2,000萬點！把握夏季直播購物商機，LINE購物今日推出全新改版的「+1牌卡」與「子母畫面」兩項直播購物功能，為用戶提供更便利的購物體驗，同步宣布「直播盛典 購狂購賺點」活動起跑，即日起至8月9日，每日接力不停歇推出強檔賺點回饋直播節目，活動全檔期總計將送出LINE POINTS超過2,000萬點！今年夏天，LINE購物也首度邀請鳳小岳以百變造型擔任暑期大檔「搖百購物季」廣告主角，即日起至1…",
      url: "https://www.techbang.com/posts/98187-line-shopping-launches-a-new-and-redesigned-live-shopping",
      urlToImage:
        "https://cdn1.techbang.com/system/excerpt_images/98187/original/785564b6c709940c4c3610fd4d5cb9a0.jpg?1658212531",
      publishedAt: "2022-07-20T02:30:00Z",
      content:
        "LINE+1 89LINE POINTS2,000LINE1014100\r\nLINELINE+1+2+3LINE\r\nLINE20211,80010%6LINE2,700+15551,479\r\nLINE  LINE POINTS 2,000\r\nLINE8910% LINE POINTS725LINE13LINE POINTS  8% 7268250LINE POINTS 2,000\r\nLINE \r… [+734 chars]",
    },
    {
      source: {
        id: null,
        name: "Inside.com.tw",
      },
      author: "聯合新聞網",
      title: "美國隊長 Chris Evans：iPhone 12 太重了，我愛 iPhone 6S",
      description:
        "根據《apple insider》報導，克里斯伊凡並不是 iPhone 12 的粉絲，他表示他想念有 Home 鍵的 iPhone，還說若有機會的話，他很想換回 iPhone6s。",
      url: "https://www.inside.com.tw/article/28321-iphone-apple-chrisevans",
      urlToImage:
        "https://inside-assets1.inside.com.tw/2022/7/9031d249-0cb3-4228-8105-1c534b10d251.png?w=1200&h=630&fit=crop&q=80",
      publishedAt: "2022-07-20T01:07:19Z",
      content:
        "2021 2.0\r\nACW SOUTH ACW SOUTH IT \r\nPhoto CreditACW SOUTH \r\n6 ICT IoT Conflicker NAS QSnatch Android hummer DDoSFalse Flag \r\nACW SOUTH Testbed ACW SOUTH 30 \r\n/ Photo CreditACW SOUTH \r\nDNS  \r\n H.W. Hei… [+265 chars]",
    },
    {
      source: {
        id: null,
        name: "Inside.com.tw",
      },
      author: "葉郎串流筆記",
      title:
        "【葉郎串流筆記】Pixar 的串流青春期：後 COIV-19 時代動畫片廠的轉型陣痛",
      description:
        "好萊塢從業人員一邊歡慶《捍衛戰士：獨行俠》將電影院票房拉回疫情前水準的同時，一邊非常焦慮地關注《Minions: The Rise of Gru 小小兵2：格魯的崛起》，和《Lightyear 巴斯光年》兩部新片的每日票房數據，因為沒有人有百分百把握親子市場能真正復甦。",
      url: "https://www.inside.com.tw/article/28324-pixar-streaming-on-disney-plus",
      urlToImage:
        "https://inside-assets1.inside.com.tw/2022/7/981fa2b3-6ee2-4749-83fd-c5f072a1014f.jpg?w=1200&h=630&fit=crop&q=80",
      publishedAt: "2022-07-20T03:52:33Z",
      content:
        "COVID-19 3 Netflix Disney+ COVID-19 Top Gun: Maverick 3 \r\n COVID-19 \r\nIllumination Entertainment Minions: The Rise of Gru 2 Pixar Lightyear \r\n 1960 1970 1970 George Lucas Steven Spielberg Star Wars J… [+2362 chars]",
    },
    {
      source: {
        id: null,
        name: "Karapaia.com",
      },
      author: "parumo_zaeega",
      title: "ヨーロッパを襲う熱波、山火事に囲まれた列車が緊急停車する事態に",
      description:
        '#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,"游ゴシック体",YuGothic,"Yu Gothic Medium",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...',
      url: "https://karapaia.com/archives/52314481.html",
      urlToImage:
        "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/6/0/60573ced.jpg",
      publishedAt: "2022-07-20T06:00:29Z",
      content:
        'Train from Madrid to Galicia stopped on the tracks for a few minutes this morning. Passengers surrounded by wildfire. "Moments of panic", reports @PacoSeoanePerez. Then the train continued on its jou… [+100 chars]',
    },
    {
      source: {
        id: null,
        name: "Ascii.jp",
      },
      author: "ASCII",
      title: "プライムデーとiPhone値上げで大騒ぎの1週間",
      description:
        "7月12日から13日にかけて実施されたAmazon最大のセール「Amazonプライムデー」にTwitterが沸いた週でした。",
      url: "https://weekly.ascii.jp/elem/000/004/098/4098264/",
      urlToImage:
        "https://ascii.jp/img/2022/07/18/3391553/l/81339d0c5eb79703.jpg",
      publishedAt: "2022-07-20T09:00:00Z",
      content:
        "71213Twitter\r\nTwitter\r\n20227612PC\r\n<table><tr><th>PC7/612</th></tr><tr><th></th><th></th><th></th></tr><tr><th>1</th><td>Amazon</td><td>538260</td></tr><tr><th>2</th><td>VTuber</td><td>271254</td></t… [+764 chars]",
    },
    {
      source: {
        id: null,
        name: "Ascii.jp",
      },
      author: "ASCII",
      title: "アップル「iPhone 14」発売前にすでに偽物のケースが販売中？",
      description:
        "アップルが今年発売するとみられるiPhone 14のケースがすでに出回っている。アップルロゴも入っているが、もちろん偽物だ。",
      url: "https://weekly.ascii.jp/elem/000/004/098/4098634/",
      urlToImage:
        "https://ascii.jp/img/2022/07/20/3392923/l/e943327bea7c4707.jpg",
      publishedAt: "2022-07-20T09:00:00Z",
      content:
        "They have already made the clones of the iPhone 14 cases, amazing how the Chinese are always one step ahead #apple#iphone14#casespic.twitter.com/O6XfCcGhvO\r\n— Majin Bu (@MajinBuOfficial) July 14, 202… [+105 chars]",
    },
    {
      source: {
        id: null,
        name: "Businessinsider.de",
      },
      author: "Barbara Barkhausen",
      title: "Quartalsbericht: Netflix verliert fast eine Million Nutzer",
      description:
        "Eigentlich hatte der Streamingdienst mit deutlich schlechteren Zahlen gerechnet. Außerdem: 1:0 für Twitter im Rechtsstreit gegen Elon Musk und VW startet in den USA mit vollelektrischen Pick-ups neu durch.",
      url: "https://www.businessinsider.de/gruenderszene/business/netflix-quartalszahlen-eine-million-nutzer-springen-ab/",
      urlToImage:
        "https://cdn.businessinsider.de/wp-content/uploads/2021/09/netflix-1.jpeg",
      publishedAt: "2022-07-20T03:55:00Z",
      content:
        "Eigentlich hatte der Streamingdienst mit deutlich schlechteren Zahlen gerechnet. Außerdem: 1:0 für Twitter im Rechtsstreit gegen Elon Musk und VW startet in den USA mit vollelektrischen Pick-ups neu … [+5491 chars]",
    },
    {
      source: {
        id: null,
        name: "Corriere.it",
      },
      author: "Redazione Economia",
      title: "Netflix perde un milione di abbonati (ma vola a Wall Street)",
      description:
        "Il colosso del video streaming ha perso 970 mila abbonati, meno della metà dei 2 milioni preannunciati ad aprile. Utile netto di 1,44 miliardi di dollari, in crescita del 7,7%",
      url: "https://www.corriere.it/economia/aziende/22_luglio_20/netflix-perde-milione-abbonati-ma-vola-wall-street-649d730c-07f1-11ed-bd15-abd29857fc36.shtml",
      urlToImage:
        "https://images2.corriereobjects.it/methode_image/socialshare/2022/07/20/1cb49a4c-07f2-11ed-bd15-abd29857fc36.jpg",
      publishedAt: "2022-07-20T06:59:36Z",
      content:
        "Dopo il calo di 200 mila utenti nel primo trimestre il colosso del videostreaming ne ha persi 970 mila, meno della metà dei 2 milioni preannunciati ad aprile: nel terzo trimestre prevede un recupero … [+3869 chars]",
    },
    {
      source: {
        id: "techradar",
        name: "TechRadar",
      },
      author: "Luke Little",
      title:
        "Fitbit Charge 5 has a new smart feature that could be quite a relief",
      description:
        "Give your watch the Tile treatment with its new find my phone feature",
      url: "https://www.techradar.com/news/the-fitbit-charge-5-is-getting-a-smart-new-finding-feature",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/feDeyNFzaJaaH7fYhxiSmP-1200-80.jpg",
      publishedAt: "2022-07-20T05:00:56Z",
      content:
        "Fitbit quietly added an important feature to its Charge 5 activity trackers and it’s all about tracking your phone, instead of you.\r\nThe latest firmware, version 57.20001.171.50, which arrived on Tue… [+1528 chars]",
    },
    {
      source: {
        id: null,
        name: "SlashGear",
      },
      author: "staff@slashgear.com (Gabriel Moss)",
      title: "Survey: 35% Of People Currently Use This Music Streaming Service",
      description:
        "We asked hundreds of people which music streaming service they listen to, and though the answers varied, the most popular probably won&#039;t surprise you.",
      url: "https://www.slashgear.com/933739/survey-35-of-people-currently-use-this-music-streaming-service/",
      urlToImage:
        "https://www.slashgear.com/img/gallery/survey-35-of-people-currently-use-this-music-streaming-service/l-intro-1658283032.jpg",
      publishedAt: "2022-07-20T02:19:13Z",
      content:
        "In our survey, we asked each participant to choose between Apple Music, Spotify, Tidal, Pandora Premium, Amazon Music Unlimited, and YouTube Music. The survey's respondents voted largely in favor of … [+1449 chars]",
    },
    {
      source: {
        id: null,
        name: "Hdmotori.it",
      },
      author: "HDblog.it",
      title:
        "Mazda 2 Hybrid, prova e consumi reali della migliore citycar ibrida | Video",
      description:
        'Perche, secondo voi, Mazda ha scelto di "copiare" la Toyota Yaris?',
      url: "https://www.hdmotori.it/mazda/recensioni/n558875/mazda-2-hybrid-prova-consumi-video-prezzo-vs-yaris/",
      urlToImage: "https://hd2.tudocdn.net/1049347?w=1920",
      publishedAt: "2022-07-20T08:00:00Z",
      content:
        "Da sempre conosciamo la piccola Mazda 2 e solo da poco, il costruttore giapponese ha deciso di affiancarle anche la nuova Mazda 2 Hybrid, un modello parallelo alla gamma già nota ma dotato della tecn… [+9389 chars]",
    },
    {
      source: {
        id: null,
        name: "ComputerBase",
      },
      author: "Nicolas La Rocco",
      title:
        "Porsche: Alle Taycan erhalten Software-Stand des Modelljahres 2023",
      description:
        "Porsche bietet seinen Kunden für alle seit Ende 2019 ausgelieferten Taycan-Derivate ein Software-Update an, das die Fahrzeuge auf den Software-Stand des Modelljahres 2023 bringt. Je nach Modelljahr fallen die Updates mehr oder weniger umfangreich aus. Die Akt…",
      url: "https://www.computerbase.de/2022-07/porsche-alle-taycan-erhalten-software-stand-des-modelljahres-2023/",
      urlToImage:
        "https://pics.computerbase.de/1/0/4/3/2/5-3010d3253a1ad6af/article-1280x720.894c6a38.jpg",
      publishedAt: "2022-07-20T10:20:00Z",
      content:
        "Porsche bietet seinen Kunden für alle seit Ende 2019 ausgelieferten Taycan-Derivate ein Software-Update an, das die Fahrzeuge auf den Software-Stand des Modelljahres 2023 bringt. Je nach Modelljahr f… [+5362 chars]",
    },
    {
      source: {
        id: null,
        name: "Espinof.com",
      },
      author: "Albertini",
      title:
        "Estrenos (20 de julio): 69 series, películas y documentales en Netflix, HBO Max, Disney+, Amazon, Filmin, Movistar Plus+, Atresplayer y Apple TV+",
      description:
        "Nuevo miércoles y llega el momento de refugiarnos un poco del calor e ir planificando qué vamos a ver en cuanto tengamos un momento libre. Y una alternativa estupenda es la de ponernos nuestro servicio de streaming favorito a ver alguna cosa.\n<!-- BREAK 1 -->…",
      url: "https://www.espinof.com/estrenos/estrenos-20-julio-series-peliculas-documentales-netflix-hbo-max-disney-plus-amazon-filmin-movistar-plus",
      urlToImage:
        "https://i.blogs.es/aa14c7/estrenos-agente-invisible/840_560.jpeg",
      publishedAt: "2022-07-20T07:00:44Z",
      content:
        "Nuevo miércoles y llega el momento de refugiarnos un poco del calor e ir planificando qué vamos a ver en cuanto tengamos un momento libre. Y una alternativa estupenda es la de ponernos nuestro servic… [+4208 chars]",
    },
    {
      source: {
        id: null,
        name: "Thegospelcoalition.org",
      },
      author: "Sarah Eekhoff Zylstra",
      title: "Scrolling Alone",
      description:
        "Sarah Zylstra: ‘There's no picture we could take, . . . no amount of followers we could gather that could add anything to the finished work of Christ.’",
      url: "https://www.thegospelcoalition.org/article/scrolling-alone/",
      urlToImage:
        "https://media.thegospelcoalition.org/wp-content/uploads/2022/07/11152134/Recorded-Podcast-Thumbnail-Scrolling-Alone-NO-TEXT.jpg",
      publishedAt: "2022-07-20T04:00:00Z",
      content:
        "I started following somehow a whole bunch of people that go to my school that Im not even personally friends with. So I would start getting FOMO. And Id be like, Am I wasting my freshman year? Becaus… [+40975 chars]",
    },
    {
      source: {
        id: null,
        name: "Antyweb.pl",
      },
      author: "Piotr Kurek",
      title: "Google prześcignie Apple? Nowy sprzęt na ostatniej prostej",
      description:
        "Google nie poprzestaje na swoich Google Glass. Firma wraca z nowym pomysłem na okulary z funkcjami AR. Jednak zanim trafią do sprzedaży, muszą przejść najbardziej rygorystyczne testy. A nic nie sprawdzi ich tak bardzo, jak uliczne realia amerykańskich miast.\n…",
      url: "https://antyweb.pl/okulary-google-glass-test-w-miescie",
      urlToImage:
        "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/07/59kxkr7zvb/oku.jpg",
      publishedAt: "2022-07-20T09:26:14Z",
      content:
        "Wiele si mówi na temat okularów AR/VR od Apple. Firma od lat ma pracowa nad tego typu gadetem. Przy okazji zapowiedzi kolejnych konferencji jak bumerang powracaj plotki, przecieki i sugestie, e to wa… [+2774 chars]",
    },
    {
      source: {
        id: null,
        name: "Antyweb.pl",
      },
      author: "Krzysztof Kurdyła",
      title:
        "Apple zapłaci za „motylkowe” klawiatury 50 mln dolarów. Tanio się wykpili…",
      description:
        "Do klawiatury „motylkowej” mam osobisty „sentyment”. Od pierwszego testu „na żywo” byłem hejterem tego rozwiązania, o czym pisałem w co najmniej kilku artykułach. Obrywało mi się za to zresztą od bezkrytycznych fanbojów. Tymczasem historia „motylków” kończy s…",
      url: "https://antyweb.pl/50-mln-dolarow-za-motylkowe-klawiatury",
      urlToImage:
        "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2021/11/fi13k09nku/ant_klawiatura_00001.jpg",
      publishedAt: "2022-07-20T09:26:14Z",
      content:
        "Motyle w MacBooku\r\nCaa ta nieszczsna historia swój pocztek miaa w 2015 r. gdy Apple zademonstrowa tak ultracienkiego MacBooka, e a musiao opracowa do niego specjaln klawiatur o innym mechanizmie przy… [+2850 chars]",
    },
    {
      source: {
        id: null,
        name: "Actualidadiphone.com",
      },
      author: "Luis Padilla",
      title: "Creative Zen Hybrid, la calidad no tiene por qué ser cara",
      description:
        "Analizamos los auriculares supraaurales Zen Hybrid, la nueva apuesta del fabricante Creative para convencer a la mayoría de usuarios de...",
      url: "https://www.actualidadiphone.com/creative-zen-hybrid-la-calidad-no-tiene-por-que-ser-cara/",
      urlToImage:
        "https://www.actualidadiphone.com/wp-content/uploads/2022/07/Creative-Zen-5.jpg",
      publishedAt: "2022-07-20T08:00:15Z",
      content:
        "Analizamos los auriculares supraaurales Zen Hybrid, la nueva apuesta del fabricante Creative para convencer a la mayoría de usuarios de que no es necesario gastar mucho dinero para disfrutar de buena… [+8127 chars]",
    },
    {
      source: {
        id: null,
        name: "3dnews.ru",
      },
      author: null,
      title:
        "Apple продолжает поставлять в Россию тысячи устройств каждый месяц, но не продаёт их",
      description:
        "Объявившая о приостановке поставок в Россию компания Apple продолжает завозить в страну свою продукцию, сообщают «Известия». Объёмы отгрузок исчисляются тысячами устройств ежемесячно, но до прилавков в магазинах эта техника не дойдёт — она необходима для выпо…",
      url: "https://3dnews.ru/1070502/apple-prodolgaet-postavki-v-rossiyu-no-tolko-dlya-obmena-tovarov-na-garantii",
      urlToImage:
        "https://3dnews.ru/assets/external/illustrations/2022/07/20/1070502/iphone_apple-com.jpg",
      publishedAt: "2022-07-20T08:33:00Z",
      content:
        "Apple , «». , — . , , .\r\n: apple.com\r\nApple «» , : . Apple, , . (), . AppleCare+. «2» « », , 45 .\r\n , «» , «. — » re:Store. , , ; , , .\r\n, , Apple . , — , .",
    },
    {
      source: {
        id: null,
        name: "3dnews.ru",
      },
      author: null,
      title:
        "IDC: полупроводниковый кризис далёк от завершения, а главную угрозу представляет инфляция",
      description:
        "В интервью каналу CNBC Винай Гупта (Vinay Gupta) из IDC пояснил, что дефицит полупроводников далёк от устранения, а основной проблемой для рынка сейчас является инфляция, которая уже ограничивает расходы домохозяйств на покупку продукции, содержащей полупрово…",
      url: "https://3dnews.ru/1070482/idc-poluprovodnikoviy-krizis-dalyok-ot-zaversheniya-a-glavnuyu-ugrozu-predstavlyaet-inflyatsiya",
      urlToImage:
        "https://3dnews.ru/assets/external/illustrations/2022/07/20/1070482/idc_01.jpg",
      publishedAt: "2022-07-20T03:52:00Z",
      content:
        "CNBC (Vinay Gupta) IDC , , , , . , .\r\n: TSMC\r\n, IDC, , . , . , , . .\r\n , IDC, . , , . , .\r\n, IDC , , . Apple IDC : « , ». - , .",
    },
    {
      source: {
        id: null,
        name: "Geekpark.net",
      },
      author: null,
      title:
        "马斯克：已将大脑上传云端；抖音合作爱奇艺，推动「二创」规范化；B 站上线「防网暴」功能｜极客早知道",
      description:
        "苹果：2023 年放缓部分团队招聘和支出\n7 月 19 日消息，知情人士透露，因为经济有可能衰退，苹果一些部门准备放慢招聘速度，并控制开支。截至上一份年报发布时，苹果在全球约有全职员工 15.4 万。\n当然，苹果的调整并非针对所有团队，2023 年苹果的产品推出计划仍然是激进的，当中包括 MR 头盔。Bokeh Capital Partners 首席投资官金·福雷斯特（Kim Forrest）说：「苹果的举措反映出它在新事物、新企业、新产品等许多领域的投资速度放慢了，这表明通胀对这些企业来说是一个问题。」\n最近几…",
      url: "http://www.geekpark.net/news/305367",
      urlToImage:
        "https://imgslim.geekpark.net/uploads/image/file/b9/ab/b9ab22dd162d92618d90504677894e81.png",
      publishedAt: "2022-07-20T00:31:24Z",
      content:
        "2023 \r\n7 19 15.4 \r\n2023 MR Bokeh Capital Partners ·Kim Forrest\r\n 9% iPhone 17% \r\n7 19 \r\n SoC \r\nTikTok \r\n TikTok \r\n TikTok TikTok · (David Ortiz) \r\n2023 40 \r\n7 19 Apple Pay \r\n Affinity Credit Union \r\n… [+279 chars]",
    },
    {
      source: {
        id: null,
        name: "Netafull.net",
      },
      author: "コグレマサト",
      title: "「Apple Watch整備済製品」Apple Watch Series 7【2022年7月20日】",
      description:
        "Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 Apple公式サイトの「Apple Watch整備済製品」の情報です。在庫限りですので、欲しい...\n投稿 「Apple Watch整備済製品」Apple Watch Series 7【2022年7月20日】 は ネタフル に最初に表示されました。",
      url: "https://netafull.net/apple-refurbished/0115306.html",
      urlToImage:
        "https://netafull.net/wp-content/uploads/2020/12/slproImg_202008300941310-1.jpg",
      publishedAt: "2022-07-20T00:30:00Z",
      content:
        "Apple1\r\nAppleApple Watch\r\nApple Watch Series 7GPS- 45mm []\r\n52,800\r\nApple Watch Series 7GPS + Cellular- 41mm []\r\n61,800\r\nApple Watch Series 7GPS + Cellular- 41mm []\r\n82,800\r\nApple Watch Series 7GPS +… [+38 chars]",
    },
    {
      source: {
        id: null,
        name: "Sspai.com",
      },
      author: "克莱德",
      title: "奏折 | Nothing Phone (1) 消息汇总、Android 社区的新鲜事等",
      description:
        "本周「奏折」，我们在 Nothing Phone (1) 全面开售前为你汇总全网评测、报道和资讯中值得关注的小细节，以及其它 4 条值得关注的泛 Android 资讯。[......]查看全文本文为会员文章，出自《单篇文章》，订阅后可阅读全文。",
      url: "https://sspai.com/prime/story/zouzhe-vol01",
      urlToImage:
        "https://cdn.sspai.com/article/d9370f06-c635-1063-5410-6d71967fad8e.png",
      publishedAt: "2022-07-20T08:58:15Z",
      content:
        "5 \r\n7 18 \r\n7 22 6:00 \r\nPower+ Prime app \r\n Nothing Phone (1) 4 Android \r\nNothing Phone (1)\r\n 4 Carl Pei Nothing Nothing Phone (1)\r\n 2021 Nothing \r\n Nothing Phone (1) \r\nNothing Phone (1) 778G+ FHD+ 12… [+2633 chars]",
    },
    {
      source: {
        id: null,
        name: "PC Gamer",
      },
      author: "Jacob Ridley",
      title:
        "Apple agrees to pay $50M to customers with faulty MacBook keyboards",
      description:
        "That's on top of the repair program it already offers affected customers.",
      url: "https://www.pcgamer.com/apple-agrees-to-pay-dollar50m-to-customers-with-faulty-macbook-keyboards/",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/geT3hgrsdQKw3GTuduWwsf-1200-80.jpg",
      publishedAt: "2022-07-20T10:58:21Z",
      content:
        "Apple has agreed to pay $50 million in a class action lawsuit from customers that claimed it knew the butterfly switches it designed for some models of MacBooks were prone to failure and the company … [+2580 chars]",
    },
    {
      source: {
        id: null,
        name: "Tinhte.vn",
      },
      author: "muniuteinl@gmail.com (Mikeknowsme), Mikeknowsme",
      title: "Apple bị phạt 50 triệu đô vì lỗi bàn phím cánh bướm trên MacBook",
      description:
        "Hồi năm 2018, Apple bị kiện bởi nhiềm nhóm người dùng tại 7 Bang thuộc Hoa Kỳ về thiết kế bàn phím cánh bướm trên MacBook (Butterfly Mechanism) khi bàn phím này dễ bị lọt bụi vào trong gây ra lỗi...",
      url: "https://tinhte.vn/thread/apple-bi-phat-50-trieu-do-vi-loi-ban-phim-canh-buom-tren-macbook.3543289/",
      urlToImage:
        "https://photo2.tinhte.vn/data/attachment-files/2022/07/6059939_cover_banphim_canhbuom_tinhte.jpg",
      publishedAt: "2022-07-20T03:02:44Z",
      content:
        "Hi nm 2018, Appleb kin bi nhim nhóm ngi dùng ti 7 Bang thuc Hoa K v thit k bàn phím cánh bm trên MacBook (Butterfly Mechanism) khi bàn phím này d b lt bi vào trong gây ra li kt phím. T ó ngi dùng phi… [+925 chars]",
    },
    {
      source: {
        id: null,
        name: "Tinhte.vn",
      },
      author: "cuhiep+3@gmail.com (cuhiep), cuhiep",
      title: "Thi chế ảnh nhân - quả công nghệ vui vẻ trúng Apple Watch",
      description:
        "Mình thấy anh em trên group Maclife & Đồng bọn làm cái hình chế vui quá nên tổ chức làm trên Tinhte.vn cho vui. Anh em hãy chế một nội dung về công nghệ tương tự hình như hình trong bài này. Post...",
      url: "https://tinhte.vn/thread/thi-che-anh-nhan-qua-cong-nghe-vui-ve-trung-apple-watch.3543376/",
      urlToImage:
        "https://photo2.tinhte.vn/data/attachment-files/2022/07/6060118_nhanqua.jpg",
      publishedAt: "2022-07-20T08:06:12Z",
      content: "",
    },
    {
      source: {
        id: null,
        name: "Tinhte.vn",
      },
      author: "muniuteinl@gmail.com (Mikeknowsme), Mikeknowsme",
      title:
        "MacBook Air M1 bây giờ chỉ được bán với phiên bản 7-core GPU mà thôi",
      description:
        "Hiện tại nếu bạn muốn mua MacBook Air M1 mới từ Apple thì chỉ còn tuỳ chọn 7-core GPU cho dù có option lên 16GB RAM hay 512GB, 1TB SSD đi chăng nữa. Lúc trước khi mua option 512GB chúng ta đã mặc...",
      url: "https://tinhte.vn/thread/macbook-air-m1-bay-gio-chi-duoc-ban-voi-phien-ban-7-core-gpu-ma-thoi.3543317/",
      urlToImage:
        "https://photo2.tinhte.vn/data/attachment-files/2022/07/6059968_cover_macbookairm1_apple_sell.jpg",
      publishedAt: "2022-07-20T06:08:06Z",
      content:
        "Hin ti nu bn mun mua MacBook Air M1 mi t Apple thì ch còn tu chn 7-core GPU cho dù có option lên 16GB RAM hay 512GB, 1TB SSD i chng na. Lúc trc khi mua option 512GB chúng ta ã mc nh c 8-core GPU ri, … [+274 chars]",
    },
    {
      source: {
        id: null,
        name: "Tinhte.vn",
      },
      author: "lephukhuong@gmail.com (Lê Phú Khương), Lê Phú Khương",
      title: "Sắp có tool jailbreak đầu tiên cho iOS 15",
      description:
        "Một nhóm lập trình viên tên Odyssey Team vừa đăng tải hình ảnh về công cụ jailbreak đầu tiên cho iOS và iPadOS 15. Tool này tên là “Cheyote”, và dự kiến sẽ được tung ra trong thời gian ngắn tới....",
      url: "https://tinhte.vn/thread/sap-co-tool-jailbreak-dau-tien-cho-ios-15.3543080/",
      urlToImage:
        "https://photo2.tinhte.vn/data/attachment-files/2022/07/6060024_cover.jpg",
      publishedAt: "2022-07-20T06:51:41Z",
      content:
        "Mt nhóm lp trình viên tên Odyssey Team va ng ti hình nh v công c jailbreak u tiên cho iOS và iPadOS 15. Tool này tên là Cheyote, và d kin s c tung ra trong thi gian ngn ti. ây là mt tin vui cho ngi c… [+1026 chars]",
    },
    {
      source: {
        id: null,
        name: "Tinhte.vn",
      },
      author: "giahuy0308@outlook.com (Pnghuy), Pnghuy",
      title:
        "Cảm nhận nhanh với Dell XPS 13 Plus: Một chiếc laptop đến từ tương lai",
      description:
        "Một chiếc laptop như được sinh ra cho tương lai, không giống những chiếc laptop phổ thông mà chúng ta đang và đã được biết từ trước đến nay. Với dòng Dell XPS 13 Plus, Dell đã mở ra một tương lai...",
      url: "https://tinhte.vn/thread/cam-nhan-nhanh-voi-dell-xps-13-plus-mot-chiec-laptop-den-tu-tuong-lai.3543166/",
      urlToImage:
        "https://photo2.tinhte.vn/data/attachment-files/2022/07/6060315_cover_trentay_dellxps13plus_tinhte19.jpg",
      publishedAt: "2022-07-20T09:36:26Z",
      content:
        "Sau cùng, chúng ta vn có nhng gì là giá tr ca mt chic Dell XPS thông thng, hoàn thin min bàn, cc kì cht và không có chi tit tha, chc chn, hai tm nhôm dày p vào nhau, tng ng ct u chn chu, cân nng cng … [+3944 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Gerard Mart�",
      title:
        "South of the Circle aterriza en consolas PlayStation, Xbox, Switch y PC el 3 de agosto",
      description:
        "<!--cache-->La aventura con un fuerte componente narrativo desarrollada por State of Play Games se lanzará para PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch y PC tras su paso por Apple Arcade.<!--aa--->El editor 11 bit studios y el estudio de desarrol…",
      url: "https://vandal.elespanol.com/noticia/1350755281/south-of-the-circle-aterriza-en-consolas-playstation-xbox-switch-y-pc-el-3-de-agosto/",
      urlToImage:
        "https://media.vandal.net/i/ivandal/1200x630/7-2022/202272010235166_1.jpg",
      publishedAt: "2022-07-20T08:43:00Z",
      content:
        'El editor 11 bit studios y el estudio de desarrollo State of Play Games han anunciado que South of the Circle, un videojuego de aventuras que ofrece una "experiencia narrativa emocional" y una "profu… [+1709 chars]',
    },
    {
      source: {
        id: null,
        name: "Spidersweb.pl",
      },
      author: "pgkrzywy@gmail.com (Piotr Grabiec)",
      title:
        "Apple mógłby to skopiować. Zegarki z WearOS z dłuższym czasem pracy",
      description:
        "Qualcomm zaprezentował zupełnie nowe procesory do smartwatchy z systemem Wear OS, które mają zapewnić przede wszystkim dłuższy czas pracy na jednym ładowaniu. Patrzę na nie z zazdrością, a Apple mógłby to skserować. Rozładowywanie się zegarka przed końcem dni…",
      url: "https://spidersweb.pl/2022/07/qualcomm-w5-gen-1-procesor-do-smartwatchy-wear-os.html",
      urlToImage:
        "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2022/07/qualcomm-w5-gen-1-procesor-do-smartwatchy-wear-OS-0.jpg",
      publishedAt: "2022-07-20T07:29:13Z",
      content:
        "Apple Watche to wietne urzdzenia, ale ich czas pracy na jednym adowaniu jest ich pit achillesow. Podczas normalnego dnia raczej si nie zdarza, ebym musia adowa zegarek przed pooeniem si spa, ale wyst… [+155 chars]",
    },
    {
      source: {
        id: null,
        name: "Futura",
      },
      author: "Léa Fournasson, Journaliste scientifique",
      title: "For All Mankind, saison 3 : à quand la colonisation de Mars ?",
      description:
        "Sortie le 10 juin 2022 sur la plateforme Apple TV+, la saison 3 de For All Mankind part cette fois la conquête de Mars. Et pas de n’importe quelle façon : c’est une mission habitée qui est lancée en 1994. La série, comme à son habitude, fait écho à de réels f…",
      url: "https://www.futura-sciences.com/sciences/actualites/exploration-spatiale-all-mankind-saison-3-colonisation-mars-99687/",
      urlToImage:
        "https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/f/3/9f3f3c2dad_50191334_2-astronautes-mars.jpg",
      publishedAt: "2022-07-20T09:01:46Z",
      content:
        "Sortie le 10 juin 2022 sur la plateforme Apple TV+, la saison 3 de For All Mankind part cette fois la conquête de Mars. Et pas de n'importe quelle façon : c'est une mission habitée qui est lancée en … [+6009 chars]",
    },
    {
      source: {
        id: null,
        name: "Daily Beast",
      },
      author: "The Daily Beast",
      title: "The Little Guys Being Taken Down by Trumpworld",
      description:
        "Photo Illustration by The Daily Beast/Getty\r\nOn the latest episode of The Daily Beast’s Fever Dreams podcast, host Will Sommer and guest host Asawin Suebsaeng—returning to the podcast he helped launch—talk about the “little people just riding around the miasm…",
      url: "https://www.thedailybeast.com/the-little-guys-being-taken-down-by-trumpworld",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1658294445/220719-Fever-Dreams-MAGA-tease-01_nxyjmh",
      publishedAt: "2022-07-20T08:53:16Z",
      content:
        "On the latest episode of The Daily Beasts Fever Dreams podcast, host Will Sommer and guest host Asawin Suebsaengreturning to the podcast he helped launchtalk about the little people just riding aroun… [+2185 chars]",
    },
    {
      source: {
        id: null,
        name: "Gazzetta.it",
      },
      author: "Giuseppe Croce",
      title: "Bmw X4: dimensioni, motori, consumi, pro e contro",
      description:
        "Scopri tutto quello che c'è da sapere su Bmw X4: dalle motorizzazioni ai consumi, dagli interni alla tecnologia di bordo e i consigli di Gazzetta Motori.",
      url: "https://www.gazzetta.it/motori/la-mia-auto/20-07-2022/bmw-x4-dimensioni-motori-consumi-pro-contro.shtml",
      urlToImage:
        "https://dimages2.gazzettaobjects.it/files/og_thumbnail/uploads/2022/07/17/62d3fad191c23.jpeg",
      publishedAt: "2022-07-20T10:00:22Z",
      content:
        "Bmw X4 è il secondo esperimento della casa bavarese nel campo delle Suv coupè, dopo X6. Oppure, per dirla in modo più semplice, è la versone coupè di Bmw X3. Presentata nel 2013 e arrivata sul mercat… [+9930 chars]",
    },
    {
      source: {
        id: null,
        name: "Macitynet.it",
      },
      author: "Antonio Dini",
      title: "Jony Ive e il lungo addio ad Apple",
      description:
        'È finita la storia tra Apple e la "matita" dei suoi prodotti: il designer "scoperto" da Steve Jobs rompe l\'ultimo legame. La storia e le prospettive.\n- su macitynet.it Jony Ive e il lungo addio ad Apple',
      url: "https://www.macitynet.it/?p=1133973",
      urlToImage:
        "https://www.macitynet.it/wp-content/uploads/2019/06/iveecook.jpg",
      publishedAt: "2022-07-20T06:29:05Z",
      content:
        "Jonathan “Jony” Ive è stata una figura centrale nel design mondiale e la sua definitiva uscita dall’orbita di Apple non è poca cosa. Il designer inglese, uno dei più ricchi al mondo, è stato scoperto… [+9343 chars]",
    },
    {
      source: {
        id: null,
        name: "Macitynet.it",
      },
      author: "Pubblicità",
      title:
        "Offerte Amazon 20 luglio fino al 51% su Apple, Lexar, Philips Hue, JBL, Baseus, Honor, Hochica",
      description:
        "Tra le offerte di oggi iPad, iPhone, MacBook Air, lampade da campeggio, smart band, schede di memoria, caricatori, batterie, soundbar, cuffie e tanto altro\n- su macitynet.it Offerte Amazon 20 luglio fino al 51% su Apple, Lexar, Philips Hue, JBL, Baseus, Honor…",
      url: "https://www.macitynet.it/offerte-amazon-20-luglio-fino-al-51-su-apple-lexar-philips-hue-jbl-baseus-honor-hochica/",
      urlToImage:
        "https://www.macitynet.it/wp-content/uploads/2018/04/amazonlista3.jpg",
      publishedAt: "2022-07-20T06:59:27Z",
      content:
        "Quelle che trovate elencate in questa pagina sono le offerte valide nel momento in cui scriviamo su Amazon.\r\nLa lista comprende diverse categorie di prodotto: di seguito vi mostriamo una selezione di… [+9096 chars]",
    },
    {
      source: {
        id: null,
        name: "Macitynet.it",
      },
      author: "Mauro Notarianni",
      title:
        "Russi diffondono app-cavallo di troia per contrastare gli hacker ucraini",
      description:
        "Gli hacker governativi russi hanno distribuito un'app per ingannare ucraini e volontari internazionali, convincendoli a usare un'app Android presentata come in grado di portare a termine attacchi Distributed Denial of Service (DDoS) contro i siti russi ma che…",
      url: "https://www.macitynet.it/russi-diffondono-app-cavallo-di-troia-per-contrastare-gli-hacker-ucraini/",
      urlToImage:
        "https://www.macitynet.it/wp-content/uploads/2018/12/malware00001.jpg",
      publishedAt: "2022-07-20T08:59:25Z",
      content:
        "Gli hacker governativi russi hanno distribuito un’app per ingannare ucraini e volontari internazionali, convincendoli a usare un’app Android presentata come in grado di portare a termine attacchi Dis… [+2077 chars]",
    },
    {
      source: {
        id: null,
        name: "Macitynet.it",
      },
      author: "Mauro Notarianni",
      title: "SMS truffa, come funzionano e come bloccarli",
      description:
        "Tutti abbiamo almeno una volta ricevuto un messaggio di testo indesiderato che promette un premio, una crociera gratis o una tariffa della luce particolarmente conveniente. Ssono SMS truffa, inviati da criminali per rubare dati personali, arrivando anche ai r…",
      url: "https://www.macitynet.it/sms-truffa-come-funzionano-e-come-bloccarli/",
      urlToImage:
        "https://www.macitynet.it/wp-content/uploads/2020/04/what-you-need-to-know-about-spear-phishing-cybersecurity-attacks.jpg",
      publishedAt: "2022-07-20T09:39:34Z",
      content:
        "Ogni utente ha almeno una volta nella vita ricevuto un messaggio di testo indesiderato che promette un premio, una crociera gratis o una tariffa della luce particolarmente conveniente. Si tratta di S… [+6033 chars]",
    },
    {
      source: {
        id: null,
        name: "Hwupgrade.it",
      },
      author: null,
      title:
        "GeForce RTX 3080, Galaxy Flip3 -400, iPhone, portatili, Echo Dot e molto altro in super offerta oggi su Amazon!",
      description:
        "Oggi davvero tante offerte su prodotti che fino a ieri costavano molto di più, oltre alle offerte attive su molti dispositivi Amazon: grandi occasioni per risparmiare, molto, grazie alla nostra selezione giornaliera!",
      url: "https://www.hwupgrade.it/news/telefonia/geforce-rtx-3080-galaxy-flip3-400-iphone-portatili-echo-dot-e-molto-altro-in-super-offerta-oggi-su-amazon_108756.html",
      urlToImage: "https://www.hwupgrade.it/i/n/nvidia-ga103-gpu_720.jpg",
      publishedAt: "2022-07-20T08:17:58Z",
      content:
        "Non più mille: scende di prezzo Zotac GeForce RTX 3080 TRINITY OC 12GB!\r\nPochi pezzi, grande sconto per Samsung Galaxy Z Flip3 5G!\r\nEcho Dot di terza e quarta generazione in forte sconto!\r\nTOP: Xiaom… [+3838 chars]",
    },
    {
      source: {
        id: null,
        name: "Designtaxi.com",
      },
      author: "Alexa Heah",
      title:
        "Apple Accedes To $50 Million Settlement Over Defective Butterfly Keyboards",
      description:
        "Image ID 202529585 © via Evgeniy Grishchenko | Dreamstime.com\n\n \nUsers of MacBooks and MacBook Pro models created after 2015 have often complained of the keyboards’ ‘butterfly mechanism’, which often came stuck and rendered the feature “unusable.” \nNow, follo…",
      url: "https://designtaxi.com/news/419542/Apple-Accedes-To-50-Million-Settlement-Over-Defective-Butterfly-Keyboards/",
      urlToImage:
        "https://editorial.designtaxi.com/images/Apple-Butterfly-Keyboard-1-1658287116.jpeg",
      publishedAt: "2022-07-20T08:36:21Z",
      content:
        "Image ID 202529585 © via Evgeniy Grishchenko | Dreamstime.com\r\nUsers of MacBooks and MacBook Pro models created after 2015 have often complained of the keyboards’ ‘butterfly mechanism’, which often c… [+1516 chars]",
    },
    {
      source: {
        id: null,
        name: "Designtaxi.com",
      },
      author: "Mikelle Leow",
      title:
        "Apple Watch Saves Woman’s Life After Leading To Discovery Of Rare, Deadly Tumor",
      description:
        "[Click here to view the video in this article] \nImage via Jan Tůma / Pixabay (CC0)\n\n \nLike many users, 67-year-old Kim Durkee got her Apple Watch to track her health and physical activity levels. She had her wearable customized with a Minnie Mouse watch face …",
      url: "https://designtaxi.com/news/419546/Apple-Watch-Saves-Woman-s-Life-After-Leading-To-Discovery-Of-Rare-Deadly-Tumor/",
      urlToImage:
        "https://editorial.designtaxi.com/images/AF7D6827-8DFE-416B-A091-5E3D81B00CFC-1658295516.jpeg",
      publishedAt: "2022-07-20T06:10:51Z",
      content:
        "Image via Jan TÅ¯ma / Pixabay (CC0)\r\nLike many users, 67-year-old Kim Durkee got her Apple Watch to track her health and physical activity levels. She had her wearable customized with a Minnie Mouse … [+1937 chars]",
    },
    {
      source: {
        id: null,
        name: "Designtaxi.com",
      },
      author: "Mikelle Leow",
      title:
        "Apple Watch Saves Woman’s Life After Prompting Discovery Of Rare, Deadly Tumor",
      description:
        "[Click here to view the video in this article] \nImage via Jan Tuma / Pixabay (CC0)\n\n \nLike many users, 67-year-old Kim Durkee got her Apple Watch to track her health and physical activity levels. She had her wearable customized with a Minnie Mouse watch face …",
      url: "https://designtaxi.com/news/419546/Apple-Watch-Saves-Woman-s-Life-After-Prompting-Discovery-Of-Rare-Deadly-Tumor/",
      urlToImage:
        "https://editorial.designtaxi.com/images/AF7D6827-8DFE-416B-A091-5E3D81B00CFC-1658295516.jpeg",
      publishedAt: "2022-07-20T08:36:21Z",
      content:
        "Image via Jan Tuma / Pixabay (CC0)\r\nLike many users, 67-year-old Kim Durkee got her Apple Watch to track her health and physical activity levels. She had her wearable customized with a Minnie Mouse w… [+1935 chars]",
    },
    {
      source: {
        id: null,
        name: "Hwupgrade.it",
      },
      author: null,
      title:
        "Non si vendono più tanti smartphone (tranne gli iPhone)! Ecco i dati sul secondo trimestre",
      description:
        "Arriva il report di Canalys sul secondo trimestre del 2022 che lo mette a confronto con quello del 2021. I dati sono un po' sconcertanti con un mercato degli smartphone in recessione (-9%) e con solo Samsung in positivo grazie alla fascia bassa ed Apple che c…",
      url: "https://www.hwupgrade.it/news/telefonia/non-si-vendono-piu-tanti-smartphone-tranne-gli-iphone-ecco-i-dati-sul-secondo-trimestre_108757.html",
      urlToImage: "https://www.hwupgrade.it/i/n/Smartphonecalo_720.jpg",
      publishedAt: "2022-07-20T06:35:04Z",
      content:
        "Il mercato degli smartphone è in forte sofferenza. Non si vendono più i telefonini come un tempo e i dati che riporta Canalys sul terzo trimestre 2022 è abbastanza sconcertante soprattutto rispetto a… [+2294 chars]",
    },
    {
      source: {
        id: null,
        name: "Hwupgrade.it",
      },
      author: null,
      title: "iPhone 13 da 128 GB da non perdere: sono tornati a 779 euro!",
      description:
        "Occhio ai prezzi degli iPhone 13 da 128 GB nei colori Galassia e Rosso. Ma non sono gli unici iPhone interessanti oggi",
      url: "https://www.hwupgrade.it/news/apple/iphone-13-da-128-gb-da-non-perdere-sono-tornati-a-779-euro_108766.html",
      urlToImage: "https://www.hwupgrade.it/i/n/iphone13-verde-1280.jpg",
      publishedAt: "2022-07-20T08:36:21Z",
      content:
        "iPhone in offerta, ecco la nostra selezione giornaliera. Occhio in particolare agli iPhone 13 da 128 GB a quel prezzone!\r\nGli iPhone 13 vengono spediti tra qualche giorno, ad agosto, ma se interessat… [+1010 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hello i am constructor from News copmponents");
    this.state = {
      articles: [],
      totalResults:0,
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=afaf9e2e40e74628a75692ffc6ebc459&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=afaf9e2e40e74628a75692ffc6ebc459&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.State.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=afaf9e2e40e74628a75692ffc6ebc459&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">top News</h1>
        {/* {this.state.loading &&<Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={
            <Spinner/>
          }
        >
          <div className="row">
            {this.state.articles.map((elements) => {
              return (
                <div className="col md-3 my-3" key={elements.url}>
                  <NewsItems
                    title={elements.title}
                    description={elements.description}
                    imageUrl={elements.urlToImage}
                    newsUrl={elements.url}
                    author={elements.author}
                    date={elements.publishedAt}
                  />
                  {/* source={elements.source.name} */}
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onclick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onclick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
