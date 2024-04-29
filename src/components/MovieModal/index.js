import React, {useState} from 'react'
import "./MovieModal.css";

export default function MovieModal  ({
    base_url,
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
})   {
    return (
        <div className='presentation'>
            <div className='wrapper-modal'>
                <div className='modal'>
                    <span onClick={() => setModalOpen(false)} className='modal-close'>X
                    </span>
                    <img
                        className='modal__poster-img'
                        src={`${base_url}${backdrop_path}`}
                        alt="modal__poster-img"/>
                    <div className='modal__content'>
                        <p className='modal__details'>
                            <span className='modal__user-perc'>{Math.floor(Math.random()*100)}% for you</span>  
                            {
                                release_date
                                    ? release_date
                                    : first_air_date
                            }
                        </p>
                        <h2 className='modal__title'>{
                                title
                                    ? title
                                    : name
                            }</h2>
                        <p className='modal__overview'>평점: {vote_average}</p>
                        <p className='modal__overview'>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 