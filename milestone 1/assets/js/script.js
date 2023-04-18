const {createApp} = Vue;

createApp({
  
  data(){

    return{

      contacts:[
        {
          name:'Michele',
          avatar:'assets/img/avatar_1.jpg',
          visible:true,
        },

          {
          name:'Fabio',
          avatar:'assets/img/avatar_2.jpg',
          visible:true,
        },

          {
          name:'Samuele',
          avatar:'assets/img/avatar_3.jpg',
          visible:true,
        },

          {
          name:'Alessandro B.',
          avatar:'assets/img/avatar_4.jpg',
          visible:true,
        },

          {
          name:'Alessandro L.',
          avatar:'assets/img/avatar_5.jpg',
          visible:true,
        },

          {
          name:'Claudia',
          avatar:'assets/img/avatar_6.jpg',
          visible:true,
        },

          {
          name:'Federico',
          avatar:'assets/img/avatar_7.jpg',
          visible:true,
        },

          {
          name:'Davide',
          avatar:'assets/img/avatar_8.jpg',
          visible:true,
        },
      ],
      date:'oggi',
      clock:'12:00'
    }
  },

}).mount('#app')