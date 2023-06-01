import React, { Component } from 'react';
import Toolbar from './Toolbar.jsx';
import ProjectList from './ProjectList.jsx';
import projects from './projects';


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'All',
            projects: projects
        };
    }

    setFilter(selectedProject){
        let projectListRizult;
        
        if (selectedProject === 'All') {
            projectListRizult = projects;
        } else {
            projectListRizult = projects.filter(elem => elem.category === selectedProject);
        }
        this.setState({ selected: selectedProject, projects: projectListRizult });
    }
 
    render() {
        return(
            <>
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selected}
                    onSelectFilter={(filter) => { this.setFilter(filter.target.textContent); }}
                />

                <ProjectList projects={this.state.projects} />
            </>
        )
    }
}
