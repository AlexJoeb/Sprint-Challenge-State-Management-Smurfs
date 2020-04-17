import React, { useEffect } from 'react'

import { connect } from 'react-redux';
// import { removeSmurf } from '../Redux/Actions/MainActions';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export function SmurfList({ smurfs }) {
    
    return (
        <ul css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content:space-around;
            list-style:none;
        `}>
            {smurfs.length > 0 && smurfs.map(item => {
                return (
                    <li
                        key={item.id}
                        css={css`
                            margin-bottom: 15px;
                            border: 1px solid black;
                            flex-basis: 49%;

                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            flex-wrap: wrap;

                            p:first-of-type{
                                margin-left: 15px;
                            }
                        `}
                    >
                        <p>{item.name}</p>
                        <p>{item.age} years old</p>
                        <p>{item.height} tall</p>
                        <p
                            
                            css={css`
                                font-family: sans-serif;
                                font-size: .7rem;
                                font-weight: bold;
                                color: red;

                                border-left: 1px solid black;
                                
                                height: 100%;
                                width: 60px;

                                margin-top: auto;

                                display:flex;
                                justify-content: center;
                                align-items: center;

                                &:hover{
                                    cursor: pointer;
                                    background:red;
                                    border: 0;
                                    color:white;
                                }
                            `}
                        >delete</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default connect(({ smurfs }) => ({ smurfs }), {
    // removeSmurf
})(SmurfList);