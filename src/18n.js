
// import i18next from 'i18next';

// i18next.init({
//   fallbackLng: 'en',
//   resources: {
//     pt: {
//       translations: require('./locales/pt/translation.json'),
//     },
//     en: {
//       translations: require('./locales/en/translation.json'),
//     },
//     es: {
//       translations: require('./locales/es/translation.json'),
//     },
//   },
//   ns: ['translations'],
//   defaultNS: 'translations',
//   returnObjects: true,
//   debug: process.env.NODE_ENV === 'development',
//   interpolation: {
//     escapeValue: false, 
//   },
//   react: {
//     wait: true,
//   },
// });

// i18next.languages = ['pt', 'en', 'es'];

// export default i18next;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
            description: {
                nav1:'Features',
                nav2: 'Press',
                part1: 'The safety check app that respects your privacy',
                part2: 'The best person to keep your loved ones safe is you.',
                part3: 'Get notified if your loved one didnt mark as safe on the scheduled time. No data storage!'
            },
            features: {
                circleHeader: 'Circles and Journeys',
                journeyHeader:'Journeys',
                pinheader: 'Security Pin',
                emergencyHeader:'Emergencies',
                alertHeader:'Alert System',
                getmeoutHeader:'Get Me Out',
                privacyHeader:'Privacy',
                circleText: 'You can create different Circles of friends to take care of you during specific Journeys. Going on a work trip? Select the Circle with your parents. Going on an online date? Select the Circle with your bff.',
                journeyTextpart1:'Have a friend or a family member to be aware of your whereabouts with Safe Circle App. If for some reason you can???t mark as safe, everyone in your Circle will be notified that you might be in need of help.',
                journeyTextpart2:'You can add as many friends as you want for each Circle. Every time you create a Journey, you can specify which Circle of friends you want to be aware of you.',
                pinTextpart1:'You can create the "all good" pin and the "in darger" pin that will be requested when you finish your Journey. If you finish your Journey with the ???in danger??? pin, it will close the Journey normally on your phone. However your Circle will be notified that you might be in danger and they will still have access to your Journey information.',
                pinTextpart2:'The first pin is the ???all good??? pin. If you finish your Journey with this pin, it will mean that you are safe and your Circle will be notified that you are safe!',
                pinTextpart3:'The second pin is the ???in danger??? pin. If you finish your Journey using this pin, it will finish the Journey normally on your phone. However your Circle will be notified that you might be in danger and they will still have access to your Journey information.',
                pinTegLine:'An extra layer for your alert system.',
                emergencyText:'Even if you do not have an active Journey, you can use the emergency button and your emergency contacts will receive an alert and have access to your GPS location.',
                alertText:'When creating a journey, you will select up to three check in times to mark that you are safe. At the time schedulled you will get a notification to remind you to mark as safe. In case you do not, the friends in your selected Circle will get an alert to infor that they should check up on you.',
                getmeoutText:'Well, if you are not in danger, but want to get out of a situation, just press the Get Me Out button and your friends will be alerted to call you with an excuse for you to leave.',
                privacyText:'Once you safely finish your journey all the data is deleted! We never keep your data in the cloud or databases.',
              },
            authorbox: {
              cardtitlepart01:'We should have a more effective way ',
              cardtitlepart02:'to help to keep each other safe.',
              cardtitlepart03:' Now we do. Meet Safe Circle.',
              cardtextname: 'Ana Ara??jo, Founder',
              cardtext:'When I lived in LA and used to go on online dates or to meet up with freelance clients, I felt unsafe and scared many many times. I used to text friends with info and say ???well, if I not text you saying that I am alive by this time, you know where to start searching for me???. But of course we often forgot to check in on each other - which would be a big problem if something were to happen. So I decided that we should have a more effective way to help to keep each other safe - so I started Safe circle.',
            },
            footer:{
              privacy:"Privacy Policy",
              terms:"Terms of use",
            }
        },
      },

      pt: {
        translation: {
            description: {
                nav1:'Destaques',
                nav2: 'Imprensa',
                part1: 'O aplicativo de seguran??a que respeita sua privacidade',
                part2:'A melhor pessoa para manter seus entes queridos seguros ?? voc??.',
                part3: 'Receba notifica????es caso a pessoa n??o marque que est?? seguro no hor??rio marcado. Rastreamento em GPS SOMENTE enquanto durar a jornada. Informa????es como locais e hor??rios N??O s??o armazenados.',
            },
            features: {
                circleHeader: 'C??rculos e Jornadas',
                journeyHeader:'Jornadas',
                pinheader: 'Pin de seguran??a',
                emergencyHeader:'Emerg??ncias',
                alertHeader:'Sistema de alertas',
                getmeoutHeader:'Me Tira Daqui',
                privacyHeader:'Privacidade',
                circleText:'Voc?? pode criar diferentes C??rculos de amigos para cuidar de voc?? durante jornadas espec??ficas. Vai fazer uma viagem de trabalho? Selecione o C??rculo com seus pais. Vai a um encontro online? Selecione o C??rculo com seu bff.',
                journeyTextpart1:'Pe??a a um amigo ou membro da fam??lia para saber onde voc?? est?? com o aplicativo Safe Circle. Se por algum motivo voc?? n??o puder marcar como seguro, todos em seu c??rculo ser??o notificados de que voc?? pode precisar de ajuda.',
                journeyTextpart2:'Voc?? pode adicionar quantos amigos quiser para cada C??rculo. Cada vez que voc?? cria uma Jornada, pode especificar qual C??rculo de amigos deseja que saiba sobre voc??.',
                pinTextpart1:'You can create the "all good" pin and the "in darger" pin that will be requested when you finish your Journey. If you finish your Journey with the ???in danger??? pin, it will close the Journey normally on your phone. However your Circle will be notified that you might be in danger and they will still have access to your Journey information.',
                pinTextpart2:'O primeiro Pin ?? o Pin ???tudo est?? bem. Se voc?? terminar sua jornada com este Pin, significa que voc?? est?? seguro e seu C??rculo ser?? notificado de que voc?? est?? seguro!',
                pinTextpart3:'O segundo Pin ?? o Pin de ???em perigo???. Se voc?? terminar sua jornada usando este Pin, ela terminar?? normalmente no seu telefone. No entanto, seu c??rculo ser?? notificado de que voc?? pode estar em perigo e eles ainda ter??o acesso ??s informa????es de sua jornada.',
                pinTegLine:'Uma camada extra para seu sistema de alerta.',
                emergencyText:'Mesmo que voc?? n??o tenha uma Jornada ativa, voc?? pode usar o bot??o de emerg??ncia e seus contatos de emerg??ncia receber??o um alerta e ter??o acesso ?? sua localiza????o GPS.',
                alertText:'Ao criar uma jornada, voc?? selecionar?? at?? tr??s hor??rios de check-in para marcar que est?? seguro. No hor??rio programado, voc?? receber?? uma notifica????o para lembr??-lo de marcar como seguro. Caso n??o o fa??a, os amigos em seu C??rculo selecionado receber??o um alerta para informar que eles devem verificar voc??.',
                getmeoutText:'Bem, se voc?? n??o est?? em perigo, mas quer sair de uma situa????o, basta apertar o bot??o Me Tira Daqui e seus amigos ser??o alertados para cham??-lo com uma desculpa para voc?? sair',
                privacyText:'Assim que voc?? terminar sua jornada com seguran??a, todos os dados ser??o exclu??dos! N??o mantemos seus dados na nuvem ou em bancos de dados.',
            },
            authorbox: {
              cardtitlepart01:'Resolvi que deveria haver uma maneira mais eficiente',
              cardtitlepart02:' de ajudar a manter meus amigos e eu mesma seguros.',
              cardtitlepart03:' Ent??o criamos o Safe Circle.',
              cardtextname: 'Ana Ara??jo, Fundadora',
              cardtext:'Eu costumava ir a encontros online e fazer reuni??es com clientes o tempo todo. Eu me sentia insegura e muitas vezes com medo. Eu costumava enviar mensagens para minhas amigas com informa????es de onde eu estava indo e falava ???se eu n??o der sinal de vida at?? tal hora, voc?? sabe onde come??ar a me procurar???. Mas claro que frequentemente esquecemos de verificar, o que seria um problema grande, caso algo ruim realmente acontecesse. Por isso resolvi que deveria haver uma maneira mais eficiente de ajudar a manter meus amigos e eu mesma seguros. Ent??o criamos o Safe Circle.',
            },
            footer:{
              privacy:"Pol??tica de Privacidade",
              terms:"Termos de uso",
            }
        }
      },
    
    es: {
        translation: {
            description: {
                nav1:'Detalles',
                nav2: 'Prensa',
                part1: 'La app de control de seguridad que respeta tu privacidad',
                part2:'La mejor persona para mantener seguros a tus seres queridos, eres t??.',
                part3: 'Recibe notificaciones si la persona no marc?? que est?? segura en el horario programado. Rastreo de GPS SOLO durante el trayecto. Los datos sobre tu ubicaci??n y horario NO son almacenados. Y puedes salir de situaciones inc??modas tan solo con el bot??n ???S??came de Aqu?????.',
            },
            features: {
                circleHeader: 'C??rculos i Jornadas',
                journeyHeader:'Jornadas',
                pinheader: 'PIN Seguridad',
                emergencyHeader:'Emergencias',
                alertHeader:'Sistema de alertas',
                getmeoutHeader:'Me Tira Daqui',
                privacyHeader:'Privacidade',
                circleText:'Puedes crear diferentes c??rculos de amigos para que te cuiden durante viajes espec??ficos. ??Te vas de viaje de trabajo? Selecciona el C??rculo con tus padres. ??Tienes una cita en l??nea? Selecciona el c??rculo con tu mejor amiga.',
                journeyTextpart1:'P??dale a un amigo o familiar que averig??e d??nde se encuentra con la aplicaci??n Safe Circle. Si por alguna raz??n no puede marcarlo como seguro, se notificar?? a todos los miembros de su c??rculo que es posible que necesite ayuda.',
                journeyTextpart2:'Puede agregar tantos amigos como desee para cada c??rculo. Cada vez que crea un viaje, puede especificar qu?? c??rculo de amigos desea saber sobre usted.',
                pinTextpart1:'Puede crear el pin "todo bien" y el pin "in darger" que se le solicitar?? cuando termine su viaje. Si finaliza su viaje con el pin "en peligro", cerrar?? el viaje normalmente en su tel??fono. Sin embargo, su C??rculo ser?? notificado de que usted podr??a estar en peligro y seguir??n teniendo acceso a la informaci??n de su Viaje.',
                pinTextpart2:'El primer Pin es el &apos;todo est?? bien. Si finaliza su viaje con este Pin, significa que est?? a salvo y su C??rculo ser?? notificado de que est?? a salvo!',
                pinTextpart3:'El segundo Pin es el Pin &apos;en peligro&apos;. Si finaliza su viaje con este Pin, normalmente terminar?? en su tel??fono. Sin embargo, se le notificar?? a su c??rculo que puede estar en peligro y a??n tendr??n acceso al informaci??n de su viaje.',
                pinTegLine:'Una capa adicional para su sistema de alerta',
                emergencyText:'Incluso si no tiene un Journey activo, puede usar el bot??n de emergencia y sus contactos de emergencia recibir??n una alerta y tendr??n acceso a su ubicaci??n GPS.',
                alertText:'Cuando cree un viaje, seleccionar?? hasta tres horas de registro para que sea seguro. A la hora programada, recibir?? una notificaci??n para recordarle que debe hacerlo seguro. De lo contrario, amigos en su El c??rculo seleccionado recibir?? una alerta para informarles que deben vigilarlo.',
                getmeoutText:'Bueno, si no est??s en peligro, pero quieres salir de una situaci??n, solo presiona el bot??n Get Me Out y tus amigos ver??n un mensaje para que te llamen con una excusa para sacarte.',
                privacyText:'Una vez que haya completado su viaje de manera segura, ??se eliminar??n todos los datos! No guardamos sus datos en la nube ni en bases de datos',
            },
            authorbox: {
              cardtitlepart01:'Decid?? que deb??amos tener una forma m??s efectiva',
              cardtitlepart02:' de ayudar a mantenernos seguros,',
              cardtitlepart03:' entonces creamos Safe Circle.',
              cardtextname: 'Ana Ara??jo, Fundadora',
              cardtext:'Sol??a ir a citas online y reunirme con clientes todo el tiempo. Me sent?? insegura y asustada muchas veces. Sol??a enviar mensajes a mis amigas con la informaci??n de hacia d??nde iba, diciendo ???Bueno, si no te escribo diciendo que estoy bien a tal hora, sabes donde empezar a buscarme???. Pero por supuesto nos olvid??bamos de chequearlo entre nosotras, lo que ser??a un gran problema si algo sucediera. Por eso decid?? que deb??amos tener una forma m??s efectiva de ayudar a mantenernos seguros, entonces creamos Safe Circle.',
            },
            footer:{
              privacy:"Pol??tica de Privacidad",
              terms:"Condiciones de uso",
            }
        }
      }
    }
  });

export default i18n;