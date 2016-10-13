const name = "chinan JS"

import {sayHi} from "./function"

console.log(sayHi(name))


import axios from 'axios'
const batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json'
const promise = axios.get(batmanUrl)
promise.then(function(response){
    console.log('GET response:', response.data)

})
