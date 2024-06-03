import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const arrCardTape = ["Сейчас в СМИ", "в Германии", "Рекомендуем"];
  const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

  const newsList = [
    {
      text: "TEXT1"
    },
    {
      text: "TEXT2"
    },
    {
      text: "TEXT3"
    }
  ];

  const chapter = [
    "Видео",
    "Картинки",
    "Новости",
    "Карты",
    "Маркет",
    "Переводчик",
    "Эфир"
  ];
  chapter.push("еще");

  const footer = [
    {
      card: "Погода",
      block: ["item1", "item2", "item3"]
    },
    {
      card: "Посещаемое",
      block: ["item1", "item2", "item3"]
    },
    {
      card: "Карта Германии",
      block: ["item1", "item2", "item3"]
    },
    {
      card: "Телепрограмма",
      block: ["item1", "item2", "item3"]
    },
    {
      card: "Эфир",
      block: ["item1", "item2", "item3"]
    }
  ];

  return (
      <div className="container">
        <Header arrCardTape={arrCardTape} date={date} newsList={newsList} />
        <Content chapter={chapter} />
        <Footer footer={footer} />
      </div>
  );
}

export default App;
