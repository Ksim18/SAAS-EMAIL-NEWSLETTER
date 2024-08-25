"use client";

import {useRecoilState} from 'recoil';

import {modalState} from '../atom/modalAtom';
import Modal from 'react-modal';
import{HIX} from 'react-icons/hi';
const {useSession}= require('next-auth/react');


export default function CommentModal(){
    const [open,setOpen] = useRecoilState(modalState);
    return(
        <div>
            
        <Modal
        isOPen={open}
        onRequestClone={(setOpen(false))}
        ariaHideApp={false}
       ></Modal>
        </div>
    )
}