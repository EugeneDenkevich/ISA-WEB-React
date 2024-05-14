import React from "react"
import MiniApp from "../MiniApp/MiniApp"
import "./MiniAppBlock.css"

const MiniAppBlock = (props) => {
    const miniapps_data = [
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: "Скачать полигоны в YOLO",
            description: "Cкачай разметку из CVAT в YOLO формате с выгрузкой полигонов.",
            author: "Евгений Денкевич",
        },
        {
            id: "d32f9a1b-a13b-4839-b343-42e812428406",
            name: "Отрисовка масок",
            description: "Нанеси маски на изображения, согласно готовой разметке в CVAT.",
            author: "Александр Болотин",
        },
        {
            id: "7849190d-a528-46a1-9a5e-456de0e63f47",
            name: "Генерация ответов GPT",
            description: "Сгенерируй ответы от GPT согласно промта, помещённого в JSONL-файл.",
            author: "Жан Жанузаков",
        },
        {
            id: "7849190d-a528-46a1-9a5e-456de0e63f47",
            name: "Генерация ответов GPT",
            description: "Сгенерируй ответы от GPT согласно промта, помещённого в JSONL-файл.",
            author: "Жан Жанузаков",
        },
        {
            id: "7849190d-a528-46a1-9a5e-456de0e63f47",
            name: "Генерация ответов GPT",
            description: "Сгенерируй ответы от GPT согласно промта, помещённого в JSONL-файл.",
            author: "Жан Жанузаков",
        },
    ]
    return (
        <div className="mini-app-block">
            {miniapps_data.map((el) => (
                <MiniApp name={el.name} description={el.description} author={el.author} />
            ))}
        </div>
    )
}

export default MiniAppBlock