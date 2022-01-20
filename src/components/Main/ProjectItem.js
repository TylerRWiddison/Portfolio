import './ProjectItem.css'

const ProjectItem = (props) => {

    if (props.viewCode === 'deactivated') {
        return (
            <div className='card'>
            <h1>{props.title}</h1>
            <a target='_blank' href={props.site}>
            <img className='site_preview' src={`/img/${props.preview}.jpg`} alt={props.alt} />
            </a>
            <p>{props.description}</p>
            <div className='button-group_projects'>
                <a target='_blank' className='button-project' href={props.site}>Visit Site</a>
                
            </div>
        </div>
        )
    }

    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <a target='_blank' href={props.site}>
            <img className='site_preview' src={`/img/${props.preview}.jpg`} alt={props.alt} />
            </a>
            <p>{props.description}</p>
            <div className='button-group_projects'>
                <a target='_blank' className='button-project' href={props.site}>Visit Site</a>
                <a target='_blank' className='button-project' href={props.viewCode}>View Code</a>
            </div>
        </div>
    )
}

export default ProjectItem;