import React, {FC} from 'react';
import {Form} from "react-router-dom";
import '../../style/draft.css'

interface Props {
    tasks: any
}

const DraftTasks: FC<Props> = ({tasks}) => {

    return (
        <>
            <h1>Черновик задач</h1>
            <div className={'mainDraftForm'}>
                <div className='headerDraftForm'>
                    <div className='titleDraft'>Наименование</div>
                    <div className='titleDraft'>Продукт</div>
                    <div className='titleDraft'>Маршрут</div>
                    <div className='titleDraft'>Тип задачи</div>
                    <div className='titleDraft'>Описание</div>
                    <div className='titleDraft'>Действия</div>
                </div>
                {tasks.map((item: any) => {
                    return (
                        <Form className={'draftFormContainer'} method="put">


                            <input className={'inputDraft'} name='title' defaultValue={item.title}></input>
                            <input className={'inputDraft'} name='product' defaultValue={item.product}></input>
                            <input className={'inputDraft'} name='route' defaultValue={item.route}></input>
                            <input className={'inputDraft'} name='delivery_status'
                                   defaultValue={item.delivery_status}></input>
                            <input className={'inputDraft'} name='description' defaultValue={item.description}></input>
                            <input className={'inputDraft'} style={{display: 'none'}} name='id'
                                   defaultValue={item.id}></input>

                            <button type={"submit"} name="intent" value="edit">Сохранить</button>
                            <button type={"submit"} name="intent" value="add">Отправить</button>
                        </Form>
                    )
                })}
            </div>
        </>
    );
};

export default DraftTasks;