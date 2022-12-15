import { createGlobalState } from "react-hooks-global-state";
import { IGlobalState } from "../types/IGlobalState";
import tech4 from "../assets/img/tech4.jpg";
import newsMain from "../assets/img/newsTestMain.jpg";

const initialState: IGlobalState = {
  isLogin: false,
  isLoggedIn: false,
  news: [
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

  tabs: [],
  adminEditNews: null,
};

export const { useGlobalState } = createGlobalState(initialState);
