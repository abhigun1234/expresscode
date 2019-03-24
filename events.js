var events=require('events')
var eventEmitter=new events.EventEmitter();


var ringbell=function()
{
    console.log(" ring the bell")
}
var openthedoor=function()
{

    console.log(" open the door") 
}
eventEmitter.on('bellring',ringbell)
eventEmitter.on('openthedoor',openthedoor)
eventEmitter.emit('bellring')
eventEmitter.emit('openthedoor')