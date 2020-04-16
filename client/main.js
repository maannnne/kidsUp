import { Mongo } from 'meteor/mongo';

//HTML IMPORTS
import './main.html';
import './templates/Learn/Learn';
import './templates/Learn/ArmenianLiterature/VahanTerian';
import './templates/Quizzes/Quizzes';
import './templates/Quizzes/Quiz1';
import './templates/Quizzes/Quiz2';
import './templates/Libraryy/Library';
import './templates/TakeNotes/TakeNotes';
import './templates/Home';
import './templates/Main';
import './templates/Navigation';
import './templates/Learn/ArmenianArt/ArmenianArt';
import './templates/Learn/ArmenianLiterature/ArmenianLiterature';
import './templates/Accounts/RegLog';
import './HomeJS/Home';
import './templates/Libraryy/VahanTerianLib';
import './templates/Libraryy/MartirosSaryanGal';
import './templates/Libraryy/ArnoBabajanyanMusic';

  
//JS IMPORTS
import './TakeNotesJS/TakeNotes';
import './QuizzesJS/Quiz1';
import './QuizzesJS/Quiz2';
import './RegisterJS/RegLog';
import './NavigationJS/Navigation';
import './HomeJS/Home';
import './LearnJS/VahanTerian';
import './LearnJS/MartirosSaryan';
import '../i18n/i18n';

//COLLECTIONS
Notes = new Mongo.Collection('notes');
ArmLitQuiz = new Mongo.Collection('armlitquiz');
ArmLitRadios = new Mongo.Collection('armlitradios');
Q1Results = new Mongo.Collection('q1results');
LearnTerian = new Mongo.Collection('learnterian');
LearnSaryan = new Mongo.Collection('learnsaryan');
ArmArtQuiz = new Mongo.Collection('armartquiz');
ArmArtRadios = new Mongo.Collection('armartradios');
Q2Results = new Mongo.Collection('q2results'); 
QResults = new Mongo.Collection('qresults'); 

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
Router.route('/ArmenianLiterature', {
  name: 'armenian-literature'
});
Router.route('/ArmenianLiterature/VahanTerian', {
  name: 'vahan-terian'
});
Router.route('/ArmenianArt/MartirosSaryan', {
  name: 'martiros-saryan'
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


Router.route('/Library/MartirosSaryanGal', {
  name: 'martiros-saryan-gal'
});

Router.route('/Library/ArnoBabadjanianMusic', {
  name: 'arno-babadjanian-music'
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
//   genreEng: "portrait, landscape, still life, graphics, illustration, scenery",
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
    