import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
          <div className="tela-inteira">
            <header>
            <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
            <h2>Lab Tube</h2>
            <input type="text" placeholder=" Pesquisar" id="campoDeBusca" />
            <button><img id="lupa" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACvUlEQVRIie2WTWsTURSGnzMxCXSZoCQqpZQuBO1G/QFqrboRUxfzA1pouBuFQlFczUqUIi5cTAZtf8CA9gMXhVrRXQW7KS24qaKISSOzLLSpyXGRKRQNmUltXfXdzL1zzz3PzP1474Uj/SdJVIDv+6kgCAoiUgDOA6fDpu+qugzMZrPZGdu2awcGLpVKt4EJoDciz7qqjhtjpv8J7DiOlcvlHgHjACKyAkyq6puurq6vAFtbWz2NRuMqMAL0h10fVyqVB47jNKLAx1q93APdVtW7lUrleYtka8Ca4zjP8vl8UVWfAvdyuRzA/Y7/OBzel8C2ZVnXR0dH30clAXBd95KIzANpERkqFosz7eKtvRXf91M05xRVvRsXCmCMeQeMhdUJz/OSscFBEBSAXhFZ2djYeB4XuqtMJuMBq6rap6q3YoMtyxoCUNUXcRbIn7Jtuy4ik2G1EBusqufD4mKn0F2JyEJYvBgbDJwEqNfr3/YLTiQSu31PdQL+Z21ubka6YSvwD4BEItG9X3AymewGEJFKbLCqfgyLg/sFi8i1MNdSbDAwGz5HHMfpeBp8308Aw+EHzMUGZ7PZGWAd6M/n88VOwUEQGOAs8LlcLrc9MP5aCK7rDonIK5o+fSN0pEh5nndZVeeBlKreNMa87ggMUCqVHgH3gG1gLJPJeLZt11vF+r6fCILAiMgTIAVUVbXfGFPtGBweiw9DOMCqiEyKyMLOzs5XAMuyeoBBERmhObwAVeAETdscaAdvu+c8zysAE6ra1y4O+KKqd9Lp9IdarfYWOBcFj9zsnuclQ8MvABdoXn1ERMqquiQic+VyedpxnF8AruueEJHFKHgsl+lUU1NTx2u12iLNm8knEblSLBbLhw6OAz9wr97V8PDwT1W9CqwCZxqNxuze9kMDAxhjqqo6ICLLItJyOx7p0PUbfkojgSHRaNIAAAAASUVORK5CYII=" /></button>
            </header>

        <main>
            <nav className="menu-vertical">
                    <p className="botoes-meunu-vertical"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAu0lEQVRIie3TLW7CMRjA4ZYQsoQES4Kb4QIzaNzOMLcLIBBcYXaHwOFR3ACFRKARmCUzZIEH1RAYHwX+KPjp5nn7pmkIDxW66N4Djviy7RulovAK+v43wMuteBXDA3hqhNq1eB3jE3hqgsal+CumGXhqhmYu/ob5BXhqgdY5vI2fK/DUL96P4R9Y3oCn/vC5j3ewKgBPrdELIYR4YBNZj3WkGOOOWcxvPFE59+D+zXI3vfsGzwEPMODZ2TaNffNGr+MLIwAAAABJRU5ErkJggg==" />     Início</p>
                    <p className="botoes-meunu-vertical"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABF0lEQVRIie2UvUoDQRSFz6SUQAiLqyGQUu18Cu1t7PIcvoi9D5BXSGuRIqLGH4KCraVWdvls7spNCLvjzqYI5MKyw87c75w5F1ba9gqpAKAt6VzSkT0nkrIQwnEquxAIwDXLddsI3IkcAF9O4KbYa9UEttw6lzSW1JH0bZ/nKW4HwBNwBuTAzFy/Aj2L6yIF/mHAH+DN1jO7STGTdixw3zX2gXcDfrq8/+D/dZsDj3b1U+DZgHdAF7iyvcM68B7w4lwu7D0Fuu7c3kofAFXwPjC3s/duiA9AVtFbLmBDLHKeAplFNVqX8yowRmBocUx8FLGOYyO6BDp1gFECKY7XCZT+KpIdVQk0UUsCTTguFdhEbVxgV5X1C0fjpJlxyGpkAAAAAElFTkSuQmCC" />     Em alta</p>
                    <p className="botoes-meunu-vertical"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAkUlEQVRIie2VuwkCQRQA5ynYwSXagqElGGpoHdZhC5ZgCxZxTfjByFgQxkCFUw68XSNlJ9438zZ68Heoc3VvOgd19u6LlsAOGGXud4yI4aeAmfK7MOLF2ftG1oUSKIESKIESaHAG1sAEGAMr4JRVbFyoq7pVF+qg5V1fnaob9fIc6hKo1aVaJSxVPWbqxP/8ADe2vYsMvns44wAAAABJRU5ErkJggg==" />     Inscrições</p>
                    <hr />
                    <p className="botoes-meunu-vertical"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAyElEQVRIie3UsU1DQRCE4XmYhCrIHbgAZESKiSmA1FVQAJVQBZRAAoET4D0COnD4kdgWIvEdugdCYqINbuef29Vd8q99wgUG7TVgkU1xMkLwOfpAa/NPEAdjmW9VBMALrnE0CiDJcZJpkidcVhFKdrA9gzM84B6zor4awKaeYIl33OzrG33J3x3RXfMR4RbPNUuGw8Kzr0kek1x1XbcuBewoVQ2V3j/ykt8wb22M0yRDsEDf4n/+oh7nrYNXXXFVkXb1e0n/vD4A6qmIK2IbERkAAAAASUVORK5CYII=" />     Originais</p>
                    <p className="botoes-meunu-vertical"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABlElEQVRIidWVvUoDQRSFzyTGxp8ylb6ARhB8hIgKgiYg+gxCQoi+QDrNe/gA5gEsrfxpEkGjnVaW6ZJAPovc6BB3Z1fEwgvLsHPOzHfn7sys9N/DhURgVtKOpCNJ65KWJWUkvUm6l3Qp6dI5N0gkAY2p922gS3K8AOU0ACYQoOFN0AFOgTVgEZgDVoEa0PZ8TSCTBAC4trYP1IFsYEwWqJgXoJkGADAEduM8Ef1FD1JKA/gsVxqAaVWTn4FcGsA3SAIga98L4CByFUkRApheN8vFXwEKZnn8FQDIx+gLpvcmfRlP7Jm4EGB0rL2Kg4SyezLASsCT5+twtachUSXyT96ttVtxAOfcu6SiraQgaXq3TMbeRGV3aPQOgdPrreR4qi8LPMRuU2CW8cUFUAkBYqA1G9sl6qCZqWymPlD8weSbwAAYAXtJ5qYHqYbKBcxY5gMbc5Ymm4wHmXyTuu2QeXsKwIlX8xFwTui6jgCVGF9cSdEF9uPmSfpl5iTtSypJ2pC0ZNKrpDtJLUkt59wwdeb/Lj4AEjOIx5pU2RcAAAAASUVORK5CYII=" />     Histórico</p>
                
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>© Bruno Moura 2022</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
