import React from "react";
import { Part } from "./Part";

export const Content = (props) => {
    const parts = props.parts
    // console.log(parts)
    return (
        <>
            {parts.map(element => {
                // console.log(element)
                return (
                    <Part key={element.id} part={element.name} exercises={element.exercises}/>
                )
            })}
        </>
    )
}