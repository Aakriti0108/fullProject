import React from "react";
import ReactDOM from 'react-dom';
import classes from './Error.module.css';
import Card from "./Card";
import Button from './Button';

const backdrop = (props)=>{
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
    return (
        
             
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}> 
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>OKAY</Button>
                </footer>
            </Card>
        
    )
    
   
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                   <backdrop onConfirm={props.onConfirm} />,
                   document.getElementById('backdrop-root'))}
        
        {ReactDOM.createPortal(
                   <ModalOverlay title={props.title} message={props.message} onClick={props.onConfirm} />,
                   document.getElementById('overlap-root'))}
                   
        </React.Fragment>
    )
}

export default ErrorModal