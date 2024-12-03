import {getSentiment} from "../src/services/text_analytics/sentiment.service.js";


getSentiment('Этот продукт просто ужасен - никогда не покупайте такое себе домой')
.then(res => {
    console.log(res)
})
.catch(error => {
    console.error(error)
})