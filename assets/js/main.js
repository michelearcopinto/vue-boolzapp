const { createApp } = Vue

const app = createApp({
    data() {
        return {
            currentChat: 0,
            isWriting: false,
            leftMenu: false,
            currentBox: null,
            infoBoxActive: false,
            emojiContainerActive: false,
            fullDate: null,
            newMessage: '',
            searchWord: '',
            lastRecordedDate: '',
            lastRecordedDateStatic: '',
            lastRecordedDateStaticForSure: '',
            lastRecordedDateArray: [],
            lengthArray: 0,
            isIncremento: null,
            incrementoDate: null,
            statoChat: false,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            answers: [
                "Sì, esatto!",
                "No, mi dispiace.",
                "Grazie mille!",
                "Non ne sono sicuro.",
                "Davvero?",
                "Interessante.",
                "Non ho idea.",
                "Ci sentiamo più tardi.",
                "Ok, capisco.",
                "Perfetto!",
                "Mi manchi.",
                "Non posso ora.",
                "Fa niente.",
                "Ho bisogno di più informazioni.",
                "Ho fame.",
                "Non so cosa dire.",
                "Posso chiamarti?",
                "Sto ridendo.",
                "È triste.",
                "Mi piacerebbe.",
                "Odio quando succede.",
                "Sarà divertente!",
                "Grazie per l'informazione.",
                "Come stai?",
                "Non ho tempo.",
                "Sto lavorando.",
                "Buona fortuna!",
                "Non vedo l'ora.",
                "Ti amo.",
                "Ho paura.",
                "Non mi piace.",
                "È fantastico!",
                "Non sono d'accordo.",
                "Che bello!",
                "Ci vediamo presto.",
                "Mi annoio.",
                "Congratulazioni!",
                "Mi sento male.",
                "Fai attenzione.",
                "Ho freddo.",
                "Hai ragione.",
                "Non riesco a credere.",
                "Non ho soldi.",
                "Voglio dormire.",
                "Mi hai fatto ridere.",
                "Non ho capito.",
                "Ti prego.",
                "Cosa ne pensi?",
                "Puoi aiutarmi?",
                "Non posso aspettare.",
                "Non mi interessa.",
                "Sarà difficile.",
                "Stai scherzando?",
                "Ho fame.",
                "Grazie per la tua comprensione.",
                "Puoi ripetere?",
                "Ho troppo da fare.",
                "È troppo complicato.",
                "Voglio un abbraccio.",
                "Non sono sicuro di poter farlo.",
                "Sono stanco.",
                "Mi piacerebbe saperne di più.",
                "Speriamo bene.",
                "Non ci credo.",
                "Sono felice per te.",
                "Non so cosa fare.",
                "Sarà divertente!",
                "Ho bisogno di una pausa.",
                "Sei pazzo!",
                "Non preoccuparti.",
                "Fa caldo.",
                "Ho bisogno di te.",
                "È noioso.",
                "Non sono d'accordo con te.",
                "Non vedo l'ora.",
                "Speriamo che tutto vada bene.",
                "Cosa vuoi dire?",
                "Non posso farlo.",
                "Sono in ritardo.",
                "Non so come rispondere.",
                "Ho paura del futuro.",
                "Non mi piace per niente.",
                "Ti prego, smettila.",
                "È incredibile!",
                "Mi dispiace sentirlo.",
                "È troppo lontano.",
                "Sono confuso.",
                "Posso chiamarti più tardi?",
                "È ridicolo!",
                "Non lo so, chiedi a qualcun altro.",
                "Ho bisogno di vacanze.",
                "Non ne posso più.",
                "Mi manca qualcosa.",
                "È così ingiusto.",
                "Posso fidarmi di te?",
                "Ho una sorpresa per te.",
                "Non mi interessa affatto.",
                "Non ho tempo per questo.",
                "Voglio andare a casa.",
                "Non so cosa dire."
            ],
            emojiArray: [
                { emoji: '😃', name: 'Felice' },
                { emoji: '😎', name: 'Sorpreso' },
                { emoji: '😢', name: 'Triste' },
                { emoji: '😂', name: 'Divertito' },
                { emoji: '😒', name: 'Sarcasmo' },
                { emoji: '😍', name: 'Innamorato' },
                { emoji: '😴', name: 'Stanco' },
                { emoji: '😜', name: 'Scherzoso' },
                { emoji: '😇', name: 'Innocente' },
                { emoji: '😳', name: 'Impacciato' },
                { emoji: '🙄', name: 'Annoiato' },
                { emoji: '😅', name: 'Sollievo' },
                { emoji: '😤', name: 'Arrabbiato' },
                { emoji: '😋', name: 'Deliziato' },
                { emoji: '😑', name: 'Esasperato' },
                { emoji: '😷', name: 'Malato' },
                { emoji: '😏', name: 'Sorridendo con fare sospetto' },
                { emoji: '😬', name: 'Nervoso' },
                { emoji: '🤔', name: 'Pensieroso' },
                { emoji: '😱', name: 'Spaventato' },
                { emoji: '😄', name: 'Gioioso' },
                { emoji: '😕', name: 'Perplesso' },
                { emoji: '😖', name: 'Contrariato' },
                { emoji: '😘', name: 'Bacio' },
                { emoji: '😪', name: 'Sonnolento' }
            ],
            receivedMessagesArray: null,
            datesArray: [],
            lastAccesses: []
        }
    },
    watch: {
        lengthArray(newValue, oldValue) {

            if (newValue > oldValue) {

                this.isIncremento = true;
                console.log("l'array è aumentato")

            } else if (newValue < oldValue) {

                this.isIncremento = false;
                console.log("l'array è diminuito")

            } else {

                this.isIncremento = null;
                console.log("l'array è uguale")
            }
        },
        datesArray(newValue, oldValue) {

            if (newValue > oldValue) {

                this.incrementoDate = true;
                console.log("l'array è aumentato")

            } else if (newValue < oldValue) {

                this.incrementoDate = false;
                console.log("l'array è diminuito")

            } else {

                this.incrementoDate = null;
                console.log("l'array è uguale")
            }
        },
        currentChat(newValue, oldValue) {

            if (newValue !== oldValue) {

                this.statoChat = true;

                setTimeout(() => {

                    this.setStatoChat();
                }, 500);

            }
        },
    },
    methods: {
        displayLastDate(date) {

            if (date.includes(' ')) {

                let fullDateArray = date.split(' ');
                let fullTime = fullDateArray.slice(1)[0];
                let timeArray = fullTime.split(':');
                let shortTime = timeArray.slice(0, 2).join(':');

                return shortTime;

            } else {

                return date;
            }

        },
        setChat(index) {

            this.currentChat = index;
        },
        setStatoChat() {

            this.statoChat = false;
        },
        getRandomNumber(min, max) {

            return Math.floor(Math.random() * (max - min) + min);
        },
        preventSpace() {

            this.searchWord.startsWith(' ') ? this.searchWord = '' : this.searchWords
        },
        openLeftMenu() {

            this.leftMenu = true;
        },
        closeLeftMenu() {

            this.leftMenu = false;
        },
        setDisplayBox(index) {

            if (this.currentBox === null) {

                this.currentBox = index;

            } else if (this.currentBox === index) {

                this.currentBox = null;

            } else {

                this.currentBox = index;
            }
        },
        copyMessage(index) {

            let copiedMessage = this.contacts[this.currentChat].messages[index].message;
            navigator.clipboard.writeText(copiedMessage);

            this.currentBox = null;

            setTimeout(() => {

                alert('Messaggio copiato!')
            }, 1);
        },
        lastMessageCheck(index) {

            const currentChatMessages = this.contacts[index].messages;

            if (currentChatMessages.length === 0) {

                return 'Messaggi eliminati';

            } else {

                const lastMessage = currentChatMessages[currentChatMessages.length - 1];

                if (lastMessage.status === 'sent') {

                    return `<strong>Inviato:</strong> ${lastMessage.message}`;

                } else {

                    return lastMessage.message;
                }
            }
        },
        lastDateCheck(index) {

            const currentDateMessages = this.contacts[index].messages;

            if (currentDateMessages.length === 0) {

                return '';

            } else {

                const lastDate = currentDateMessages[currentDateMessages.length - 1];

                return this.displayLastDate(lastDate.date);
            }

        },
        isWritingCheck() {

            this.receivedMessagesArray = this.contacts[this.currentChat].messages.filter(function (element) {
                return element.status === 'received';
            });

            this.lengthArray = this.receivedMessagesArray.length
            console.log(this.receivedMessagesArray.length)



            let receivedMessagesArrayGlobal = [];

            this.contacts.forEach(element => {
                const filteredContacts = element.messages.filter(message => message.status === 'received');

                if (filteredContacts.length > 0) {
                    receivedMessagesArrayGlobal.push(this.displayLastDate(filteredContacts[filteredContacts.length - 1].date));
                }
            });

            this.datesArray = receivedMessagesArrayGlobal


            console.log(this.datesArray);


            if (this.isWriting === false) {

                if (this.lastAccesses.length === 0) {

                    this.lastAccesses = this.datesArray
                }

                console.log(this.lastAccesses)

                if (this.statoChat === true) {

                    console.log('condizione chat true')

                    this.isIncremento = true;
                    console.log(this.isIncremento)

                    return `Ultimo accesso alle ${this.lastAccesses[this.currentChat]}`;

                } else if (this.statoChat === false) {


                    if (this.isIncremento === false) {

                        console.log('condizione cancellare')

                        this.lastAccesses[this.currentChat] = this.lastRecordedDateStaticForSure;

                        return `Ultimo accesso alle ${this.lastAccesses[this.currentChat]}`;
                    }

                    console.log('condizione chat false')
                    return `Ultimo accesso alle ${this.lastAccesses[this.currentChat]}`;

                } else {

                    console.log('condizione sconosciuta')
                    return `Ultimo accesso alle ${this.lastAccesses[this.currentChat]}`;
                }

            } else {

                return 'Sta scrivendo...'
            }
        },
        deleteMessage(index) {

            this.lastRecordedDateStaticForSure = this.lastAccesses[this.currentChat];


            this.contacts[this.currentChat].messages.splice(index, 1);

            console.log(this.datesArray)
            this.currentBox = null;
        },
        pushMessage() {

            if (this.newMessage === '' || this.newMessage.trim().length === 0) {

                this.newMessage = '';
                return
            }

            let ore = new Date().getHours();
            let minuti = new Date().getMinutes();

            ore = +ore < 10 ? '0' + ore : ore
            minuti = +minuti < 10 ? '0' + minuti : minuti

            this.contacts[this.currentChat].messages.push({

                date: `${ore}:${minuti}`,
                message: this.newMessage,
                status: 'sent'
            })

            this.newMessage = '';

            this.lastAccesses[this.currentChat] = `${ore}:${minuti}`

            this.isWriting = !this.isWriting;

            setTimeout(() => {

                this.contacts[this.currentChat].messages.push({
                    date: `${ore}:${minuti}`,
                    message: this.answers[this.getRandomNumber(0, 99)],
                    status: 'received'
                });

                this.isWriting = !this.isWriting;

            }, this.getRandomNumber(1500, 3500));
        },
        infosMessage(index) {

            if (this.contacts[this.currentChat].messages[index].status === 'sent') {

                return 'Tu';

            } else {

                return this.contacts[this.currentChat].name;
            }
        },
        insertEmoji(index) {

            this.newMessage += this.emojiArray[index].emoji;
        },
        toggleEmojiContainer() {

            this.emojiContainerActive = !this.emojiContainerActive;
        },
        toggleinfoBoxActive() {

            this.infoBoxActive = !this.infoBoxActive;
        },
        createDate(index) {

            if (this.contacts[this.currentChat].messages[index].date.includes('/')) {

                return '';

            } else {

                let giorno = new Date().getDate();
                let mese = new Date().getMonth();
                mese = +mese + 1;
                let anno = new Date().getFullYear();

                giorno = +giorno < 10 ? '0' + giorno : giorno
                mese = +mese < 10 ? '0' + mese : mese

                return this.fullDate = `${giorno}/${mese}/${anno}`
            }
        }
    }
}).mount('#app')