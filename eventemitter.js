// var events=require('events')
// var eventEmitter=new events.EventEmitter()
// eventEmitter.on('clicked',function(button)
// {
//     console.log(button+"clicked")
// })
// eventEmitter.emit('clicked','my button')

var events=require('events')
var eventEmittter=new events.EventEmitter()

eventEmittter.on('fetchingdata',function(button)
{

    console.log(button+'fetching data')
})

eventEmittter.emit('fetchingdata','clickedbutton')