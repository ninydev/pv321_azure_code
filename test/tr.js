import {translation} from "../src/services/translation/translation.service.js";

translation ('Hello World')
.then( result => {
    console.log(result)
})
.catch(e => {
    console.error(e)
})