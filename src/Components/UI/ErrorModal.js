import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css';
import Wrapper from "../Helpers/Wrapper";

const ErrorModal =(props)=>{

    return(
        <Wrapper>

        <div className={classes.backdrop} onClick={props.onConfirm}/>
        <Card className = {classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>

                <div className={classes.content}>
                    <p>{props.msg}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
        </Card>
        </Wrapper>

    );
};
export default ErrorModal;