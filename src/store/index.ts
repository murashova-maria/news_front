import { createGlobalState } from "react-hooks-global-state";
import { IGlobalState } from "../types/IGlobalState";
import admin1 from "../assets/img/admin1.jpg";
import admin2 from "../assets/img/admin2.jpg";
import admin3 from "../assets/img/admin3.jpg";
import admin4 from "../assets/img/admin4.jpg";
import admin5 from "../assets/img/admin5.jpg";
import admin6 from "../assets/img/admin6.jpg";
import mainPhoto from "../assets/img/mainphotoTest.jpg";
import firstPhoto from "../assets/img/firstPhotoMain.jpg";
import secondPhoto from "../assets/img/secondPhotoMainTest.jpg";
import newsFirst from "../assets/img/newsFirst.jpg";
import news2 from "../assets/img/news2.jpg";
import news3 from "../assets/img/news3.jpg";
import news4 from "../assets/img/news4.jpg";
import sport1 from "../assets/img/sport1.jpg";
import sport2 from "../assets/img/sport2.jpg";
import sport3 from "../assets/img/sport3.jpg";
import sport4 from "../assets/img/sport4.jpg";
import invest1 from "../assets/img/invest1.jpg";
import invest2 from "../assets/img/invest2.jpg";
import invest3 from "../assets/img/invest3.jpg";
import invest4 from "../assets/img/invest4.jpg";
import weather1 from "../assets/img/weather1.jpg";
import weather2 from "../assets/img/weather2.jpg";
import weather3 from "../assets/img/weather3.jpg";
import weather4 from "../assets/img/weather4.jpg";
import business1 from "../assets/img/business1.jpg";
import business2 from "../assets/img/business2.jpg";
import business3 from "../assets/img/business3.jpg";
import business4 from "../assets/img/business4.jpg";
import tech1 from "../assets/img/tech1.jpg";
import tech2 from "../assets/img/tech2.jpg";
import tech3 from "../assets/img/tech3.jpg";
import tech4 from "../assets/img/tech4.jpg";
import newsMain from "../assets/img/newsTestMain.jpg";

const initialState: IGlobalState = {
  news: [
    {
      id: 1,
      img: mainPhoto,
      tag: ["Investigations"],
      title:
        "Varius commodo congue eu suscipit hendrerit dolor auctor accumsan faucibus. Fringilla ridiculus vitae massa eleifend.",
      description: `Sed netus eget scelerisque morbi iaculis ut. Consectetur senectus cursus cursus orci.
             Nibh bibendum sagittis posuere amet pharetra. Consectetur quis morbi malesuada suscipit amet, suscipit odio vel. 
             Nec nunc viverra porta euismod sit proin. Tellus pellentesque potenti odio venenatis id amet, placerat eu.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: true,
    },
    {
      id: 2,
      img: firstPhoto,
      tag: ["Sport"],
      title:
        "Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      mainNews: true,
    },
    {
      id: 3,
      img: secondPhoto,
      tag: ["Technology & Science"],
      title:
        "Commodo velit lacus, vitae, nunc maecenas senectus. In turpis nulla.",
      description: `Ullamcorper facilisi bibendum cras malesuada aliquam urna id maecenas a. Dictum risus tempor, egestas id dictum.`,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      mainNews: true,
    },
    {
      id: 4,
      img: newsFirst,
      tag: ["New"],
      title:
        "Luctus vel tortor felis faucibus praesent faucibus fermentum nullam non. Eget libero elementum libero nulla sagittis.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 5,
      img: news2,
      tag: ["New"],
      title:
        "Morbi at porttitor risus ipsum placerat. In aenean dui et fermentum.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 6,
      img: news3,
      tag: ["New"],
      title:
        "Mauris lectus quam consequat consequat. Nunc porta in volutpat massa faucibus quis tellus nisi.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 7,
      img: news4,
      tag: ["New"],
      title:
        "Non adipiscing ultricies ullamcorper nam odio accumsan, tristique. Et volutpat est volutpat pellentesque eget curabitur.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 8,
      img: sport1,
      tag: ["Sport"],
      title:
        "Dictum gravida mattis pharetra aliquet. Amet vel nisi non fermentum commodo in.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 9,
      img: sport2,
      tag: ["Sport"],
      title:
        "Dictum gravida proin id integer fermentum in tellus donec volutpat. Sagittis lectus egestas vehicula in sapien.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 10,
      img: sport3,
      tag: ["Sport"],
      title: "Ornare nunc in phasellus feugiat. Quam ipsum, et quis aenean.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 11,
      img: sport4,
      tag: ["Sport"],
      title:
        "Massa sed accumsan nisl libero, massa mauris ac. Diam purus fermentum egestas volutpat cum quis.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 12,
      img: invest1,
      tag: ["Investigations"],
      title:
        "Mi, ac, proin ultrices gravida in elit feugiat aenean. Elementum libero consectetur quis cras lorem donec pellentesque proin.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 13,
      img: invest2,
      tag: ["Investigations"],
      title:
        "Senectus augue dictum tempor sodales ut dignissim vulputate. Porttitor risus amet consectetur ipsum amet egestas nunc.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 14,
      img: invest3,
      tag: ["Investigations"],
      title:
        "Est non arcu vulputate scelerisque. Ultricies feugiat amet, tempus felis, sed.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 15,
      img: invest4,
      tag: ["Investigations"],
      title:
        "Felis turpis pharetra luctus tempus suspendisse mauris. Ac, nisi, pharetra, ac donec.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 16,
      img: weather1,
      tag: ["Weather"],
      title:
        "Eget posuere amet, egestas accumsan. Id congue ultricies habitant tincidunt nibh id risus risus.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 17,
      img: weather2,
      tag: ["Weather"],
      title:
        "Elit mattis arcu arcu gravida pellentesque dictumst. Ac imperdiet vulputate porttitor duis arcu gravida id.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 18,
      img: weather3,
      tag: ["Weather"],
      title:
        "Posuere dui, mauris eu sit quisque augue. Gravida in viverra lacus pellentesque posuere.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 19,
      img: weather4,
      tag: ["Weather"],
      title: "Orci at porttitor orci donec. Ipsum dictum varius lacus mattis.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 20,
      img: business1,
      tag: ["Business & Economy"],
      title:
        "Facilisis pellentesque proin cursus porttitor bibendum at egestas vitae. Euismod nec sed maecenas urna.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 21,
      img: business2,
      tag: ["Business & Economy"],
      title:
        "Magna nunc neque tortor nunc mauris diam dui. Posuere nulla elit lorem lacus.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 22,
      img: business3,
      tag: ["Business & Economy"],
      title:
        "Proin a, mauris risus amet placerat semper sed. Tellus consectetur nullam nisl urna, tortor egestas.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 23,
      img: business4,
      tag: ["Business & Economy"],
      title:
        "Pulvinar dignissim fermentum sem mauris. Sit est facilisi luctus eu in egestas volutpat.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 24,
      img: tech1,
      tag: ["Technology & Science"],
      title:
        "Et, faucibus eget amet, quam tincidunt morbi. Eleifend scelerisque sed dignissim in aliquet mi pharetra ultrices.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 25,
      img: tech2,
      tag: ["Technology & Science"],
      title:
        "Enim fermentum natoque egestas quisque felis est. Accumsan dictum scelerisque curabitur eleifend urna.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 26,
      img: tech3,
      tag: ["Technology & Science"],
      title:
        "Imperdiet proin malesuada pretium fermentum sodales senectus. Nulla ac, pellentesque mauris, suspendisse.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 27,
      img: tech4,
      tag: ["Technology & Science"],
      title:
        "Ac eget facilisis fringilla amet. Porttitor nisl, praesent id felis.",
      description: `Volutpat egestas elementum risus, euismod lobortis massa ac scelerisque urna. Tellus mauris vitae placerat amet.`,
      author: "By Aljazeera",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
    {
      id: 28,
      img: newsMain,
      tag: ["New", "Investigations"],
      title: "Canada posts significant jobs gains as COVID restrictions lift",
      description: `Ac, elit consectetur convallis nibh venenatis. Mauris tellus, 
            imperdiet tellus vitae dictum accumsan faucibus blandit. Sapien, cursus lobortis 
            ut ut egestas elit turpis ut. Elit turpis tristique vestibulum tortor pulvinar faucibus
             sed gravida nam. Sodales habitant curabitur morbi varius lectus rutrum velit scelerisque.

            Mauris sapien placerat est tempor, tempus. Nam nunc eu nunc odio. Sociis nec tellus libero
            suscipit dignissim nibh elementum lectus non. Integer arcu sed facilisi eget. Laoreet mauris
            eu tempus sit facilisis tempus volutpat velit. Pellentesque imperdiet tortor et est. Ultrices
            massa purus nulla egestas egestas vel semper augue cursus. Vestibulum ipsum nisl, aliquet nunc,
            sit nec lacinia eget non. Sociis fermentum, pretium tristique nisl nam in facilisis. 
            Massa accumsan commodo risus sit posuere purus mattis diam. Dui faucibus pellentesque cras massa gravida massa.
            Eget orci a, orci congue enim diam, lorem arcu. Condimentum viverra nunc risus facilisi etiam amet diam congue.
                 
            Canada posts significant jobs gains as COVID restrictions lift
                 
            Eu euismod mi semper tellus. Amet laoreet bibendum morbi sit leo. Ac mauris diam sed lobortis id nulla gravida est fringilla. Magna ac tincidunt velit nibh dui. Augue orci cursus et urna, fermentum enim. Sapien tellus vel sem malesuada integer risus suspendisse est vitae. Euismod quisque sodales adipiscing aliquet pellentesque. Vulputate tellus amet, vitae nunc vel penatibus convallis. Sit sit in ultrices ut. Nisl ac vel senectus est pharetra nisl. Adipiscing potenti ac orci mattis malesuada sed quam at. Sit integer vel amet donec. Dignissim id nibh diam posuere facilisis mauris malesuada.
            At dolor metus et, ut sagittis, pulvinar ipsum pulvinar quis. Tortor et non scelerisque purus porta vivamus. Urna purus tristique leo, aliquam euismod. Sed morbi vel nec blandit. Praesent et sit leo aliquet vulputate gravida. Elementum massa, pellentesque morbi lacinia at ullamcorper ac, sem eu. In eget nulla ut ut nullam arcu. Pulvinar interdum ut non condimentum turpis imperdiet nunc orci, nunc. Turpis risus, arcu libero morbi. Molestie risus blandit hendrerit venenatis amet velit.

Platea purus tincidunt ultrices volutpat. Tellus amet a ut maecenas. Venenatis commodo luctus orci pulvinar enim lacus et facilisis. Duis erat accumsan, lobortis sit cum in tempus. Nunc vitae egestas ultricies pellentesque. Justo nunc felis lorem diam. Sed vel vestibulum habitant urna, et quisque eu ac non.

Nibh quis montes, in diam ut varius vitae nisl. Molestie elit consectetur eu, non hendrerit feugiat posuere. Dignissim sit justo, amet aliquet. Ut a nec faucibus elit montes, magna magna id. Id dictum magnis nisl, cras. Massa id tellus condimentum venenatis. In auctor consectetur dignissim etiam sapien neque sed id amet. Fermentum, eget pharetra donec quam fermentum hendrerit accumsan viverra. Mi ultricies nec ornare elit eu, at auctor ultricies. Bibendum lorem vulputate duis ut. Duis blandit semper amet, sit fames leo duis eget. Urna, tincidunt lorem nisl, lorem.
Accumsan cras faucibus tincidunt id sed in eu urna parturient. At id nunc in turpis. Dignissim imperdiet cursus diam, enim dui integer. Dictum vel quam aliquet vulputate. Velit sapien, nisl morbi eget tempus consectetur id convallis. At est, molestie lectus scelerisque id non. Vestibulum mauris cras malesuada eu leo. Nullam ac, turpis eget venenatis sagittis a aliquet id. Lobortis morbi cras ut at tristique eu.

Platea sit facilisi augue id pharetra, felis. Elit urna arcu consectetur consectetur. Hendrerit interdum amet facilisis etiam neque, mauris commodo. Nunc, semper integer suscipit cum id habitasse at amet id. Arcu, dui leo elit augue quis sit. Habitasse sit quam consequat, netus scelerisque mauris faucibus risus. Eget vitae fames ultrices ultricies ornare. Fringilla tellus velit fermentum facilisi non leo, massa elit. Congue amet sed ut ullamcorper elementum. Non mauris nulla nec blandit velit.

Ultricies vivamus ullamcorper maecenas porttitor. Adipiscing et, morbi ornare volutpat at. Tellus pretium sit tincidunt libero. A platea lorem lectus neque ullamcorper lobortis scelerisque ut. Tristique nisl faucibus scelerisque massa purus nibh aliquam ornare. Tincidunt aliquam pellentesque interdum diam. Consequat scelerisque velit commodo elit metus purus tortor lectus. Tempus vel facilisi pretium tristique ridiculus placerat.
Purus massa aliquet enim massa mollis. Morbi est mauris nulla suspendisse feugiat. Vulputate aliquet fringilla amet, facilisis dignissim. Quam a tempus sit velit cursus. Faucibus faucibus neque pellentesque arcu in ultricies egestas elementum enim. Mauris parturient consequat viverra pretium urna sit interdum. Nisl aliquam lectus purus et tincidunt in maecenas tortor.

Pretium, leo purus eget erat enim maecenas. Vel viverra id volutpat aliquet vivamus nunc dui suscipit parturient. Cras lacus eget aliquet enim id cras proin. Mauris nunc, sit congue mauris pretium viverra ipsum. Semper at sit fringilla pellentesque proin sapien pretium pellentesque diam. Sit volutpat interdum dui ipsum nisl libero. Purus odio proin pulvinar egestas nam eget lectus. Feugiat risus et sit ullamcorper consectetur at diam. Et enim non dictum orci. Cursus nunc id mi a, sit fermentum. Cursus diam eget vel iaculis neque id posuere malesuada.
Non vitae id at suspendisse viverra vivamus malesuada faucibus morbi. Eget amet fermentum urna ipsum non. Dui, facilisi arcu a elementum quisque in. Feugiat et, mauris feugiat dolor netus vel vulputate ac. Volutpat fusce mauris non massa massa facilisis tincidunt aliquet habitant. At id amet leo tellus tincidunt sed. Sagittis elementum duis cursus viverra morbi. Venenatis eget at dignissim magna.
Faucibus feugiat libero sit in lorem purus. Est aenean ut faucibus lobortis luctus nibh. Enim viverra cras lacus orci facilisis elementum arcu. Sit odio libero id scelerisque neque. Volutpat diam id augue ligula magnis. Enim molestie massa ipsum interdum dictum. Arcu mattis congue adipiscing sed proin lacus, ipsum urna. Ac lobortis volutpat molestie habitant ullamcorper sapien, amet viverra amet. Sit accumsan, iaculis mollis cursus amet. Nibh ipsum nisi odio massa venenatis. Fermentum, semper nunc adipiscing bibendum.
Facilisi pellentesque integer pulvinar ut morbi vestibulum neque. Quis vitae, cursus augue odio. Vulputate sit ut vestibulum orci sagittis sed. Vitae phasellus porttitor faucibus mus volutpat arcu quam. Porta praesent aliquet morbi aenean cursus dolor. Scelerisque vestibulum eget a sollicitudin neque blandit. Quis congue quis lobortis id faucibus gravida. Donec interdum amet, duis nunc elit. Ut est amet senectus sed. Sed placerat facilisis nunc ultricies sem sed facilisis mauris nulla.

Eget tortor posuere tortor natoque enim nullam et, dignissim porttitor. Lorem dictum ac vestibulum, pharetra rutrum lectus id. Sed euismod suscipit consectetur facilisis mauris, auctor justo. Commodo netus tortor, tristique nulla et facilisis rhoncus nulla amet. Leo eget lacinia ut lorem. Tristique tempor vitae eget quisque non. Sit vitae justo amet amet dolor vitae in erat est. A condimentum eget morbi lacinia vivamus augue sed sed. Amet malesuada ipsum amet tempor eu molestie. Nisl, lectus tempus sit nisl, parturient ornare iaculis justo, sagittis. Et augue neque vitae faucibus. Sit blandit convallis vitae, aenean adipiscing at non amet ac. Mattis ut eu etiam aliquam ipsum neque.
Luctus quis proin faucibus egestas adipiscing. Duis pellentesque volutpat nisi, molestie elementum. Duis massa risus eget nulla et lacus, orci. Ac consequat cursus viverra quis elementum nunc varius morbi. Consequat neque ultricies vulputate vitae neque. Sed vitae eu feugiat magnis at odio nulla aliquet fusce. Cursus lorem orci eu felis, ultricies.
Vestibulum congue convallis eu ultrices. Purus consequat, netus ultrices lectus sed penatibus. Tristique sapien nec eget elementum, feugiat gravida lobortis. Nam morbi aenean neque pulvinar. Volutpat convallis magnis venenatis purus amet, venenatis. Egestas vitae sit morbi cum enim. Sagittis nec elementum vulputate faucibus viverra fringilla. Quam non morbi lorem iaculis convallis sagittis nam consequat augue. Ac diam placerat vel non in nec. Ultrices ante tellus eu, nullam vitae habitant sit turpis. Pulvinar eu vel ac varius. Viverra pretium semper tristique lorem ac facilisi pharetra nisl. Enim nisi, blandit sem posuere proin orci ut consequat. Laoreet id tellus ut pharetra amet, arcu, posuere in. Nibh laoreet eget tempor senectus id lectus.

Quis et tempor neque facilisis risus mi. Et, pellentesque ullamcorper justo non erat consectetur tincidunt. Tellus leo sed elementum sit tristique sapien vitae pulvinar. Elit elit, praesent vitae eu nisl proin adipiscing. Laoreet praesent ullamcorper pharetra porttitor a eu. Facilisis malesuada leo condimentum sollicitudin egestas enim, egestas. Eu, dapibus nunc faucibus lorem euismod nunc tristique mi. Volutpat interdum id in sit vitae congue iaculis. Blandit massa neque luctus consectetur neque gravida ornare.

Eu, odio convallis nunc, dictum vitae. Sit pellentesque dolor eleifend eget. Sed aliquam justo, proin urna. Ut tristique iaculis eu nunc adipiscing nullam pellentesque sit diam. Volutpat dignissim viverra pellentesque faucibus consectetur cursus vitae nulla.

Risus diam et suspendisse non consectetur amet amet amet. Faucibus consectetur tincidunt tempor ipsum, et sit faucibus adipiscing. Ultricies lacus morbi nam euismod varius at dui tristique diam. Vitae, fermentum netus fermentum egestas tempus pretium a, feugiat odio. Elementum vitae leo quisque gravida leo. Facilisis etiam a nunc rhoncus morbi phasellus dui eu. Facilisi sollicitudin diam arcu, enim sit eget a, porttitor.`,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      mainNews: false,
    },
  ],
  tabs: [
    {
      tab: "New",
      has: true,
    },
    {
      tab: "Sport",
      has: true,
    },
    {
      tab: "Investigations",
      has: true,
    },
    {
      tab: "Weather",
      has: false,
    },
    {
      tab: "Business & economy",
      has: false,
    },
    {
      tab: "Technology & Science",
      has: false,
    },
  ],
  adminNews: [
    {
      id: 1,
      img: admin1,
      tag: ["Investigations"],
      title:
        "Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.",
      description: ``,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      status: "newItem",
    },
    {
      id: 2,
      img: admin2,
      tag: ["Investigations"],
      title:
        "Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.",
      description: ``,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      status: "newItem",
    },
    {
      id: 3,
      img: admin3,
      tag: ["Investigations"],
      title:
        "Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.",
      description: ``,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      status: "declinedNews",
    },
    {
      id: 4,
      img: admin4,
      tag: ["Investigations"],
      title:
        "Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.",
      description: ``,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      status: "declinedNews",
    },
    {
      id: 5,
      img: admin5,
      tag: ["Investigations"],
      title:
        "Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.",
      description: ``,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      status: "publishedNews",
    },
    {
      id: 6,
      img: admin6,
      tag: ["Investigations"],
      title:
        "Id arcu egestas et egestas augue. Tincidunt fermentum mattis tristique.",
      description: ``,
      author: "By Africanews",
      date: "11:09 03.03.2022",
      status: "publishedNews",
    },
  ],
};

export const { useGlobalState } = createGlobalState(initialState);
