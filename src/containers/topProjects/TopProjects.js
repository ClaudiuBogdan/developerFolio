
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import './TopProjects.css'

export const TopProjects = () => {
    const flickityOptions = {
        initialIndex: 0,
        draggable: false,
    }

    return (
        <div className="project-section" id="education">
        <h1 className="projects-heading">Top projects</h1>
        <div className="project-card-container">
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
                {/* <iframe width="800" height="400"
                title='1'
                onBlur={e => {
                    console.log('Pause video', e)
                    e.target.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
                }}
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
    <iframe width="800" height="400"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
    <iframe width="800" height="400"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe> */}
            </Flickity>
        </div>
    </div>
    )
}