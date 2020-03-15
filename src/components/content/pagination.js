import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

export class Pagination extends Component {
    state = {
        page : this.props.page,
        count : 0,
        perPage: this.props.perPage
    }
   
       
    render() {
        const { page, count, perPage} = this.state
        const project = Object.values(page).slice(count*perPage, count*perPage+perPage);
        this.props.data(project)
        
        const length = Object.values(page).length;
        const item_length = Math.ceil(length / perPage);

        setTimeout(() => {
            const li = document.querySelectorAll('.page-item');
            const click = document.querySelectorAll('.click');
            click.forEach((value, key) => {
                value.addEventListener('click', (e) => {
                    e.preventDefault()
                    $(window).scrollTop(0);
                    li.forEach((li_item, li_key) => {
                        li_item.classList.remove('active');
                    })
                    value.classList.add('active');
                    this.setState({
                        count : key
                    })
                })
            })            
        }, 500);
        
        const next = (e) => {
            e.preventDefault();
            document.querySelector('.page-item.active').nextElementSibling.click();
        }
        const prev = (e) => {
            e.preventDefault();
            document.querySelector('.page-item.active').previousElementSibling.click();
        }
        // pagination
       
        return (
            <div className="project-pagination m-top-30">
                <div className="pagination-area">
                    <nav aria-label="navigation pagination d-flex justify-content-end" role="navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item prev" onClick={prev}><NavLink className="page-link" to="#">Previous</NavLink></li>
                            {
                                
                                Object.values(this.props.page).map((value, key) => {
                                    return (
                                        key <= item_length-1 &&
                                        <li key={ key } className={`page-item click ${key === 0 && "active"}`}><NavLink className="page-link" to="#">{key + 1}</NavLink></li>
                                    )
                                })
                            }
                            <li className="page-item next" onClick={next}><NavLink className="page-link" to="#">Next</NavLink></li>
                        </ul>
                    </nav>
                </div>{/*<!-- ends: .pagination-wrapper -->*/}
            </div>
        )
    }
}
