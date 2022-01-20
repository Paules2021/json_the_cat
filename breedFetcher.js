const request=require('request')

const fetchBreedDescription = (breedname ,callback)=> {

request(`https://api.thecatapi.com/v1/breeds/search?name=${breedname}`,(error, response, body) =>{
  
if (error){
    callback(error,null);
    return;
  }
  
if (response.statusCode !== 200 ){
    const msg=`status code ${response.status} when fetching ip.address ${body}`
    callback(Error(msg),null);
    return
  }

const data=JSON.parse(body)
let desc=data[0].description

if (data.length===0){
    callback("no breed found",null);
    return;
  }

callback(desc,null);

})
};

fetchBreedDescription('siberian',(desc)=>console.log('desc:', desc))

module.exports={fetchBreedDescription}