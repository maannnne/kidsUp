import { Mongo } from 'meteor/mongo';

//HTML IMPORTS
import './main.html';
import './templates/Learn/Learn';
import './templates/Learn/ArmenianLiterature/VahanTerian';
import './templates/Learn/ArmenianLiterature/HovhannesTumanyan';
import './templates/Learn/ArmenianLiterature/ArmenianLiterature';
import './templates/Learn/ArmenianArt/ArmenianArt';
import './templates/Learn/ArmenianArt/MartirosSaryan';
import './templates/Learn/ArmenianArt/HovhannesAivazovsky';
import './templates/Learn/ArmenianMusic/ArmenianMusic';
import './templates/Learn/ArmenianMusic/ArnoBabajanian';
import './templates/Learn/ArmenianMusic/AramKhachaturian';

import './templates/Quizzes/Quizzes';
import './templates/Quizzes/Quiz1';
import './templates/Quizzes/Quiz2';

import './templates/Libraryy/Library';
import './templates/Libraryy/VahanTerianLib';
import './templates/Libraryy/HovhannesTumanyanLib';
import './templates/Libraryy/MartirosSaryanGal';
import './templates/Libraryy/ArnoBabajanianMusic';
import './templates/Libraryy/AramKhachaturianMusic';

import './templates/TakeNotes/TakeNotes';
import './templates/Home';
import './templates/Main';
import './templates/Navigation';

import './templates/Accounts/RegLog';



  
//JS IMPORTS
import './TakeNotesJS/TakeNotes';
import './QuizzesJS/Quiz1';
import './QuizzesJS/Quiz2';
import './RegisterJS/RegLog';
import './NavigationJS/Navigation';
import './HomeJS/Home';
import './LearnJS/VahanTerian';
import './LearnJS/HovhannesTumanyan';
import './LearnJS/MartirosSaryan';
import './LearnJS/HovhannesAivazovsky';
import './LearnJS/ArnoBabajanian';
import './LearnJS/AramKhachaturian';
import '../i18n/i18n';

//COLLECTIONS
LearnTerian = new Mongo.Collection('learnterian');
LearnTumanyan = new Mongo.Collection('learntumanyan');
LearnSaryan = new Mongo.Collection('learnsaryan');
LearnAivazovsky = new Mongo.Collection('learnaivazovsky');
LearnBabajanian = new Mongo.Collection('learnbabajanian');
LearnKhachaturian = new Mongo.Collection('learnkhachaturian');
ArmArtQuiz = new Mongo.Collection('armartquiz');
ArmArtRadios = new Mongo.Collection('armartradios');
ArmLitQuiz = new Mongo.Collection('armlitquiz');
ArmLitRadios = new Mongo.Collection('armlitradios');
Q1Results = new Mongo.Collection('q1results');
Q2Results = new Mongo.Collection('q2results'); 
Notes = new Mongo.Collection('notes');

//MAIN ROUTES
Router.route('/', {
  template: 'Home',
  name: '/'
});
Router.configure({  
  layoutTemplate: 'Main'
});



//LEARN ROUTES
Router.route('/Learn',  {
  name: 'learn'
});
Router.route('/ArmenianArt', {
  name: 'armenian-art'
});
Router.route('/ArmenianMusic', {
  name: 'armenian-music'
});
Router.route('/ArmenianLiterature', {
  name: 'armenian-literature'
});
Router.route('/ArmenianLiterature/VahanTerian', {
  name: 'vahan-terian'
});
Router.route('/ArmenianLiterature/HovhannesTumanyan', {
  name: 'hovhannes-tumanyan'
});
Router.route('/ArmenianArt/MartirosSaryan', {
  name: 'martiros-saryan'
});
Router.route('/ArmenianArt/HovhannesAivazovsky', {
  name: 'hovhannes-aivazovsky'
});
Router.route('/ArmenianMusic/ArnoBabajanian', {
  name: 'arno-babajanian'
});
Router.route('/ArmenianMusic/AramKhachaturian', {
  name: 'aram-khachaturian'
});



//QUIZ ROUTES
Router.route('/Quizzes', {
  name: 'quizzes'
});


Router.route('/Quizzes/Quiz1', {
  name: 'quiz1',
  template: 'Quiz1Container'
});


Router.route('/Quizzes/Quiz2', {
  name: 'quiz2',
  template: 'Quiz2Container'
});




//LIBRARY ROUTES
Router.route('/Media', {
  name: 'media'
});

Router.route('/Library/VahanTerianLib', {
  name: 'vahan-terian-lib'
});
Router.route('/Library/HovhannesTumanyanLib', {
  name: 'hovhannes-tumanyan-lib'
});


Router.route('/Library/MartirosSaryanGal', {
  name: 'martiros-saryan-gal'
});

Router.route('/Library/ArnoBabajanianMusic', {
  name: 'arno-babajanian-music'
});

Router.route('/Library/AramKhachaturianMusic', {
  name: 'aram-khachaturian-music'
});
  


//NOTES ROUTES
Router.route('/TakeNotes', {
  name: 'take-notes'
});



//REGLOG ROUTES
Router.route('/register', {
  name: 'register'
});

Router.route('/login', {
  name: 'login'
});



// ArmLitRadios.insert({textID: 1, value: 'vahanterian',       texthy: "Վահան Տերյան", text: 'Vahan Terian'});
// ArmLitRadios.insert({textID: 2, value: 'hovhannestumanian', texthy: "Հովհաննես Թումանյան", text: 'Hovhannes Tumanian'});
// ArmLitRadios.insert({textID: 3, value: 'yeghishecharents',  texthy: "Եղիշե Չարենց", text: 'Yeghishe Charents'});
// ArmLitRadios.insert({textID: 4, value: 'axelbakunts',       texthy: "Ակսել Բակունց", text: 'Axel Bakunts'});
// ArmLitRadios.insert({textID: 5, value: 'hamosahyan',        texthy: "Համո Սահյան", text: 'Hamo Sahyan'});
// ArmLitRadios.insert({textID: 6, value: 'paruyrsevak',       texthy: "Պարույր Սևակ", text: 'Paruyr Sevak'});
// ArmLitRadios.insert({textID: 7, value: 'hovhannesshiraz',   texthy: "Հովհաննես Շիրազ", text: 'Hovhannes Shiraz'});
// ArmLitRadios.insert({textID: 8, value: 'silvakaputikyan',   texthy: "Սիլվա Կապուտիկյան", text: 'Silva Kaputikyan'});



// ArmLitQuiz.insert({questionhy: "Ո՞վ է գրել <<Մթնաձորը>>։", question: "Who is the writer of 'Mtnadzor'?", questionID: 1, correctAnswer: "axelbakunts"});
// ArmLitQuiz.insert({questionhy: "Ո՞վ է գրել <<Մթնշաղի անուրջները>>։", question: "Who is the writer of 'Dreams of the Dawn'?", questionID: 2, correctAnswer: "vahanterian"});
// ArmLitQuiz.insert({questionhy: "Ո՞վ է գրել <<Սոման>>։", question: "Who is the writer of 'Soma'?", questionID: 3, correctAnswer: "yeghishecharents"});
// ArmLitQuiz.insert({questionhy: "Ո՞վ է գրել <<Գիքորը>>։", question: "Who is the writer of 'Gikor'?", questionID: 4, correctAnswer: "hovhannestumanian"});
// ArmLitQuiz.insert({questionhy: "Ո՞վ է գրել <<Անմահները հրամայում են>>։", question: "Who is the writer of 'Immortals Command'?", questionID: 5, correctAnswer: "paruyrsevak"});


// LearnTerian.insert({
//   parID: 1,
//   parEng: 'Vahan Terian was an Armenian poet, lyrist and public activist. He is known for his sorrowful, romantic poems, the most famous of which are still read and sung in their musical versions.',
//   parHy: 'Վահան Տերյան, նշանավոր հայ բանաստեղծ, քնարերգու և հասարակական-քաղաքական գործիչ։ Ծնվել է Ախալքալաքի Գանձա գյուղում՝ հոգևորականի ընտանիքում։ Նախնիները 1830 թվականին Ջավախքում վերաբնակություն էին հաստատել Կարինի Կարճնկոց գյուղից: Տոհմագրությունը սկսվում է տեր Ղազարից, ում թոռը՝ Սուքիասը, ապագա բանաստեղծի հայրն էր: 1897 թվականին Տերյանը մեկնում է Թիֆլիս, ուր սովորում էին այդ ժամանակ իր ավագ եղբայրները։ Եղբայրների մոտ ապագա բանաստեղծը սովորում է ռուսերեն ու պատրաստվում ընդունվելու Մոսկվայի Լազարյան ճեմարան։ 1899 թվականին Տերյանը ընդունվում է Լազարյան ճեմարան, ուր ծանոթանում է Ալեքսանդր Մյասնիկյանի, Պողոս Մակինցյանի, Ցոլակ Խանզադյանի և այլ՝ ապագայում հայտնի դարձած անձնավորությունների հետ։ Ավարտում է Լազարյան ճեմարանը 1906 թվականին, այնուհետև ընդունվում Մոսկվայի պետական համալսարան, որից կարճ ժամանակ հետո ձերբակալվում է հեղափոխական գործունեության համար ու նետվում Մոսկվայի Բուտիրկա բանտը։'
// });
// LearnTerian.insert({
//   parID: 2,
//   parEng: 'Terian was born in the Gandza village (განძანი) of Javakheti region of Georgia (then in Russian Empire). Schooled in Tiflis, he then studied at the Lazarian College in Moscow, where he was exposed to symbolism and joined the Russian Social Democrats. He was jailed by Czarist police for his political activity. He is mostly known for his poems dedicated to autumn and love. That is why Teryan is known as "Singer of Autumn" in Literature. He published his first book of poems, "Dreams at Dusk", in 1908, which made him an immediate sensation, Hovhannes Tumanian calling him the most original lyric poet of his age. He later published "Night Remembrance", "The Golden Legend", "The Return", "The Golden Link", "In the Land of Nairi" (where he substitute the word "Nairi" for each instance where the word "Armenia" would have suited), and "The Cats Paradise". His poems are filled with images of rain, mist, pallid fields and shapeless shadows, symbols of sorrow, despair and eventually, peace.',
//   parHy: '1908 թվականին Թիֆլիսում լույս է տեսնում Տերյանի ստեղծագործությունների «Մթնշաղի անուրջներ» ժողովածուն, որը շատ ջերմ է ընդունվում՝ թե՛ ընթերցողների, և թե՛ քննադատների կողմից։ 1915 թվականին «Մշակ» թերթում հրատարակվում է բանաստեղծի հայրենասիրական բանաստեղծությունների «Երկիր Նաիրի» շարքը։ 1912 թվականին հիմնադրում է «Պանթեոն» հրատարակչությունը և ծավալում գրահրատարակչական, թարգմանական լայն գործողություն։ 1915-1916 թվականներին Տերյանը մասնակցում է Վալերի Բրյուսովի և Մաքսիմ Գորկու կազմած ու խմբագրած «Հայաստանի պոեզիան» և «Հայ գրականության ժողովածու» գրքերի ստեղծման աշխատանքներին։ Հայերենից ռուսերեն է թարգմանում Գաբրիել Սունդուկյանի «Պեպո»-ն, Րաֆֆու «Կայծեր»-ի առաջին հատորը, Շիրվանզադեի «Չար ոգի»-ն։'
// });
// LearnTerian.insert({
//   parID: 3,
//   parEng: 'In 1913, Terian left Moscow University for the University of St. Petersburg, where he majored in oriental languages, intensifying his political involvement. After the revolution he became representative of Armenians in the Ministry of Nations, personally working with Lenin and Stalin. In 1916, Vahan Terian published a collection of poems entitled Land of Nairi (in Armenian: (Yerkir Nairi), in which he uses Nairi in place of Armenia. Likewise in 1923, Yeghishe Charents wrote a satirical novella entitled Land of Nairi, using once again Nairi as a synonym for Armenia. Hayastan Yeghiazarian used Nairi Zarian as his pen name, replacing his first name, Hayastan (which is what Armenians call Armenia in their own language since the Late Middle Ages) with Nairi. He died in Orenburg of tuberculosis shortly before his 35th birthday. He was buried there and the grave had been marked by a wooden cross, which was quickly forgotten and the exact spot lost. In 1964 soil from the Orenburg cemetery was brought to Yerevan by Terians daughter and buried in the Komitas Pantheon with a cenotaph was placed. Each year there is a commemoration of his life in Javakhk region at Gandza village where he was born.',
//   parHy: '1916 թվականին երևում են Վահանի կրծքում բուն դրած թոքախտի նշանները։ Գալիս է Կովկաս բժշկվելու, բայց փետրվարյան հեղափոխությունը դրդում է նրան թողնել բժշկվելը և գնալ Պետերբուրգ։ Խորհրդային իշխանության հաստատման առաջին իսկ օրերից դառնում է Ստալինի մոտիկ աշխատակիցը։ 1917 թվականի հոկտեմբերին Տերյանը ակտիվորեն մասնակցում է բոլշևիկյան հեղափոխությանը և այն հաջորդած քաղաքացիական պատերազմին։ Լենինի ստորագրությամբ մանդատով մասնակցում է Բրեստի խաղաղ պայմանագրի ստորագրմանը։ 1919 թվականին Տերյանը՝ լինելով Համառուսական Կենտրոնական Գործկոմի անդամ, առաջադրանք է ստանում մեկնել Թուրքիա, սակայն ծանր հիվանդության պատճառով ստիպված է լինում մնալ Օրենբուրգում, ուր և վախճանվում է 1920 թվականի հունվարի 7-ին ընդամենը 35 տարեկան հասակում։'
// });  
// LearnTerian.insert({
//   parID: 0,
//   fullNameEng: "Vahan Sukias Ter-Grigoryan",
//   bornEng: "January 28, 1885",
//   diedEng: "January 7, 1920 (aged 34)",
//   nationalityEng: "Armenian",
//   educationEng: "University of Moscow Lazarian College",
//   periodEng: "1903–1911",
//   fullNameHy: "Վահան Սուքիասի Տեր-Գրիգորյան",
//   bornHy: "Փետրվարի 9, 1885",
//   diedHy: "Հունվարի 7, 1920 (34 տարեկանում)",
//   nationalityHy: "Հայ",
//   educationHy: "Մոսկվայի պետական համալսարան և Լազարյան ճեմարան",
//   periodHy: "1903–1911",
// });



   
// LearnSaryan.insert({
//   parID: 0,
//   fullNameEng: "Martiros Sargis Saryan",
//   bornEng: "28 February, 1880",
//   diedEng: "5 May, 1972 (aged 92)",
//   nationalityEng: "Armenian",
//   educationEng: "Moscow School of Arts",
//   genreEng: "portrait, landscape, still life, illustration, scenery",
//   fullNameHy: "Մարտիրոս Սարգսի Սարյան",
//   bornHy: "Փետրվարի 28, 1880",
//   diedHy: "Մայիսի 5, 1972 (92 տարեկանում)",
//   nationalityHy: "Հայ",
//   educationHy: "Մոսկվայի նկարչության ուսումնարան",
//   genreHy: "	դիմապատկեր, բնանկար, նատյուրմորտ",
// });

// LearnSaryan.insert({
//   parID: 1,
//   parEng: 'Martiros Saryan was an Armenian painter, the founder of a modern Armenian national school of painting. He was born into an Armenian family in Nakhichevan-on-Don (now part of Rostov-on-Don, Russia). In 1895, aged 15, he completed the Nakhichevan school and from 1897 to 1904 studied at the Moscow School of Arts, including in the workshops of Valentin Serov and Konstantin Korovin. He was heavily influenced by the work of Paul Gauguin and Henri Matisse. He exhibited his works in various shows. He had works shown at the Blue Rose Exhibit in Moscow.',
//   parHy: 'Մարտիրոս Սարգսի Սարյան, հայ նկարիչ, ԽՍՀՄ ժողովրդական նկարիչ (1960), ԽՍՀՄ Գեղարվեստի ակադեմիայի իսկական անդամ (1947), ՀԽՍՀ ԳԱ ակադեմիկոս (1956), Սոցիալիստական աշխատանքի հերոս (1965), ՀԽՍՀ նկարիչների միության նախագահ (1945-1951)։ Սարյանի նախնիները եղել են անեցի, որ գաղթել են Ղրիմ, մասնակցել տեղի հայկական գաղթավայրի հիմնադրմանը։ Նրանց շառավիղները Ղրիմից տեղափոխվել և մասնակցել են Նոր Նախիջևանի հայկական գաղութի ստեղծմանը։ 1895 թվականին Սարյանը ավարտել է տեղի հանրակրթական երկլեզվյան (հայերեն, ռուսերեն) ուսումնարանը։ Հ. Արծաթպանյանի ղեկավարությամբ մասնագիտական նախնական գիտելիքներ ստանալուց հետո, 1897-1904 թվականներին սովորել է Մոսկվայի Գեղանկարչության, քանդակագործության և ճարտարապետության ուսումնարանի գեղանկարչության բաժնում։ 1901 թվականին, առաջին անգամ, մեկնել է Կովկաս, եղել Երևանում, Աշտարակում, Վաղարշապատում, Սևանում, 1902 թվականին՝ Անիում։ Ճամփորդության ընթացքում, ինչպես և հետագա տարիներին, հափշտակությամբ ուսումնասիրել է իր ժողովրդի պատմությունը, նիստուկացը, մշակույթը, ճարտարապետության, քանդակագործության, որմնանկարչության և դեկորատիվ-կիրառական արվեստի հուշարձանները, որը վճռական ազդեցություն է ունեցել Սարյանի աշխարհայացքի և ստեղծագործական մեթոդի ձևավորման ու զարգացման վրա։ 1903 թվականին ավարտել է ուսումնարանի հիմնական դասընթացը և մոտ երկու տարի կատարելագործվել նույն հաստատությանը կից Վ. Ա. Սերովի և Կ. Ա. Կորովինի «Դիմանկարի արվեստանոցում»։ Ուսումնառության տարիներին մոտիկից շփվել է ռուս մտավորականության լավագույն ներկայացուցիչներից շատերի հետ, ինչը զգալի նշանակության է ունեցել նրա՝ առաջադեմ մտավորականի և քաղաքացի արվեստագետի դիրքորոշման մեջ։'
// });
// LearnSaryan.insert({
//   parID: 2,
//   parEng: 'He first visited Armenia, then part of the Russian Empire, in 1901, visiting Lori, Shirak, Echmiadzin, Haghpat, Sanahin, Yerevan and Sevan. He composed his first landscapes depicting Armenia: Makravank, 1902; Aragats, 1902; Buffalo. Sevan, 1903; Evening in the Garden, 1903; In the Armenian village, 1903, etc., which were highly praised in the Moscow press. From 1910 to 1913 he traveled extensively in Turkey, Egypt and Iran. In 1915 he went to Echmiadzin to help refugees who had fled from the Armenian genocide in the Ottoman Empire. In 1916 he traveled to Tiflis (now Tbilisi) where he married Lusik Agayan. It was there that he helped organise the Society of Armenian Artists.',
//   parHy: 'Սարյանը ստեղծել է դիմանկարներ, բնանկարներ, նատյուրմորտներ, պաննոներ, ձևավորել գրքեր, կատարել բեմանկարչական գործեր։ Նրա համար չեն եղել կարևոր ու երկրորդական ժանրեր։ Գեղարվեստական որակը նկարչի համար դարձել է հիմնանպատակ։ Նրա 1896-1903-ի երկերում («Մոր դիմանկարը», 1898, «Կովեր», 1899, «Ուստիան Սարյանի դիմանկարը», 1900, «Ինքնադիմանկար», «Մաքրավանք», երկուսն էլ՝ 1902, «Սոֆյա Միանսարյան», 1903) տրված է օբյեկտների ռեալիստական, «քանդակային» կառուցվածքը։ Կոլորիտը աքրոմատիկ է ու «թանգարանային»։ Գերակշռող մոխրաշագանակագույնը կատարում է լույսի ու ստվերի աստիճանավորումն իրացնող դեր։ Ձևը սահմանափակվում է իրականի արտաքին-ֆիզիկական հավաստիությունը վերարտադրելով։'
// });
// LearnSaryan.insert({
//   parID: 3,
//   parEng: 'After the Bolshevik seizure of power in 1917 he went with his family to live in Russia. In 1921 they moved to Armenia. While most of his work reflected the Armenian landscape, he also designed the coat of arms for Armenian SSR and designed the curtain for the first Armenian state theatre. From 1926–1928 he lived and worked in Paris, but most works from this period were destroyed in a fire on board the boat on which he returned to the Soviet Union. From 1928 until his death, Saryan lived in Soviet Armenia. In the difficult years of the 1930s, he mainly devoted himself again to landscape painting, as well as portraits. He also was chosen as a deputy to the USSR Supreme Soviet and was awarded the Order of Lenin three times and other awards and medals. He was a member of the USSR Art Academy (1974) and Armenian Academy of Sciences (1956). Saryan died in Yerevan on 5 May 1972. His former home in Yerevan is now a museum dedicated to his work with hundreds of items on display. He was buried in Yerevan at the Pantheon next to Komitas Vardapet. His son Ghazaros (Lazarus) Saryan was a composer and educator. His great-granddaughter Mariam Petrosyan is also a painter, as well as cartoonist and award-winning novelist.',
//   parHy: '1915 թվականին, Մեծ Եղեռնի օրերին Սարյանը աշխատել է «Հայերին օգնող մոսկովյան կոմիտեում»։ Մեկնել է Էջմիածին՝ թուրքական սրից հալածական հայ գաղթականներին տեղում օգնություն ցույց տալու համար։ Հովհաննես Թումանյանի, Գ. Հովսեփյանի և հայ այլ մտավորականների հետ, մոլեգնող համաճարակի պայմաններում, բոլոր ջանքերը գործադրել է Արևելյան Հայաստանում ապաստանած արևմտահայերի վերջին մնացորդներին մահվան ճիրաններից փրկելու համար։ Անքուն գիշերների հետևանքով և տեսածի ծանր տպավորության տակ հոգեկան ցնցում է ստացել։ Հովհաննես Թումանյանի հանձնարարությամբ Սարյանին տեղափոխել են Թիֆլիս՝ հիվանդանոց։ 1916 թվականին, Վարդգես Սուրենյանցի, Փանոս Թերլեմեզյանի, Եղիշե Թադևոսյանի և այլոց հետ մասնակցել է Հայ արվեստագետների միության ստեղծմանը, Վարդգես Սուրենյանցի հետ ձևավորել Վալերի Բրյուսովի «Հայ պոեզիան հնագույն ժամանակներից մինչև մեր օրերը» անթոլոգիան, 1919 թվականին Նոր Նախիջևանում հիմնել է գավառագիտական թանգարան։ Հայաստանում սովետական կարգերի հաստատումից հետո Սարյանը 1921 թվականին ընտանիքով տեղափոխվել և մշտական բնակություն է հաստատել Երևանում, որտեղ էլ 1972 թվականի մայիսի 5-ին վախճանվել է։ Թաղված է Երևանի Կոմիտասի անվան պանթեոնում։ 1967 թվականին Երևանում բացվել է Սարյանի տուն-թանգարանը, ուր գտնվում է նրա ստեղծագործական ժառանգության մի զգալի մասը։ Սարյանի գործերը կենտրոնացված են Հայաստանի պետական պատկերասրահում և նրա մասնաճյուղերում, ինչպես և Տրետյակովյան պատկերասրահում, ԱՊՀ երկրների տարբեր թանգարաններում, ԱՄՆ-ի, Ֆրանսիայի և այլ երկրների մասնավոր հավաքածուներում։'
// });
 

  
// LearnAivazovsky.insert({
//   parID: 0,
//   fullNameEng: "Hovhannes Aivazian",
//   bornEng: "29(17) July, 1817",
//   diedEng: "2 May, 1900 (aged 82)",
//   nationalityEng: "Armenian",
//   educationEng: "Imperial Academy of Arts",
//   genreEng: "marine art, portrait, landscape",
//   fullNameHy: "Հովհաննես Այվազյան",
//   bornHy: "Հուլիսի 29(17), 1817",
//   diedHy: "Մայիսի 2, 1900 (82 տարեկանում)",
//   nationalityHy: "Հայ",
//   educationHy: "Պետերբուրգի գեղարվեստի ակադեմիա",
//   genreHy: "ծովանկար, բնանկար, մարտանկարչություն",
// });

// LearnAivazovsky.insert({
//   parID: 1,
//   parEng: 'Ivan Konstantinovich Aivazovsky was an Armenian Romantic painter who is considered one of the greatest masters of marine art. Baptized as Hovhannes Aivazian, he was born into an Armenian family in the Black Sea port of Feodosia in Crimea and was mostly based there.',
//   parHy: 'Հովհաննես Կոստանդինի Այվազովսկի, Հովհաննես (Իվան) Կոստանդինի Հայվազովսկի, աշխարհահռչակ հայազգի հանճարեղ ծովանկարիչ Ռուսական կայսրությունում, Պետերբուրգի, Հռոմի, Ֆլորենցիայի, Շտուտգարտի, Ամստերդամի գեղարվեստի ակադեմիաների անդամ, Ռուսական աշխարհագրական ընկերության անդամ (1853), Ռուսական կայսրության պատվավոր ծովակալ, Ռուսաստանի կայսերական ակադեմիայի անդամ։'
// });
// LearnAivazovsky.insert({
//   parID: 2,
//   parEng: 'Following his education at the Imperial Academy of Arts in Saint Petersburg, Aivazovsky traveled to Europe and lived briefly in Italy in the early 1840s. He then returned to Russia and was appointed the main painter of the Russian Navy. Aivazovsky had close ties with the military and political elite of the Russian Empire and often attended military maneuvers. He was sponsored by the state and was well-regarded during his lifetime. The saying "worthy of Aivazovskys brush", popularized by Anton Chekhov, was used in Russia for describing something lovely. He remains highly popular in Russia in the 21st century.',
//   parHy: 'Լինելով համաշխարհային համբավ ունեցող նկարիչ՝ գերադասում էր ապրել և աշխատել իր ծննդավայր Ղրիմում։ Առավել հայտնի է իր ծովանկարներով, որոնք կազմում են նրա գործերի կեսից ավելին։ Այվազովսկին համարվում է բոլոր ժամանակների ամենամեծ ծովանկարիչներից մեկը։'
// });
// LearnAivazovsky.insert({
//   parID: 3,
//   parEng: 'One of the most prominent Russian artists of his time, Aivazovsky was also popular outside Russia. He held numerous solo exhibitions in Europe and the United States. During his almost 60-year career, he created around 6,000 paintings, making him one of the most prolific artists of his time. The vast majority of his works are seascapes, but he often depicted battle scenes, Armenian themes, and portraiture. Most of Aivazovskys works are kept in Russian, Ukrainian and Armenian museums as well as private collections.',
//   parHy: '1838 թվականի գարնանը նկարիչը մեկնեց Ղրիմ, որտեղ անցկացրեց երկու տարի։ Այստեղ նա ոչ միայն ծովանկարներ, այլև մարտանկարներ էր նկարում (մինչև անգամ մասնակցել է մարտական գործողությունների Չերկեսիի ափին, որտեղ, դիտելով դեսանտի իջեցումը Շախե գետի հովտում, ճեպանկարներ է արել «Դեսանտային ջոկատը Սուբաշի հովտում» նկարի համար)։ Սուբաշին Շախեի հովտի չերքեզական անվանումն է։ Այվազովսկու այս վերջին աշխատանքը, որ նա կատարել էր Կովկասյան ռազմաճակատի ափամերձ հատվածի պետ՝ գեներալ Ռաևսկու առաջարկով, հետագայում ձեռք բերեց Նիկոլայ Առաջինը։ 1839 թվականի ամռան վերջին Այվազովսկին վերադարձավ Պետերբուրգ, որտեղ սեպտեմբերի 23-ին նրան շնորհվեց գեղարվեստի ակադեմիայի ավարտական վկայական և, բացի այդ, նա ստացավ իր ազնվական առաջին աստիճանը։'
// });
// LearnAivazovsky.insert({
//   parID: 4,
//   parEng: 'Ivan Aivazovsky was born on 17 July (29 in New Style) 1817 in the city of Feodosia (Theodosia), Crimea, Russian Empire. In the baptismal records of the local St. Sargis Armenian Apostolic Church, Aivazovsky was listed as Hovhannes, son of Gevorg Aivazian (Armenian: Գէորգ Այվազեանի որդի Յօհաննեսն). During his study at the Imperial Academy of Arts, he was known in Russian as Ivan Gaivazovsky (Иванъ Гайвазовскій in the pre-1918 spelling). He became known as Aivazovsky since c. 1840, while in Italy. He signed an 1844 letter with an Italianized rendition of his name: "Giovani Aivazovsky".',
//   parHy: '1839 թվականի գարնանը Հովհահաննես Այվազովսկին մասնակցել Է ռուսական կայսերական զինված ուժերի՝ Կովկասի ափերի մոտ ծավալված զորաշարժերին, ծանոթացել ծովակալներ Ս.Պ. Լազարևի, Պ. Ս. Նախիմովի, Վ. Ա. Կոռնիլովի հետ։ Ղրիմում կատարած նկարների համար նույն տարվա աշնանը արժանացել է նկարչի կոչման։'
// });
// LearnAivazovsky.insert({
//   parID: 5,
//   parEng: 'His father, Konstantin, (c. 1765–1840), was an Armenian merchant from the Polish region of Galicia. His family had migrated to Europe from Western Armenia in the 18th century. After numerous familial conflicts, Konstantin left Galicia for Moldavia, later moving to Bukovina, before settling in Feodosia in the early 1800s. He was initially known as Gevorg Aivazian (Haivazian or Haivazi), but he changed his last name to Gaivazovsky by adding the Polish "-sky". Aivazovskys mother, Ripsime, was a Feodosia Armenian. The couple had five children—three daughters and two sons. Aivazovskys elder brother, Gabriel, was a prominent historian and an Armenian Apostolic archbishop.',
//   parHy: 'Այվազովսկին մահացել է 82 տարեկան հասակում, 1900 թվականի մայիսի 2-ին, ուղեղի արյունազեղումից՝ անավարտ թողնելով «Թուրքական նավի պայթյունը» կտավը։ Մահից անմիջապես առաջ ավարտել է «Ծովածոց» նկարը, իսկ հենց մահվան օրը սկսել է նկարել«Թուրքական նավի պայթեցումը» կտավը, որը մնացել է անավարտ։Թեոդոսիայի Ի.Կ.Այվազովսկու անվան պատկերասրահի կայքէջում այսպես է նկարագրված հանճարեղ նկարչի կյանքի վերջին օրը. 1900 թվականի ապրիլի 19-ի (մայիսի 2-ի) առավոտյան նկարիչը թեոդոսիական իր արվեստանոցում սովորականի պես տեղավորվեց նկարակալի առջև, ոչ մեծ ենթաշրջանակին քաշեց մաքուր կտավը՝ պատրաստվելով իրագործել իր վաղեմի ցանկությունը՝ մեկ անգամ ևս պատկերել թուրքերի դեմ հույն աշխարհազորայինների մղած ազատագրական պայքարի հերոսական դրվագներից։'
// });
// LearnAivazovsky.insert({
//   parID: 6,
//   parEng: 'During his 60-year career, Aivazovsky produced around 6,000 paintings of, what one online art magazine describes, "very different value ... there are masterpieces and there are very timid works". However, according to one count as many as 20,000 paintings are attributed to him. The vast majority of Aivazovskys works depict the sea. He rarely drew dry-landscapes and created only a handful of portraits. According to Rosa Newmarch Aivazovsky "never painted his pictures from nature, always from memory, and far away from the seaboard." Rogachevsky wrote that "His artistic memory was legendary. He was able to reproduce what he had seen only for a very short time, without even drawing preliminary sketches." Bolton praised "his ability to convey the effect of moving water and of reflected sun and moonlight."',
//   parHy: 'Որպես սյուժե՝ նա ընտրել էր իրական մի դեպք՝ անվեհեր հույն մարտիկ Կոնստանտին Կանարիսի սխրանքը՝ Քիոս կղզու մոտ թուրքական ծովակալական նավի պայթեցումը։ Օրվա ընթացքում նկարիչը գրեթե ավարտին հասցրեց նկարը։ Խոր գիշերով՝ քնի պահին անակնկալ մահը կտրեց Այվազովսկու կյանքի թելը։ «Թուրքական նավի պայթեցումը» անավարտ կտավը այդպես էլ մնացել է նկարակալի վրա, նկարչի արվեստանոցում, որը, ինչպես նաև՝ նկարչի ողջ տունը, վերածվել է թանգարանի։'
// });
// LearnAivazovsky.insert({
//   parID: 7,
//   parEng: 'Aivazovsky died on 19 April (2 May in New Style) 1900 in Feodosia. In accordance with his wishes, he was buried at the courtyard of St. Sargis Armenian Church. A white marble sarcophagus was made by Italian sculptor L. Biogiolli in 1901. A quote from Movses Khorenatsis History of Armenia in Classical Armenian is engraved on his tombstone: Մահկանացու ծնեալ անմահ զիւրն յիշատակ եթող (Mahkanatsu tsneal anmah ziurn yishatak yetogh), which translates: "He was born a mortal, left an immortal legacy" or "Born as a mortal, left the immortal memory of himself". The Russian inscription beneath reads: Профессоръ Иванъ Константиновичъ АЙВАЗОВСКIЙ 1817—1900, "Professor Ivan Konstantinovich Aivazovsky 1817-1900".',
//   parHy: 'Այվազովսկու ստեղծագործությանը բարձր գնահատական են տվել նրա շատ ու շատ ժամանակակիցներ, իսկ նկարիչ Ի.Ն.Կրամսկոյը գրել է.«Ով ինչ էլ ասի, Այվազովսկին բոլոր դեպքերում առաջին մեծության աստղ է և՝ ո՛չ միայն մեզանում, այլև ընդհանրապես արվեստի պատմության մեջ»։ Այվազովսկուն՝ որպես Ռուսական կայսրության աստիճանակարգի վերևից երկրորդ աստիճանում գտնվող ազնվականի, դեր-ծովակալի և պատվավոր քաղաքացու հուղարկավորել են զինվորական պատվով։ Իր կտակի համաձայն՝ թաղել են Թեոդոսիայի Սուրբ Սարգիս միջնադարյան հայկական եկեղեցու բակում։ 1903 թվականին նկարչի այրին մարմարե շիրմաքար է տեղադրել, որը իտալացի քանդակագործ Լ.Բիոջոլիի աշխատանքն է։ Շիրմաքարին գրաբար փորագրված են պատմահայր Մովսես Խորենացու խոսքերը. «Մահկանացու ծնեալ անմահ զիւրն յիշատակ եթող»։'
// });













// LearnTumanyan.insert({
//   parID: 0,
//   fullNameEng: "Hovhannes Tumanyan",
//   bornEng: "19 February, 1869",
//   diedEng: "23 March, 1923 (aged 54)",
//   nationalityEng: "Armenian",
//   periodEng: "1881–1923",
//   fullNameHy: "Հովհաննես Թումանյան",
//   bornHy: "Փետրվարի 19, 1869",
//   diedHy: "Մարտի 23, 1923 (54 տարեկանում)",
//   nationalityHy: "Հայ",
//   periodHy: "1881–1923"
// });

// LearnTumanyan.insert({
//   parID: 1,
//   parEng: 'Hovhannes Tumanyan was an Armenian poet, writer, translator, and literary and public activist. He is the national poet of Armenia. Tumanyan wrote poems, quatrains, ballads, novels, fables, and critical and journalistic articles. His work was mostly written in realistic form, often centering on everyday life of his time. Born in the historical village of Dsegh in the Lori region, at a young age Tumanyan moved to Tiflis, which was the center of Armenian culture under the Russian Empire during the 19th and early 20th centuries. He soon became known to the wide Armenian society for his simple but very poetic works.',
//   parHy: 'Հովհաննես Թադևոսի Թումանյան (փետրվարի 19, 1869, Դսեղ, Բորչալուի գավառ, Թիֆլիսի նահանգ, Ռուսական կայսրություն - մարտի 23, 1923, Մոսկվա, ԽՍՀՄ), հայ բանաստեղծ, արձակագիր, գրական, ազգային և հասարակական գործիչ։ Գրել է բանաստեղծություններ, պոեմներ, քառյակներ, բալլադներ, պատմվածքներ ու հեքիաթներ, ակնարկներ, քննադատական ու հրապարակախոսական հոդվածներ, կատարել է թարգմանություններ, մշակել է «Սասնա ծռեր» դյուցազնավեպի «Սասունցի Դավիթ» ճյուղը։ Համարվում է ամենայն հայոց մեծ բանաստեղծ:'
// });
// LearnTumanyan.insert({
//   parID: 2,
//   parEng: 'From 1877–1879, Tumanyan attended the parochial school of Dsegh. From 1879–1883 he went to a school in Jalaloghly. Tumanyan moved to Tiflis in 1883, where he attended the Nersisyan School from 1883–1887. Tumanyan has wrote his first poem at the age of 12, while studying in Jalaloghly school. He lived at the teachers house for a while and fell in love with the teachers daughter Vergine. Since 1893, Tumanyan worked for Aghbyur, Murtch, Hasker and Horizon periodicals and also was engaged in public activism.',
//   parHy: 'Հովհաննես Թումանյանը ծնվել է 1869 թվականի փետրվարի 19-ին Լոռվա Դսեղ գյուղում: 1877-1879 թվականներին Թումանյանը սովորել է Դսեղի ծխական դպրոցում։ 1879-1883 սովորել է Ջալալօղլու (այժմ Ստեփանավան) նորաբաց երկսեռ դպրոցում: 1883 թվականից բնակվել է Թիֆլիսում: 1883-1887 թվականներին սովորել է Թիֆլիսի Ներսիսյան դպրոցում, սակայն նյութական ծանր դրության պատճառով 1887 թվականին կիսատ թողնելով ուսումը` աշխատել է Թիֆլիսի հայ եկեղեցական դատարանում, այնուհետև Հայ Հրատարակչական միության գրասենյակում (մինչև 1893 թ.)։ 1893 թվականից աշխատակցել է «Աղբյուր», «Մուրճ», «Հասկեր», «Հորիզոն» գրական պարբերականներին: 1899 թվականին նրա նախաձեռնությամբ Թիֆլիսում ստեղծվել է «Վերնատուն» գրական խմբակը, որի անդամներն էին Հովհաննես Թումանյանը, Դերենիկ Դեմիրճյանը, Լևոն Շանթը, Ղազարոս Աղայանը, Ավետիք Իսահակյանը, Նիկոլ Աղբալյանը և ուրիշներ։ Որոշ ընդմիջումներով խմբակը գործել է մինչև 1908 թ.:'
// });
// LearnTumanyan.insert({
//   parID: 3,
//   parEng: 'In 1899, Tumanyan came up with an idea of organizing meetings of Armenian intellectuals of the time at his house on 44 Bebutov Street in Tiflis. Soon it became an influential literary group, which often gathered in the garret of Tumanyans house. Vernatun means garret in Armenian, which was the name the group was referred to. Prominent members of the collective were Avetik Isahakyan, Derenik Demirchyan, Levon Shant, Ghazaros Aghayan, Perch Proshyan, Nikol Aghbalian, Alexander Shirvanzade, Nar-Dos, Vrtanes Papazyan, Vahan Terian, Leo, Stepan Lisitsyan, Mariam Tumanyan, Gevorg Bashinjagyan and many other significant Armenian figures of early 20th century. With some pauses, it existed until 1908.',
//   parHy: '1912 թվականին Թումանյանն ընտրվել է նորաստեղծ Հայ գրողների կովկասյան ընկերության նախագահ, իսկ 1918 թվականին՝ Հայոց հայրենակցական միությունների միության (ՀՀՄՄ) նախագահ։ Առաջին համաշխարհային պատերազմում (1914-1918 թթ.) հայ ժողովրդի կրած վնասները հաշվելու և Փարիզի հաշտության խորհրդաժողովին (1919-1920 թթ.) ներկայացնելու նպատակով ՀՀՄՄ-ն 1918 թվականին ստեղծել է Քննիչ հանձնաժողով՝ Թումանյանի գլխավորությամբ։ 1912-1921 թվականներին եղել է Հայ գրողների կովկասյան միության նախագահ։ Հայաստանի խորհրդայնացումից հետո նախագահել է Հայաստանի օգնության կոմիտեն (1921-1922)։'
// });  
// LearnTumanyan.insert({
//   parID: 4,
//   parEng: 'In 1912 Tumanyan was elected the president of the Company of Caucasus Armenian Writers. In the fall of 1921, Tumanyan went to Constantinople to find support of Armenian refugees. After months spent there, he returned ill. After surgery in 1922, he started to get better. But in September, Tumanyans disease started to progress again. He was transferred to a hospital in Moscow, where he died on March 23, 1923.',
//   parHy: '1921 թվականի աշնանը Թումանյանը մեկնել է Կոստանդնուպոլիս՝ հայ գաղթականների համար օգնություն գտնելու նպատակով։ Մի քանի ամիս մնալով այնտեղ` նա վերադառնում է հիվանդացած։ Մահացել է 1923 թվականին՝ Մոսկվայում։ Թումանյանի ստեղծագործությունների հիման վրա նկարահանվել են մի շարք ֆիլմեր, ինչպես նաև ստեղծվել են Անուշ (1912) և Ալմաստ (1930) օպերաները հիմնված են Թումանյանի ստեղծագործությունների վրա։ Թումանյանը մահացել է 1923 թվականի մարտի 23-ին երեկոյան 9-ին՝ 54 տարեկան հասակում, թաղվել է Խոջիվանքի գերեզմանոցում։'
// });  





// LearnBabajanian.insert({
//   parID: 0,
//   fullNameEng: "Arno Babajanian",
//   bornEng: "22 January, 1921",
//   diedEng: "11 November, 1983 (aged 62)",
//   nationalityEng: "Armenian",
//   periodEng: "1952-1983",
//   fullNameHy: "Առնո Բաբաջանյան",
//   bornHy: "Հունվարի 22, 1921",
//   diedHy: "Նոյեմբերի 11, 1983 (62 տարեկանում)",
//   nationalityHy: "Հայ",
//   periodHy: "1952-1983"
// });

// LearnBabajanian.insert({
//   parID: 1,
//   parEng: 'Arno Babajanian was an Armenian composer and pianist during the Soviet era.',
//   parHy: 'Առնո Հարությունի Բաբաջանյան, հայ կոմպոզիտոր և դաշնակահար, Խորհրդային Միության և ՀԽՍՀ ժողովրդական արտիստ։'
// });
// LearnBabajanian.insert({
//   parID: 2,
//   parEng: 'Babajanian was born in Yerevan, Armenia. By age 5, his musical talent was apparent, and the composer Aram Khachaturian suggested that the boy be given proper music training. Two years later, in 1928, Babajanian entered the Yerevan State Musical Conservatory. In 1938, he continued his studies in Moscow with Vissarion Shebalin.',
//   parHy: 'Առնո Բաբաջանյանը ծնվել է Երևանում, 1921 թվականի հունվարի 22-ին։ Իր առաջին երաժշտական ստեղծագործությունը գրել է 9 տարեկան հասակում։ 1938 թվականին մեկնում է Մոսկվա և միանգամից ընդունվում է Գնեսինների անվան երաժշտական քոլեջի վերջին կուրս։ Այն ավարտելուց հետո ընդունվում է Պ. Ի. Չայկովսկու անվան ՄՊԿ (Բ. Մ. Բեռլինի դաշնամուրի դասարան): Նրա տաղանդը Արամ Խաչատրյանը դեռ հինգ տարեկանում նկատելով՝ որոշում է, որ տղան պետք է երաժշտությամբ զբաղվի։ Դրանից հետո, 1929-ին ընդունվել է Երևանի պետական կոնսերվատորիային կից երաժշտական դպրոցը, որն ավարտելուց հետո սովորում է կոնսերվատորիայում։ Այնուհետև, 1948-ին ուսումը շարունակել է Մոսկվայի կոնսերվատորիայի դաշնամուրի բաժնում՝ միաժամանակ կատարելագործվելով Մոսկվայում գործող Հայաստանի կուլտուրայի տանը կից ստուդիայում։'
// });
// LearnBabajanian.insert({
//   parID: 3,
//   parEng: 'He later returned to Yerevan, where from 1950 to 1956 he taught at the conservatory. In 1952 he wrote the Piano Trio in F-sharp minor. It received immediate acclaim and was regarded as a masterpiece from the time of its premiere. Subsequently, he undertook concert tours throughout the Soviet Union and Europe. In 1971, he was named a Peoples Artist of the Soviet Union.',
//   parHy: '1950-1956 թվականներին դասավանդել է Երևանի կոնսերվատորիայում։ 1956-ից ապրել և աշխատել է Մոսկվայում։'
// });  
// LearnBabajanian.insert({
//   parID: 4,
//   parEng: 'Babajanian wrote in various musical genres, including many popular songs in collaboration with leading poets such as Yevgeny Yevtushenko and Robert Rozhdestvensky. Much of his music is rooted in Armenian folk music and folklore, which he generally uses in the virtuosic style of Rachmaninov and Khachaturian. His later works were influenced by Prokofiev and Bartók. Praised by Dmitri Shostakovich as a "brilliant piano teacher", Babajanian was also a noted pianist and often performed his own works in concerts.',
//   parHy: 'Առնո Բաբաջանյանի ստեղծագործական հարուստ ժառանգությունը ներառում է երգեր, գործիքային կատարումներ, սիմֆոնիկ երաժշտություն։ Նա ստեղծագործել է տարբեր ոճերով՝ դասական, պոպ, ջազ։ Բաբաջանյանի ստեղծագործական ոճը ձևավորվել է Արամ Խաչատրյանի և Սերգեյ Ռախմանինովի ազդեցությամբ։ Իսկ նրա ստեղծագործական անհատականությունը դրսևորվել է դաշնամուրի և նվագախմբի համար գրված «Հերոսական բալլադում» (1950) և դաշնամուրային տրիոյում (1952)։ Լայն ժողովրդականություն վայելող «Հայկական ռապսոդիան» գրել է 1950-ին։ Կոմպոզիտորը մեծ հեղինակություն է վայելել և համագործակցել է պոետ Ռոբերտ Ռոժդեստվենսկու և երգիչ Մուսլիմ Մագոմաևի հետ։ (երգեր՝ «Королева красоты», «Голубая тайга», «Улыбнись», «Будь со мной», «В нежданный час», «Встреча», «Воспоминание», «Позови меня», «Загадай желание», «Благодарю тебя», «Свадьба»)։ Ֆենոմենալ հաջողության հասան համահեղինակներ Եվգենի Եվտուշենկոյի հետ գրված երգերը ( «Не спеши», «Чёртово колесо», «Твои следы»), Անդրեյ Վոզնեսենսկու հետ գրված «Год любви», «Москва-река», «Верни мне музыку» երգերը և Լեոնիդ Դերբենյովի հետ համատեղ գրված «Лучший город земли» երգը։ «Առաջին սիրո երգը» и «Երևան»- ը համարվում են որպես հիմն հարազատ քաղաքի։ Խորհրդային լավագույն ֆիլմերից շատերում հնչում են նրա հեղինակած կատարումները՝ «Առաջին սիրո երգը», «Երջանկության մեխանիկան», «Հարսնացուն հյուսիսից» և այլն։ Նա գրել է տարբեր ստեղծագործություններ՝ «Էլեգիա», «Նոկտյուրն» և այլն։ Առնո Բաբաջանյանը մահացել է Մոսկվայում, 1983 թվականի նոյեմբերի 11-ին։'
// });  



// LearnKhachaturian.insert({
//   parID: 0,
//   fullNameEng: "Aram Ilyich Khachaturian",
//   bornEng: "6 June, 1903",
//   diedEng: "1 May, 1978 (aged 74)",
//   nationalityEng: "Armenian",
//   periodEng: "1926-1978",
//   fullNameHy: "Արամ Եղիայի (Իլյիչ) Խաչատրյան",
//   bornHy: "Հունիսի 6, 1903",
//   diedHy: "Մայիսի 1, 1978 (74 տարեկանում)",
//   nationalityHy: "Հայ",
//   periodHy: "1926-1978"
// });

// LearnKhachaturian.insert({
//   parID: 1,
//   parEng: 'Aram Ilyich Khachaturian was a Soviet Armenian composer and conductor. He is considered one of the leading Soviet composers. Born and raised in Tbilisi, the multicultural capital of Georgia, Khachaturian moved to Moscow in 1921 following the Sovietization of the Caucasus. Without prior music training, he enrolled in the Gnessin Musical Institute, subsequently studying at the Moscow Conservatory in the class of Nikolai Myaskovsky, among others. His first major work, the Piano Concerto (1936), popularized his name within and outside the Soviet Union. It was followed by the Violin Concerto (1940) and the Cello Concerto (1946). His other significant compositions include the Masquerade Suite (1941), the Anthem of the Armenian SSR (1944), three symphonies (1935, 1943, 1947), and around 25 film scores. Khachaturian is best known for his ballet music—Gayane (1942) and Spartacus (1954). His most popular piece, the "Sabre Dance" from Gayane, has been used extensively in popular culture and has been covered by a number of musicians worldwide. His style is "characterized by colorful harmonies, captivating rhythms, virtuosity, improvisations, and sensuous melodies".',
//   parHy: 'Արամ Խաչատրյան, հայ կոմպոզիտոր, դիրիժոր, մանկավարժ, ԽՍՀՄ ժողովրդական արտիստ (1945), ՀԽՍՀ ԳԱ ակադեմիկոս (1963), ռուսական կոմպոզիտորական դպրոցի և հայ դասական երաժշտության ներկայացուցիչ, ով ճանաչված է որպես համաշխարհային դասական: Մանկությունը և պատանեկությունը անցկացրել է ցարական Թիֆլիսում՝ Կովկասի մշակութային բազմազգ մայրաքաղաքում, ապա 1921 թվականին տեղափոխվել է Մոսկվա։ Չունենալով տարրական երաժշտական գիտելիքներ՝ ընդունվել է Գնեսինի պետական երաժշտական ինստիտուտ՝ համատեղությամբ սովորելով Մոսկվայի կոնսերվատորիայում։ Առաջին մեծ գործը եղել է «Դաշնամուրի կոնցերտը» (1936), որով նա հայտնի է դարձել ԽՍՀՄ սահմաններից դուրս։ Ժամանակակիցների խոսքերով՝ Խաչատրյանի ոճը բնութագրվում է գունագեղ հարմոնիաներով, թովիչ ռիթմերով, վիրտուոզությամբ, իմպրովիզացիաներով և զգացական մեղեդիներով:'
// });
// LearnKhachaturian.insert({
//   parID: 2,
//   parEng: 'During most of his career, Khachaturian was approved by the Soviet government and held several high posts in the Union of Soviet Composers from the late 1930s, although he joined the Communist Party only in 1943. Along with Sergei Prokofiev and Dmitri Shostakovich, he was officially denounced as a "formalist" and his music dubbed "anti-people" in 1948 but was restored later that year. After 1950 he taught at the Gnessin Institute and the Moscow Conservatory and turned to conducting. He traveled to Europe, Latin America and the United States with concerts of his own works. In 1957 Khachaturian became the Secretary of the Union of Soviet Composers, a position he held until his death.',
//   parHy: 'Խաչատրյանը 20-րդ դարի ամենաճանաչված հայ կոմպոզիտորն էր, ինչպես նաև հայկական առաջին բալետի, սիմֆոնիայի, կոնցերտի և ֆիլմի երաժշտության հեղինակը։ Հետևելով ռուսական երաժշտության ավանդույթներին՝ նա իր ստեղծագործություններում լայնորեն օգտագործել է հայկական և կովկասյան, Արևելյան և Արևմտյան Եվրոպայի, Միջին Արևելքի ժողովրդի ազգային երաժշտությունը: Խաչատրյանի աշխատանքները ընդգրկում են բալետներ, սիմֆոնիաներ, կոնցերտներ, ֆիլմերի երաժշտություններ և այլն։ Երաժշտական քննադատ Էդվարդ Գրինֆիլդն այն կարծիքին է, որ Խաչատրյանը նշանակալի կերպով փայլել է խորհրդային ժամանակակիցների շրջանակում՝ ստեղծելով հստակորեն ճանաչելի ոճ՝ մի բան, որը իր նախորդներն ի վիճակի չեղան անելո: Նա իր ստեղծագործությունների մեծ մասը ստեղծել է 10 տարվա ընթացքում՝ 1936-1946 թվականներին՝ նախորդելով և հաջորդելով երկրորդ համաշխարհային պատերազմը: 1948 թվականի դատապարտումից և իր պաշտոնական վերականգնումից հետո Խաչատրյանն կյանքի վերջին 30 տարիների ընթացքում ստեղծել է միջազգային ճանաչում ստացած բազում ստեղծագործություններ:'
// });
// LearnKhachaturian.insert({
//   parID: 3,
//   parEng: 'Khachaturian composed the first Armenian ballet music, symphony, concerto, and film score. He is considered the most renowned Armenian composer of the 20th century. While following the established musical traditions of Russia, he broadly used Armenian and, to lesser extent, Caucasian, Eastern and Central European, and Middle Eastern peoples folk music in his works. He is highly regarded in Armenia, where he is considered a "national treasure". In 1950, Khachaturian began conducting and started teaching composition at his alma maters—the Gnessin Institute (since 1950), and later at the Moscow Conservatory (since 1951). Some of his notable students include Aziz El-Shawan, Andrei Eshpai, Anatol Vieru, Edgar Hovhannisyan, Mikael Tariverdiev,Mark Minkov,Alexey Rybnikov,Tolib Shakhidi, Georgs Pelēcis,Rostislav Boiko (ru),and Nodar Gabunia (ru). During his career as a university professor, Khachaturian emphasized the role of folk music to his students and instilled the idea that composers should master their nations folk music heritage. Also, in 1950, he began working on his third and last ballet, Spartacus (1950–54), which later proved to be his last internationally acclaimed work. He was named Peoples Artist of the Soviet Union in 1954. He revised Spartacus in 1968.',
//   parHy: 'Ըստ Ջեյմս Բաքսթի՝ այն, ինչը Խաչատրյանին առանձնացրել է մյուս խորհրդային կոմպոզիտորներից, ազգային հայկական վոկալային և գործիքային ժամանակակից նվագախմբային հմտությունների միախառնումն է: Խաչատրյանի երաժշտությունը բնութագրվում է ակտիվ ռիթմիկ զարգացմամբ, ինչը հանգեցնում է կամ հիմնական բանաձևի սոսկ կրկնման, կամ այս բանաձևի շրջանակներում շեշտի խաղի։ 1950 թվականին Խաչատրյանը սկսում է իր դիրիժորական գործունեությունը և սկսած 1950 թվականից իր ալմա մատերում սկսում է դասավանդել կոմպոզիտորական արվեստ (կոմպոզիցիա)։ Հետագայում դասավանդում է Մոսկվայի կոնսերվատորիայում (սկսած 1951 թվականից): Նրա մի շարք ուսանողներ դարձել են նշանավոր և հանրաճանաչ: Համալսարանական պրոֆեսոր աշխատելու տարիներին Խաչատրյանն իր ուսանողների մոտ ընդգծում է ժողովրդական երաժշտության դերը և իր ուսանողների մեջ սերմանում այն գաղափարը, որ կոմպոզիտորները պետք է կատարելագործեն իրենց ազգային երաժշտական ժառանգությունը:'
// });  
// LearnKhachaturian.insert({
//   parID: 4,
//   parEng: '"Following the success of Spartacus toward the end of the fifties, his remaining years were devoted less to composition, and more to conducting, teaching, bureaucracy and travel." He served as the President of the Soviet Association of Friendship and Cultural Cooperation with Latin American States from 1958 and was a member of the Soviet Peace Committee (since 1962). "He frequently appeared in world forums in the role of champion of an apologist for the Soviet idea of creative orthodoxy."Khachaturian toured with concerts of his own works in around 30 countries, including in all the Eastern Bloc states, Italy (1950), Britain (1955, 1977), Latin America (1957) and the United States (1960, 1968). His January 1968 visit to U.S. capital of Washington, D.C. was a significant one. He conducted the National Symphony Orchestra in a program of his own works.',
//   parHy: '1950 թվականին նա սկսում է աշխատել իր երրորդ և վերջին բալետի՝ «Սպարտակի» (1950-1954) վրա, որը հետագայում համարվեց նրա՝ միջազգային ճանաչում ստացած վերջին աշխատանքը: Նա 1954 թվականին ստացավ Խորհրդային Միության ժողովրդական արտիստի կոչում: «Սպարտակ» բալետը վերամշակվեց 1968 թվականին: 1956 թվականի դեկտեմբերի 27-ին Խաչատրյանի հայտնի «Սպարտակ»-ը բեմադրվում է Կիրովի բեմում։ Խաչատրյանի 70-ամյակը պաշտոնապես նշվել է Մոսկվայում և Երևանում:'
// });  
// LearnKhachaturian.insert({
//   parID: 5,
//   parEng: 'Khachaturian went on to serve again as Secretary of the Composers Union, starting in 1957 until his death. He was also a deputy in the fifth Supreme Soviet of the Soviet Union (1958–62). In the last two decades of his life, Khachaturian wrote three concert rhapsodies—for violin (1961–62), cello (1963) and piano (1965)—and solo sonatas for unaccompanied cello, violin, and viola (1970s), which are considered to be his second and third instrumental trilogies.',
//   parHy: '«Սպարտակ» բալետի հաջողություններից հետո մինչև 1950-ական թվականները՝ կյանքի մնացյալ տարիները ավելի քիչ է նվիրում երաժշտություն գրելուն և ավելի շատ զբաղվում է ուսուցմամբ, ճանապարհորդությամբ, բյուրոկրատիայով և կազմակերպչական աշխատանքներով: Նա Լատինական Ամերիկայի նահանգների հետ բարեկամության և մշակութային համագործակցության խորհրդային ասոցիացիայի նախագահի պաշտոնում ծառայել է 1958 թվականից և եղել խորհրդային խաղաղության կոմիտեի անդամ (սկսած 1962 թվականից): Խաչատրյանն իր սեփական ստեղծագործությունները ընդգրկող համերգներով շրջագայել է ավելի քան 30 երկրներում, որոնց թվում են արևելյան դաշինքի պետությունները, Իտալիան (1950), Բրիտանիան (1955, 1977), Լատինական Ամերիկան (1957) և Միացյալ նահանգները (1960, 1968). 1968 թվականին մշակութային նշանակալի ուղևորություն է ունենում դեպի Վաշինգտոն՝ ղեկավարելով ազգային սիմֆոնիկ նվագախումբը՝ իր իսկ ստեղծագործություններից բաղկացած ծրագրով:'
// });  
// LearnKhachaturian.insert({
//   parID: 6,
//   parEng: 'Khachaturians works span a broad range of musical types, including ballets, symphonies, concertos, and film scores. Music critic Edward Greenfield expresses the opinion that Khachaturian "notably outshone other Soviet contemporaries in creating a sharply identifiable style, something which his successors have found impossible to emulate". He composed a great portion of his works in a ten-year span between 1936 and 1946, preceding and following the Second World War. Despite his formal restoration after the 1948 denunciation, Khachaturian only succeeded in composing one internationally acclaimed work in the last 30 years of his life, the ballet Spartacus. According to James Bakst, what made Khachaturian unique among Soviet composers is "the blending of national Armenian vocal and instrumental intonations with contemporary orchestral techniques". Khachaturians music is characterized by an active rhythmic development, which reaches either a mere repetition of the basic formula (ostinato) or "a game of emphasis within this formula".',
//   parHy: 'Խաչատրյանը կրկին շարունակում է ծառայել որպես ԽՍՀՄ կոմպոզիտորների քարտուղար՝ սկսած 1957 թվականից մինչև մահը: Նա նաև պատգամավոր էր Խորհրդային Միության 5-րդ գումարման Գերագույն խորհրդում (1958–1962): Իր կյանքի վերջին քսան տարիներին Խաչատրյանը գրել է երեք համերգային ռապսոդիաներ՝ ջութակի համար (1961-1962), թավջութակի համար (1963), դաշնամուրի համար (1965) և սոլո սոնատներ թավջութակի, ջութակի և ալտի նվագակցության համար (1970-ականներ): Նրա վերջին ստեղծագործությունները հաճախ քննադատվում էին որպես կրկնվող և էլեկտրական:'
// });  
// LearnKhachaturian.insert({
//   parID: 7,
//   parEng: 'Khachaturian died in Moscow on 1 May 1978, after a long illness, just short of his 75th birthday. He was buried at the Komitas Pantheon in Yerevan on 6 May, next to other distinguished Armenians. He was survived by his son, Karen, and daughter, Nune, and his nephew, Karen Khachaturian, who was also a composer.',
//   parHy: 'Խաչատրյանը մահացել է Մոսկվայում 1978 թվականի մայիսի 1-ին՝ իր 75 ամյակի շեմին: Թաղվել է մայիսի 6-ին Երևանում՝ «Կոմիտասի անվան պանթեոնում»՝ հայազգի այլ մեծերի՝ Կոմիտասի, Իսահակյանի, Սարյանի կողքին: Նա ապրել է իր որդու՝ Կարենի, դստեր՝ Նունեի, և եղբորորդու՝ Կարեն Խաչատրյանի հետ, ով ևս կոմպոզիտոր է:'
// });  

















// ArmArtRadios.insert({textID: 1, value: 'martirossaryan',    texthy: "Մարտիրոս Սարյան", text: 'Martiros Saryan'});
// ArmArtRadios.insert({textID: 2, value: 'valentinpodpomogov',texthy: "Վալենտին Պոդպոմոգով", text: 'Valentin Podpomogov'});
// ArmArtRadios.insert({textID: 3, value: 'ivanaivazovsky',    texthy: "Հովհաննես Այվազովսկի", text: 'Ivan Aivazovsky'});
// ArmArtRadios.insert({textID: 4, value: 'vardgessureniants', texthy: "Վարդգես Սուրենյանց", text: 'Vardges Sureniants'});
// ArmArtRadios.insert({textID: 5, value: 'minasavetisyan',    texthy: "Մինաս Ավետիսյան", text: 'Minas Avetisyan'});
// ArmArtRadios.insert({textID: 6, value: 'arshilegorky',      texthy: "Արշիլ Գորկի", text: 'Arshil Gorky'});
// ArmArtRadios.insert({textID: 7, value: 'torosroslin',       texthy: "Թորոս Ռոսլին", text: 'Toros Roslin'});
// ArmArtRadios.insert({textID: 8, value: 'hakobhakobian',     texthy: "Հակոբ Հակոբյան", text: 'Hakob Hakobian'});

// ArmArtQuiz.insert({questionhy: "Ո՞վ է հետևյալ նկարի հեղինակը", question: "Who is the painter of this painting?", questionID: 1, imageName: 'question1.jpg', correctAnswer: "martirossaryan"});
// ArmArtQuiz.insert({questionhy: "Ո՞վ է հետևյալ նկարի հեղինակը", question: "Who is the painter of this painting?", questionID: 2, imageName: 'question2.jpg', correctAnswer: "valentinpodpomogov"});
// ArmArtQuiz.insert({questionhy: "Ո՞վ է հետևյալ նկարի հեղինակը", question: "Who is the painter of this painting?", questionID: 3, imageName: 'question3.jpg', correctAnswer: "ivanaivazovsky"});
// ArmArtQuiz.insert({questionhy: "Ո՞վ է հետևյալ նկարի հեղինակը", question: "Who is the painter of this painting?", questionID: 4, imageName: 'question4.jpg', correctAnswer: "vardgessureniants"});
// ArmArtQuiz.insert({questionhy: "Ո՞վ է հետևյալ նկարի հեղինակը", question: "Who is the painter of this painting?", questionID: 5, imageName: 'question5.jpg', correctAnswer: "minasavetisyan"});
    