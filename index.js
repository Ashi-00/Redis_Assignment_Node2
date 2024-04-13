//const express = require('express');
// Connecting Redis
const redis = require('redis'); 
const sub = redis.createClient(); 
(async () => { 
	await sub.connect(); 
})(); 

console.log("Connecting to the Redis"); 

sub.on("ready", () => { 
	console.log("Connected!"); 
}); 

sub.on("error", (err) => { 
	console.log("Error in the Connection"); 
}); 

//SUBSCRIBER


 const channel = 'office';

 const listener = (message, channel)=>console.log(message);

     (async () => { 
        await sub.subscribe(channel,listener); 
    })(); 

sub.on('subscribe',(channel, count) =>
{    
    console.log(`Subscribed to ${count} channel. Updates on ${channel} channel.`)
});

sub.on('message',(channel,message)=> {
    console.log(`Message recieved: ${message}`);
});

sub.on("error", (err) => {
    console.error("Error with subscriber client:", err);
});

