const Footer = ({ footer }) => {
    return (
        <div className="footer">
            <ol className="card">
                {footer.map((el) => (
                    <li className="card-li">
                        <a href="#">{el.card}</a>
                        <ol className="block-item">
                            {Array.from(el.block).map((i) => (
                                <li>{i}</li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Footer;