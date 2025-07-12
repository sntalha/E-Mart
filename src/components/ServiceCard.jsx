import React from 'react'

export const ServiceCard = ({ props }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-between text-center gap-2 p-3" style={{ width: "280px", height: "200px" }}>
            <img src={props.image} alt="" />
            <h5 className="fw-bold">{props.title}</h5>
            <p style={{ fontSize: "15px"}}>{props.description}</p>
        </div>
    )
}
