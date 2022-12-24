import tribute from '../Assets/tribute.png'
import tribute2 from '../Assets/tribute2.png'
import technical from '../Assets/technical.png'
import survey from '../Assets/survey.png'
import quote from '../Assets/quote.png'
import pomodoro from '../Assets/pomodoro.png'
import calc from '../Assets/calc.png'
import drum from '../Assets/drum.png'
import landing from '../Assets/landing.png'
import landing2 from '../Assets/landing2.png'
import markdown from '../Assets/markdown.png'

export const Projects = () => {

    
    return (
        <div id="projects">
        <h1 className="headers">Projects</h1>
        <div id="project-cards">
            <div id="project-1" className="card">
                <h3 className='title'>Author Tribute to Haruki Murakami</h3>
                <div id="cf1">
                <img src={tribute2} alt="murakami-tribute" className="bottom preview"/>
                <img src={tribute} alt="murakami-tribute" className="top preview"/>
                </div>
                <p id="tribute-link" className="description">
                <a 
                href="https://codepen.io/LYDIA-KRAUZ/full/bGLNBLL" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://gist.github.com/LyddyK/ccbb7c9a59d41dc97ad792de2f7e5559"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
            </div>
            <div id="project-2" className="card">
            <h3 className='title'>Technical Guide to Beginning Algebra</h3>

            <img src={technical} alt="technical-page" className='preview'/>
            <p className="description">
                <a 
                href="https://codepen.io/LYDIA-KRAUZ/full/LYQRVxL" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://gist.github.com/LyddyK/92c7ce84fa0cda021256882cbc8196e9"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
            </div>
            <div id="project-3" className="card">
            <h3 className='title'>Mock-up Business Survey</h3>

            <img src={survey} alt="business-survey" className='preview'/>
            <p className="description">
                <a 
                href="https://codepen.io/LYDIA-KRAUZ/full/vYdNgrJ" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://gist.github.com/LyddyK/67d7f8b886346eee3f9d64c02a099aa7"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>     
            </div>
            <div id="project-4" className="card">
            <h3 className='title'>Javascript Random Quote Machine</h3>

            <img src={quote} alt="random-quote-machine" className='preview'/>
            <p className="description">
                <a 
                href="https://lyddyk.github.io/quote-machine/" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://github.com/LyddyK/quote-machine.git"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
            </div>
            <div id="project-5" className="card">
            <h3 className='title'>Javascript Pomodoro Timer</h3>

            <img src={pomodoro} alt="pomodoro-timer" className='preview'/>
            <p className="description">
                <a 
                href="https://lyddyk.github.io/pomodoro-clock/" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://github.com/LyddyK/pomodoro-clock.git"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
        </div>
            <div id="project-6" className="card">
            <h3 className='title'>Javascript Simple Calculator</h3>

            <img src={calc} alt="javascript-calculator" className='preview'/>
            <p className="description">
                <a 
                href="https://lyddyk.github.io/javascript-calculator/" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://github.com/LyddyK/javascript-calculator.git"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
            </div>
            <div id="project-7" className="card">
            <h3 className='title'>Javascript Soundboard</h3>

            <img src={drum} alt="drum-machine" className='preview'/>
            <p className="description">
                <a 
                href="https://lyddyk.github.io/drum_machine/" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://github.com/LyddyK/drum_machine.git"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
        </div>
            <div id="project-8" className="card">
            <h3 className='title'>Naruto "Hidden Leaf Village" Landing Page</h3>
            
            <div id="cf2">
            <img src={landing2} alt="landing-page" className="bottom preview"/>
            <img src={landing} alt="landing-page" className="top preview"/>
            </div>
            <p  id="naruto-link" className="description">
                <a 
                href="https://codepen.io/LYDIA-KRAUZ/full/xxzNZRJ" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://gist.github.com/LyddyK/df172b280eb0b50120509ff70a332abf"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
            </div>
            <div id="project-9" className="card">
            <h3 className='title'>Markdown Converter/Viewer</h3>

            <img src={markdown} alt="markdown-viewer" className='preview'/>
            <p className="description">
                <a 
                href="https://lyddyk.github.io/markdown-previewer/" 
                target="_blank" rel="noreferrer" className="links">View Project</a>
                <a
                href="https://github.com/LyddyK/markdown-previewer.git"
                target="_blank" rel="noreferrer" className="links">View Code</a>
            </p>
                </div>
        </div>
        </div>
    )
}