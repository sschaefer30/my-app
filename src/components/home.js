import GithubIMG from "../images/GitHub_Logo.png"
import LinkedInIMG from "../images/linkedin.png"

export default function Home() {
    return (
        <div>
            <div className={'homeInfo'}>
                <div className={'homePieceMain'}>
                    <div>
                        <img className={'homePic'} src={'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png'}/>
                    </div>
                    <div className={'homePiece'}>
                        <h1> Scott Schaefer </h1>
                        <p>
                            I am an aspiring programmer and software engineer studying Computer Science at the
                            Georgia Institute of Technology.
                        </p>
                        <p>
                            Currently, I am a third year with a planned graduation
                            date of Spring 2023 with threads of Intelligence and Info Internetworks.
                        </p>
                    </div>
                </div>
            </div>
            <div className={'linkBoxes'}>
                <div className={'linkBox'}>
                    <a href="https://github.com/sschaefer30" target="_blank">
                        <img src={GithubIMG} width="200px"/>
                    </a>
                </div>
                <div className={'linkBox'}>
                    <a href="https://www.linkedin.com/in/scott-schaefer-359448192/" target="_blank">
                        <img src={LinkedInIMG} width="100px"/>
                    </a>
                </div>
            
            </div>
        </div>
    )
}