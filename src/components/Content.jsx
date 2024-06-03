const Content = ({ chapter }) => {
    return (
        <div className="content">
            <ol className="chapter">
                {chapter.map((el) => (
                    <li>
                        <a href="#">{el}</a>
                    </li>
                ))}
            </ol>
            <div className="inputBlock">
        <span className="yandex">
          <span className="ya">Я</span>ндекс
        </span>
                <input className="input" type="text" name="browser" defaultValue=""/>
                <button className="btn">Найти</button>
            </div>
            <div className="hint">
                <span>Найдется всё. Например, </span>
                <span className="valueColor">фаза луны сегодня</span>
            </div>
            <img className="banner" src={require("./img/yandex1.png")} alt="icons" width="100"/>

        </div>
    );
}

export default Content;