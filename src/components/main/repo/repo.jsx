import React from 'react';
import './repo.less'
import {NavLink} from "react-router-dom";

const Repo = (props) => {

    const repo = props.repo

    return (
        <div>
        <div className="card border-primary mb-3">
            <div className="card-header">
                <span className="repo-last-commit">{repo.updated_at} </span>
                <span className="repo-header-stars"> stars count: {repo.stargazers_count}</span>
            </div>
            <div className="card-body text-primary">
                <h5 className="card-title"><NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink></h5>
                <p className="card-text"><a href={repo.html_url} className="repo-link">Cсылка на репозиторий {repo.html_url}</a></p>
            </div>
        </div>
        </div>
    );
};

export default Repo;