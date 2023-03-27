

const Footer = () => {
    return (
        <footer>
            <div className="text-center border-t border-slate-400 mt-6 py-6 text-slate-400">
                <br />
                <div className="inline-flex gap-4">
                    <a target={"_blank"} className="hover:underline hover:text-green-600" href="https://github.com/tobiasmaneschijn/" >
                        Github
                    </a>
                    <a target={"_blank"} className="hover:underline hover:text-green-600" href="https://www.linkedin.com/in/nyhaalm/">
                        LinkedIn
                    </a>
                </div>
                <h3>Developed by Tobias Maneschijn</h3>
                <p>
                    2023
                </p>
            </div>
        </footer>
    )
}

export default Footer;