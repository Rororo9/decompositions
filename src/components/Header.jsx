const Header = ({ arrCardTape, date, newsList, news }) => {
    let workOnMistakes;

    return (
        <div className="header">
            <div className="block-content">
                <ol className="card-tape">
                    {arrCardTape.map((card) => (
                        <li>{card}</li>
                    ))}
                    <span className="date">{date}</span>
                </ol>

                <ol className="news-list">
                    {newsList.map((el) => (
                        <li>
                            <img className="iconsImg" src={el.icons} alt="icons" />
                            <a href="#">{el.text}</a>
                        </li>
                    ))}
                </ol>

                <div className="exchange-rate">КУРС ВАЛЮТ</div>
            </div>
            <div className="sidebar">
                <img src={workOnMistakes} width="100" height="100" alt="sidebarImg" />
                <p>Работа над ошибками</p>
                <span>Смотрите на Яндексе и зпоминайте</span>
            </div>
        </div>
    );
}

export default Header;