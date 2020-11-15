const { router, text, route, payload } = require('bottender/router');

async function sendIntroduction(context) {
    await context.sendButtonTemplate('Ось список доступних операцій', [
        {
          type: 'postback',
          title: 'Основна інформація',
          payload: 'GET_BASIC_INFORMATION',
        },
        {
            type: 'postback',
            title: 'Освітня програма "Економічна кіб."',
            payload: 'GET_EDUCATIONAL_PROGRAM',
        },
        {
            type: 'postback',
            title: 'Проживання в гуртожитку',
            payload: 'GET_ACCOMMODATION_HOSTEL',
        },
    ]);
    await context.sendButtonTemplate('...', [
        {
            type: 'postback',
            title: 'Контактна інформація',
            payload: 'GET_CONTACTS',
        }
    ]);
}

async function getBasicInformation(context) {
    await context.sendButtonTemplate('Ось, що доступно в розділі "Основна інформація"', [
        {
            type: 'web_url',
            title: 'Про університет',
            url: 'https://nubip.edu.ua/about',
        },
        {
            type: 'postback',
            title: 'Про рейтингові бали',
            payload: 'ABOUT_RATING_POINTS',
        },
        {
            type: 'postback',
            title: 'Повернутися до головного меню',
            payload: 'GET_STARTED',
        },
    ]);
}

async function aboutRatingPoints(context) {
    await context.sendButtonTemplate('Беріть активну участь в житті університету та отримуйте додаткові бали до рейтингу', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Основна інформація"',
            payload: 'BACK_TO_GET_BASIC_INFORMATION',
        }
    ]);
}


async function getEducationalProgramInfomation(context) {
    await context.sendButtonTemplate('Ось, що доступно в розділі "Освітня програма"', [
        {
            type: 'postback',
            title: 'Умови вступу',
            payload: 'GET_ENTRY_CONDITIONS',
        },
        {
            type: 'postback',
            title: 'Розклад вступних впробувань',
            payload: 'GET_SCHEDULE_ENTRANCE_EXAMINATIONS',
        },
        {
            type: 'postback',
            title: 'Документи на вступ',
            payload: 'GET_DOCUMENTS_FOR_ADMISSION',
        }
    ]);
    await context.sendButtonTemplate('...', [
        {
            type: 'postback',
            title: 'Вартість навчання',
            payload: 'GET_EDUCATION_COST',
        },
        {
            type: 'postback',
            title: 'Стипендія',
            payload: 'GET_SCHOLARSHIP',
        },
        {
            type: 'postback',
            title: 'Ваші персональні консультанти',
            payload: 'GET_PERSONAL_CONSULTANTS',
        },
    ]);
    await context.sendButtonTemplate('...', [
        {
            type: 'postback',
            title: 'Долучайся та стань частиною команди',
            payload: 'JOIN_US',
        },
        {
            type: 'web_url',
            title: 'День відкритих дверей',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSfeZw6a6DWjGsk59MvwM2IkZNpC-NvhT5Z50XBz0FSYJ7OZJA/viewform',
        },
        {
            type: 'postback',
            title: 'Повернутися до головного меню',
            payload: 'GET_STARTED',
        },
    ]);
}

async function getAccommodationHostelInformation(context) {
    await context.sendButtonTemplate('Ось, що доступно в розділі "Основна інформація"', [
        {
            type: 'postback',
            title: 'Вартість проживання',
            payload: 'GET_COST_LIVING',
        },
        {
            type: 'postback',
            title: 'Документи на поселення',
            payload: 'GET_SATTLEMENT_DOCUMENTS',
        },
        {
            type: 'postback',
            title: 'Повернутися до головного меню',
            payload: 'GET_STARTED',
        },
    ]);
}

async function getEntryConditions(context) {
    await context.sendButtonTemplate('Для здобуття спеціальності за ОС "Магістр" приймаються особи, які отримали базову вищу освіту (бакалавр) або освітній ступінь спеціаліста. Зарахування на навчання відбуваються на основі конкурсного відбору, що складається з результату фахового вступного випробування, ЄВІ з анг.мови та середнього балу додатку до диплому бакалавра або спеціаліста. Знайомся з деталями вступу тут: https://nubip.edu.ua/node/79269', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Освітня програма"',
            payload: 'BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION',
        }
    ]);
}

async function getScheduleEntranceExaminations(context) {
    await context.sendButtonTemplate('Дізнайтеся про розклад вступних іспитів напередодні екзамину', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Освітня програма"',
            payload: 'BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION',
        }
    ]);
}

async function getDocumentsForAdmission(context) {
    await context.sendButtonTemplate('Особа, яка вступає на навчання до магістратури, має подати до приймальної комісії такі документи: заяву на ім’я ректора університету; документ про здобутий освітній ступінь (освітньо-кваліфікаційний рівень) та додаток до нього (оригінал та копію); 4 кольорових фотокарток розміром 3х4 см; ксерокопію довідки про присвоєння ідентифікаційного номеру, копію паспорта (1, 2 сторінки та місце реєстрації). Паспорт та інші документи, що підтверджують право на вступ, пред`являються особисто. Дадаткова інформація https://nubip.edu.ua/node/1032', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Освітня програма"',
            payload: 'BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION',
        }
    ]);
}

async function getEducationCost(context) {
    await context.sendButtonTemplate('Економічна кібернетика ОС Магістр Термін навчання: 1.5 років Вартість одного навчального року: 27840 грн Загальна вартість: 41760', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Освітня програма"',
            payload: 'BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION',
        }
    ]);
}

async function getScholarship(context) {
    await context.sendFile('https://nubip.edu.ua/sites/default/files/u284/pravila_priznachennya_stipendiy_09_2019_na_sayt.pdf');
    await context.sendButtonTemplate('...', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Освітня програма"',
            payload: 'BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION',
        }
    ]);
}

async function getPersonalConsultants(context) {
    await context.sendButtonTemplate('Жерліцин Дмитро Михайлович, завідувач кафедри, гарант освітньої програми “Цифрова економіка” - +380631841569, Клименко Наталія Анатоліївна, доцент кафедри, гарант освітньої програми “Економічна кібернетика”, голова фахової комісії за освітньою програмою на ОС “Магістр” – +380677653716 Коваль Тетяна Валеріївна, доцент кафедри, відповідальний секретар за освітніми програмами на ОС “Бакалавр” в приймальній комісії – +380502333062 Костенко Інна Сергіївна, асистент кафедри, відповідальна за ЄДЕБО на факультеті - +380633285201', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Освітня програма"',
            payload: 'BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION',
        }
    ]);
}

async function joinUs(context) {
    await context.sendButtonTemplate('Офіційна сторінка нашого факультету: https://nubip.edu.ua/structure/IT.NUBIP Група кафедри в Facebook: https://www.facebook.com/ciberchair.nubip Група нашого факультету в Facebook: https://www.facebook.com/fitnubip Ютуб-канал нашого факультету:https://www.youtube.com/channel/UC-U1fqRT0jeRLUUDcMq1uaw Instagram-канал нашого факультету: https://www.instagram.com/it_nules/ Телеграм-канал нашого факультету: https://t.me/it_nubip', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Освітня програма"',
            payload: 'BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION',
        }
    ]);
}

async function getCostLiving(context) {
    await context.sendButtonTemplate('На 2019/2020н.р. оплата за проживання в гуртожитках НУБіП України для студентів 1 курсу становила 520 грн/міс.', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Проживання в гуртожитку"',
            payload: 'BACK_TO_ACCOMMODATION_HOSTEL_INFORMATION',
        }
    ]);
}

async function getSattlementDocuments(context) {
    await context.sendButtonTemplate('Студенту для поселення в гуртожиток потрібно мати: копію паспорта та ідентифікаційного номеру; фотокартки розміром 3х4 (3 шт.); студенти 1 курсу і магістри першого року навчання обов’язково мають зареєструватися за місцем фактичного проживання, тобто в гуртожитку. При наявності паспорта громадянина України старого зразку (в формі книжечки) студенти приїжджають на поселення з відміткою в паспорті про зняття з домашнього місця реєстрації (також можна одночасно знятися із реєстрації та зареєструватися за новим місцем проживання у паспортному відділені університету), студенти які мають паспорт в формі ID-карти повинні мати при собі довідку про зняття з місця реєстрації Ф – 13; студенти чоловічої статті – приписне свідоцтво з відміткою про зняття з військового обліку за попереднім місцем проживання; довідку про проходження флюорографії та довідку про стан санітарно-епідеміологічного оточення дитини. Довідка надається сімейним лікарем, в якій вказується епідеміологічний стан дитини (наявність/відсутність педикульозу, шкірних захворювань, що протягом 21 дня не було контактів з людьми, які хворіють інфекційними хворобами та не перебуває на самоізоляції, тощо); квитанцію про оплату за проживання в гуртожитку за цілий навчальний рік. Без наявності квитанції про оплату (оригінал або копія) за проживання у гуртожитку поселення студентів категорично забороняється.', [
        {
            type: 'postback',
            title: 'Повернутися до розділу "Проживання в гуртожитку"',
            payload: 'BACK_TO_ACCOMMODATION_HOSTEL_INFORMATION',
        }
    ]);
}

async function getContacts(context) {
    await context.sendButtonTemplate('Декан факультету: Глазунова Олена Григорівна Адреса: 03041, м. Київ, вул. Героїв Оборони, 16а, навч. корп. №15 Телефон: (044) 527-83-52, (044) 527-83-51 Email: o-glazunova@nubip.edu.ua Сайт: nubip.edu.ua/structure/IT.NUBIP', [
        {
            type: 'postback',
            title: 'Повернутися до головного меню',
            payload: 'GET_STARTED',
        }
    ]);
}

module.exports = async function App(context) {
    if(context.event.isText) {
        await context.sendButtonTemplate('Використовуйте, будь ласка, меню', [
            {
                type: 'postback',
                title: 'Повернутися до головного меню',
                payload: 'GET_STARTED',
            },
        ]);

    }
    return router([
        payload('GET_STARTED', sendIntroduction),
        payload('GET_BASIC_INFORMATION', getBasicInformation),
        payload('ABOUT_RATING_POINTS', aboutRatingPoints),
        payload('BACK_TO_GET_BASIC_INFORMATION', getBasicInformation),
        payload('GET_EDUCATIONAL_PROGRAM', getEducationalProgramInfomation),
        payload('GET_ENTRY_CONDITIONS', getEntryConditions),
        payload('BACK_TO_EDUCATIONAL_PROGRAM_INFORMATION', getEducationalProgramInfomation),
        payload('GET_SCHEDULE_ENTRANCE_EXAMINATIONS', getScheduleEntranceExaminations),
        payload('GET_DOCUMENTS_FOR_ADMISSION', getDocumentsForAdmission),
        payload('GET_EDUCATION_COST', getEducationCost),
        payload('GET_SCHOLARSHIP', getScholarship),
        payload('GET_PERSONAL_CONSULTANTS', getPersonalConsultants),
        payload('JOIN_US', joinUs),
        payload('GET_ACCOMMODATION_HOSTEL', getAccommodationHostelInformation),
        payload('BACK_TO_ACCOMMODATION_HOSTEL_INFORMATION', getAccommodationHostelInformation),
        payload('GET_COST_LIVING', getCostLiving),
        payload('GET_SATTLEMENT_DOCUMENTS', getSattlementDocuments),
        payload('GET_CONTACTS', getContacts)
    ])
};