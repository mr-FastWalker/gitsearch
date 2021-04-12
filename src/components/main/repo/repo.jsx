import React from 'react';
import './repo.less'
import {NavLink} from "react-router-dom";
import styled from 'styled-components'

const Repo = (props) => {

    const repo = props.repo

    return (
        <div>
        {/*<div className="repo">*/}
        {/*    <div className="repo-header">*/}
        {/*        <div className="repo-header-name">*/}
        {/*            <NavLink to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</NavLink>*/}
        {/*        </div>*/}
        {/*        <div className="repo-header-stars">{repo.stargazers_count}</div>*/}
        {/*    </div>*/}
        {/*    <div className="repo-last-commit">{repo.updated_at}</div>*/}
        {/*    <a href={repo.html_url} className="repo-link">Cсылка на репозиторий {repo.html_url}</a>*/}
        {/*</div>*/}
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