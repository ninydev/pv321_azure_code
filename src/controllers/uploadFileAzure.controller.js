import {uploadToAzure} from "../services/files/uploadToAzure.js";
import {getCaptioning} from "../services/computer_vision/captioning.service.js";
import {translation} from "../services/translation/translation.service.js";

export const uploadFileAzureController = async (req, res) => {

    // Проверяем, есть ли файл в запросе
    if (!req.files || !req.files.avatar) {
        return res.status(400).json({ error: 'Файл не загружен' });
    }

    const file = req.files.avatar; // Получаем файл из запроса


    try {
        // Загружаем файл через модуль
        const uploadedFile = await uploadToAzure(file);
        console.log(uploadedFile)

        // Додаємо caption
        const caption = await getCaptioning(uploadedFile.url);
        console.log(caption)

        const translations = await translation(caption);

        res.json({
            message: 'Файл успешно загружен в Azure Storage',
            file: uploadedFile,
            caption: caption,
            translations: translations
        });
    } catch (err) {
        res.status(500).json({
            error: 'Ошибка загрузки файла в Azure Storage',
            details: err.message,
        });
    }


};
