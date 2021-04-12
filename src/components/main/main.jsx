import React, {useEffect, useState} from 'react';
import './main.less';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/repo";
import {setCurrentPage} from "../../reducers/reposReducer";
import {createPages} from "../../utils/pagesCreator";
import {Redirect} from "react-router-dom";

const Main = () => {

    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const isFetchError = useSelector(state => state.repos.isFetchError)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const [searchValue, setSearchValue] = useState("")
    const pagesCount = Math.ceil( totalCount / perPage )
    const pages = []

    createPages(pages, pagesCount, currentPage)

    //вызов функции для получения данных запросом к серверу
    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage) )
    }, [currentPage])  //обновление вызова при изменении зависимости в массиве

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    // if (isFetchError) {
    //     return <Redirect to='/error' />
    // }
// console.log(repos)
//     debugger

    return (
        <div>
            { isFetchError &&
                <div className="alert alert-danger" role="alert">
                Есть ошибка при попытке получения данных с сервера! Попробуйте обновить страницу.
                </div>
            }
            <div className="search">
                <input
                    value={searchValue}
                    onChange={(e) => {setSearchValue(e.target.value)}}
                    type="text"
                    placeholder="input repo name"
                    className="search-input"/>
                <button
                    onClick={() => searchHandler()}
                    className="search-btn">Search</button>
            </div>
            {
                isFetching === false
                    ?
                repos.map( repo => <Repo repo={repo} key={repo.id}/> )
                    :
                    <div className="fetching" >
                    </div>
            }
            <div className="pages">
                {pages.map((page, index) =>
                    <span key={index}
                          className={currentPage === page ? "current-page" : "page"}
                          onClick={() => dispatch(setCurrentPage(page)) }
                    >{page}</span> )}
            </div>
        </div>
    );
};

export default Main;