/*1. avere un elenco di task da fare o fatti
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task” */

const {createApp} = Vue;

createApp({
  data(){
    return{
      errorString: '',
      newTaskString: '',
      //array di tasks, in cui ogni task è un oggetto
      tasks:[
        {
          text: 'Studiare Vue',
          done: false
        },
        {
          text: 'Andare in palestra',
          done: false
        },
        {
          text: 'Preparare la cena',
          done: true
        }
      ]
    }
  },

  methods:{
    removeTask(index){
      this.errorString = '';
      if(this.tasks[index].done){
        //se la task è stata fatta la rimuovo
        this.tasks.splice(index, 1);
        
      }else{
        //se non è stata fatta scrivo il messaggio di errore
        this.errorString = 'Attenzione! Non si può eliminare la task prima di averla fatta!'
      }
    },

    createTask(){
      this.errorString = '';
      //controllo se la lunghezza del messaggio è < 5 caratteri
      if(this.newTaskString.length < 5){
        //se sì, mando il messaggio di errore
        this.errorString = 'Attenzione! il messaggio deve avere almeno 5 caratteri'
      }else{
        //altrimenti creo il nuovo oggetto task
        const newTask = {
          text: this.newTaskString,
          done: false
        }
        //lo pusho in cima all'array di tasks
        this.tasks.unshift(newTask);
        //svuoto l'input
        this.newTaskString = '';
      }
      
    }
  }
}).mount('#app')