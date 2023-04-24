const {createApp} = Vue;
createApp({
  
  data(){

    return{

      contacts:[
        {
          name:'Michele',
          photo:'assets/img/avatar_1.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Ciao',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Ciao che si dice?',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Niente di nuovo',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Bene',
              status:'received'
            },
          ]
        },

          {
          name:'Fabio',
          photo:'assets/img/avatar_2.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Hai avvisato il dottore',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Si',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Menomale',
              status:'send'
            },
          ]
        },

          {
          name:'Samuele',
          photo:'assets/img/avatar_3.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'A che ora vieni?',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Non saprei, alle 17?',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Va bene, non fare tardi',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Tranquilla',
              status:'received'
            },
          ]
        },

          {
          name:'Alessandro B.',
          photo:'assets/img/avatar_4.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Ciao, ci sei stasera?',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Si, stasera sarà una bella festa',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Anche secondo me',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Non vedo l\'ora',
              status:'received'
            },

            
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'A chi lo dici!',
              status:'send'
            },
          ]
        },

          {
          name:'Alessandro L.',
          photo:'assets/img/avatar_5.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Ciao, come stai?',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Adesso meglio, grazie',
              status:'received'
            },
          ]
        },

          {
          name:'Claudia',
          photo:'assets/img/avatar_6.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Stasera cinema?',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Purtroppo ho una festa',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Sarà per la prossima',
              status:'send'
            },
          ]
        },

          {
          name:'Federico',
          photo:'assets/img/avatar_7.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Perchè non rispondi al telefono?',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Al momento sono occupato',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Attendo una tua chiamata',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Va bene',
              status:'received'
            },
          ]
        },

          {
          name:'Davide',
          photo:'assets/img/avatar_8.jpg',
          visible:true,

          messages:[
            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Ciao Davide, ci vediamo stasera?',
              status:'send'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'Va bene',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'A stasera',
              status:'received'
            },

            {
              date:'20/04/2023',
              hour: '12:33',
              message:'A stasera',
              status:'send'
            },
          ]
        },
      ],

      counter:0,
      myMessage:"",
      searchChat : "",
    }
  },
  
methods:{

  clicked(index){
    this.counter = index;
  },
  
  newMessage(){
    if(this.myMessage.length === 0){

    }else{
      const newMessage ={
        date:'20/04/2023',
        hour:'14:00',
        message: this.myMessage,
        status: 'send'
      }

      this.contacts[this.counter].messages.push(newMessage)
      this.answer()
      this.myMessage="";
    }
  },

  answer(){
    setTimeout(() =>{
      const answer ={
        date:'20/04/2023',
        hour:'14:00',
        message: 'Ok',
        status: 'received'
      }

      this.contacts[this.counter].messages.push(answer)
    },1000)
  },
},

search(){
  console.log("cerco...", this.searchChat.toUpperCase())
},

}).mount('#app')