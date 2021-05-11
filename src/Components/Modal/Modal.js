import React from 'react';
import { 
    ModalWrapper,
    ModalInner,
    ModalHeader,
    Title,
    ButtonQuit
} from './ModalStyle';
import { GrClose } from 'react-icons/gr';

export const Modal = (props) => {

    return (
        <ModalWrapper>
            <ModalInner>
                <ModalHeader>
                    <Title>Add Event</Title>
                    <ButtonQuit onClick={props.hideModal}>
                        <GrClose size={30}/>
                    </ButtonQuit>
                </ModalHeader>
                {props.children}
            </ModalInner>
        </ModalWrapper>
    );
}