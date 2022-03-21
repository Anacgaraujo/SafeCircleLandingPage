
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
                journeyTextpart1:'Have a friend or a family member to be aware of your whereabouts with Safe Circle App. If for some reason you can’t mark as safe, everyone in your Circle will be notified that you might be in need of help.',
                journeyTextpart2:'You can add as many friends as you want for each Circle. Every time you create a Journey, you can specify which Circle of friends you want to be aware of you.',
                pinTextpart1:'You can create the "all good" pin and the "in darger" pin that will be requested when you finish your Journey. If you finish your Journey with the “in danger” pin, it will close the Journey normally on your phone. However your Circle will be notified that you might be in danger and they will still have access to your Journey information.',
                pinTextpart2:'The first pin is the “all good” pin. If you finish your Journey with this pin, it will mean that you are safe and your Circle will be notified that you are safe!',
                pinTextpart3:'The second pin is the “in danger” pin. If you finish your Journey using this pin, it will finish the Journey normally on your phone. However your Circle will be notified that you might be in danger and they will still have access to your Journey information.',
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
              cardtextname: 'Ana Araújo, Founder',
              cardtext:'When I lived in LA and used to go on online dates or to meet up with freelance clients, I felt unsafe and scared many many times. I used to text friends with info and say “well, if I not text you saying that I am alive by this time, you know where to start searching for me”. But of course we often forgot to check in on each other - which would be a big problem if something were to happen. So I decided that we should have a more effective way to help to keep each other safe - so I started Safe circle.',
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
                part1: 'O aplicativo de segurança que respeita sua privacidade',
                part2:'A melhor pessoa para manter seus entes queridos seguros é você.',
                part3: 'Receba notificações caso a pessoa não marque que está seguro no horário marcado. Rastreamento em GPS SOMENTE enquanto durar a jornada. Informações como locais e horários NÃO são armazenados.',
            },
            features: {
                circleHeader: 'Círculos e Jornadas',
                journeyHeader:'Jornadas',
                pinheader: 'Pin de segurança',
                emergencyHeader:'Emergências',
                alertHeader:'Sistema de alertas',
                getmeoutHeader:'Me Tira Daqui',
                privacyHeader:'Privacidade',
                circleText:'Você pode criar diferentes Círculos de amigos para cuidar de você durante jornadas específicas. Vai fazer uma viagem de trabalho? Selecione o Círculo com seus pais. Vai a um encontro online? Selecione o Círculo com seu bff.',
                journeyTextpart1:'Peça a um amigo ou membro da família para saber onde você está com o aplicativo Safe Circle. Se por algum motivo você não puder marcar como seguro, todos em seu círculo serão notificados de que você pode precisar de ajuda.',
                journeyTextpart2:'Você pode adicionar quantos amigos quiser para cada Círculo. Cada vez que você cria uma Jornada, pode especificar qual Círculo de amigos deseja que saiba sobre você.',
                pinTextpart1:'You can create the "all good" pin and the "in darger" pin that will be requested when you finish your Journey. If you finish your Journey with the “in danger” pin, it will close the Journey normally on your phone. However your Circle will be notified that you might be in danger and they will still have access to your Journey information.',
                pinTextpart2:'O primeiro Pin é o Pin “tudo está bem. Se você terminar sua jornada com este Pin, significa que você está seguro e seu Círculo será notificado de que você está seguro!',
                pinTextpart3:'O segundo Pin é o Pin de “em perigo”. Se você terminar sua jornada usando este Pin, ela terminará normalmente no seu telefone. No entanto, seu círculo será notificado de que você pode estar em perigo e eles ainda terão acesso às informações de sua jornada.',
                pinTegLine:'Uma camada extra para seu sistema de alerta.',
                emergencyText:'Mesmo que você não tenha uma Jornada ativa, você pode usar o botão de emergência e seus contatos de emergência receberão um alerta e terão acesso à sua localização GPS.',
                alertText:'Ao criar uma jornada, você selecionará até três horários de check-in para marcar que está seguro. No horário programado, você receberá uma notificação para lembrá-lo de marcar como seguro. Caso não o faça, os amigos em seu Círculo selecionado receberão um alerta para informar que eles devem verificar você.',
                getmeoutText:'Bem, se você não está em perigo, mas quer sair de uma situação, basta apertar o botão Me Tira Daqui e seus amigos serão alertados para chamá-lo com uma desculpa para você sair',
                privacyText:'Assim que você terminar sua jornada com segurança, todos os dados serão excluídos! Não mantemos seus dados na nuvem ou em bancos de dados.',
            },
            authorbox: {
              cardtitlepart01:'Resolvi que deveria haver uma maneira mais eficiente',
              cardtitlepart02:' de ajudar a manter meus amigos e eu mesma seguros.',
              cardtitlepart03:' Então criamos o Safe Circle.',
              cardtextname: 'Ana Araújo, Fundadora',
              cardtext:'Eu costumava ir a encontros online e fazer reuniões com clientes o tempo todo. Eu me sentia insegura e muitas vezes com medo. Eu costumava enviar mensagens para minhas amigas com informações de onde eu estava indo e falava “se eu não der sinal de vida até tal hora, você sabe onde começar a me procurar”. Mas claro que frequentemente esquecemos de verificar, o que seria um problema grande, caso algo ruim realmente acontecesse. Por isso resolvi que deveria haver uma maneira mais eficiente de ajudar a manter meus amigos e eu mesma seguros. Então criamos o Safe Circle.',
            },
            footer:{
              privacy:"Política de Privacidade",
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
                part2:'La mejor persona para mantener seguros a tus seres queridos, eres tú.',
                part3: 'Recibe notificaciones si la persona no marcó que está segura en el horario programado. Rastreo de GPS SOLO durante el trayecto. Los datos sobre tu ubicación y horario NO son almacenados. Y puedes salir de situaciones incómodas tan solo con el botón “Sácame de Aquí”.',
            },
            features: {
                circleHeader: 'Círculos i Jornadas',
                journeyHeader:'Jornadas',
                pinheader: 'PIN Seguridad',
                emergencyHeader:'Emergencias',
                alertHeader:'Sistema de alertas',
                getmeoutHeader:'Me Tira Daqui',
                privacyHeader:'Privacidade',
                circleText:'Puedes crear diferentes círculos de amigos para que te cuiden durante viajes específicos. ¿Te vas de viaje de trabajo? Selecciona el Círculo con tus padres. ¿Tienes una cita en línea? Selecciona el círculo con tu mejor amiga.',
                journeyTextpart1:'Pídale a un amigo o familiar que averigüe dónde se encuentra con la aplicación Safe Circle. Si por alguna razón no puede marcarlo como seguro, se notificará a todos los miembros de su círculo que es posible que necesite ayuda.',
                journeyTextpart2:'Puede agregar tantos amigos como desee para cada círculo. Cada vez que crea un viaje, puede especificar qué círculo de amigos desea saber sobre usted.',
                pinTextpart1:'Puede crear el pin "todo bien" y el pin "in darger" que se le solicitará cuando termine su viaje. Si finaliza su viaje con el pin "en peligro", cerrará el viaje normalmente en su teléfono. Sin embargo, su Círculo será notificado de que usted podría estar en peligro y seguirán teniendo acceso a la información de su Viaje.',
                pinTextpart2:'El primer Pin es el &apos;todo está bien. Si finaliza su viaje con este Pin, significa que está a salvo y su Círculo será notificado de que está a salvo!',
                pinTextpart3:'El segundo Pin es el Pin &apos;en peligro&apos;. Si finaliza su viaje con este Pin, normalmente terminará en su teléfono. Sin embargo, se le notificará a su círculo que puede estar en peligro y aún tendrán acceso al información de su viaje.',
                pinTegLine:'Una capa adicional para su sistema de alerta',
                emergencyText:'Incluso si no tiene un Journey activo, puede usar el botón de emergencia y sus contactos de emergencia recibirán una alerta y tendrán acceso a su ubicación GPS.',
                alertText:'Cuando cree un viaje, seleccionará hasta tres horas de registro para que sea seguro. A la hora programada, recibirá una notificación para recordarle que debe hacerlo seguro. De lo contrario, amigos en su El círculo seleccionado recibirá una alerta para informarles que deben vigilarlo.',
                getmeoutText:'Bueno, si no estás en peligro, pero quieres salir de una situación, solo presiona el botón Get Me Out y tus amigos verán un mensaje para que te llamen con una excusa para sacarte.',
                privacyText:'Una vez que haya completado su viaje de manera segura, ¡se eliminarán todos los datos! No guardamos sus datos en la nube ni en bases de datos',
            },
            authorbox: {
              cardtitlepart01:'Decidí que debíamos tener una forma más efectiva',
              cardtitlepart02:' de ayudar a mantenernos seguros,',
              cardtitlepart03:' entonces creamos Safe Circle.',
              cardtextname: 'Ana Araújo, Fundadora',
              cardtext:'Solía ir a citas online y reunirme con clientes todo el tiempo. Me sentí insegura y asustada muchas veces. Solía enviar mensajes a mis amigas con la información de hacia dónde iba, diciendo “Bueno, si no te escribo diciendo que estoy bien a tal hora, sabes donde empezar a buscarme”. Pero por supuesto nos olvidábamos de chequearlo entre nosotras, lo que sería un gran problema si algo sucediera. Por eso decidí que debíamos tener una forma más efectiva de ayudar a mantenernos seguros, entonces creamos Safe Circle.',
            },
            footer:{
              privacy:"Política de Privacidad",
              terms:"Condiciones de uso",
            }
        }
      }
    }
  });

export default i18n;