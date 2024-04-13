const redis = require('redis')
const pub = redis.createClient();
(async () => { 
	await pub.connect(); 
})(); 

console.log("Connecting to the Redis"); 

pub.on("ready", () => { 
	console.log("Connected!"); 
}); 

pub.on("error", (err) => { 
	console.log("Error in the Connection"); 
}); 
const prompt = require('prompt-sync')();

const channel = 'office';


async function publishing(){
    try{ 
    console.log('Started office publish');
    for(let i=0; i<1;){
        var mssg= prompt("Enter message to be published: ");

       await pub.publish(channel,mssg);
   // await new Promise(resolve => setTimeout(resolve, 500));
} }
   catch(err){
    pub.disconnect();
   }
  
}

publishing();
