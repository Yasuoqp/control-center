import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import '../../style/header.css'


const HeaderMenu: FC = () => {

    return (
        <div className='header-main'>

            <NavLink to={'/tasks/createTask'} className={'link'}>
                {({isActive}) => (
                    <div className='link-block' style={{backgroundColor: isActive ? '#036EB4' : '', padding: '0px 20px;'}}>Создание
                        задачи</div>
                )}
            </NavLink>

            <div >
                <NavLink to={'/tasks/draft-tasks'} className={'link'}>
                    {({isActive}) => (
                        <div className='link-block' style={{backgroundColor: isActive ? '#036EB4' : '', padding: '0px 20px;'}}>Черновики</div>
                    )}
                </NavLink>
            </div>
            <NavLink to={'/tasks/current-tasks'} className={'link'}>
                {({isActive}) => (
                    <div className='link-block' style={{backgroundColor: isActive ? '#036EB4' : '', padding: '0px 20px;'}}>Текущие задачи</div>
                )}
            </NavLink>

            <NavLink to={'/tasks/completed-tasks'} className={'link'}>
                {({isActive}) => (
                    <div className='link-block' style={{backgroundColor: isActive ? '#036EB4' : '', padding: '0px 20px;'}}>Выполненые
                        задачи</div>
                )}
            </NavLink>
        </div>
    );
};

export default HeaderMenu;