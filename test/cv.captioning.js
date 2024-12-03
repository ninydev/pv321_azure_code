import {getCaptioning} from "../src/services/computer_vision/captioning.service.js";

const imageUrl = "https://ninydev.com/wp-content/uploads/2024/05/ai-7-segment.jpeg";

getCaptioning(imageUrl)
    .then((caption) => {
        console.log("Подпись к изображению:", caption);
    })
    .catch((error) => {
        console.error("Ошибка:", error.message);
    });