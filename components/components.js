let styles = {
    width: '500px'
}

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.imageUrl = props.imageUrl
        this.name = props.name
        this.technologies = props.technologies
        this.link = props.link
        this.description = props.description
        this.project = React.createRef()
    }

    componentDidMount() {
        let currentProject = this.project.current
        console.log(currentProject)
        window.addEventListener('scroll', function () {
            isInViewport(currentProject)
            if (isInViewport(currentProject)) {
                currentProject.classList.add('show')
            } else {
                currentProject.classList.remove('show')
            }
        });
    }

    render() {

        let techname = this.technologies
        let techIcons = []

        namesIcons.forEach(element => {
            techname.includes(element.name) && techIcons.push(element.tag)
        });

        return (
            <div style={styles} className='project' ref={this.project} >
                <h2 className='project-name'>{this.name}</h2>
                <div className='project-img-link-container'>
                    <div className='project-technologies'>{techIcons}</div>
                    <div className="description-link-container">
                        <p>
                            {this.description}
                        </p>
                        <a href={this.link} target='_blank' className='project-link' title={this.link}>
                            <i className="fas fa-external-link-alt fa-sm"></i>
                        </a>
                    </div>
                    <img src={this.imageUrl} alt="" className='project-image' />
                </div>
            </div>
        )
    }
}

class Projects extends React.Component {

    render() {
        return (
            <div className='projects-container'>
                {
                    projectsData.map((element) => {
                        return <Project key={element.id} {...element} ></Project>
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(
    <Projects />,
    document.getElementById('root-projects')
)


// function Project({ props }) {
//     const { id, name, imageUrl, link, description } = props;

//     return (
//         <div className='project'>
//             <img src={imageUrl} alt="" />
//             <p>{name}</p>
//         </div>
//     )
// }

// function Project() {
//     return (
//         <div>
//             <img src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1" alt="" />
//             <p>Projectooooooo</p>
//         </div>
//     )
// }