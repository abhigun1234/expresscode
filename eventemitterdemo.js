const EventEmitter=require('events')
const emitter =new EventEmitter();
emitter.on('messageLogged',function(){
    console.log('Listner called')
})
emitter.emit('messageLogged')