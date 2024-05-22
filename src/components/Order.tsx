import React, {FC, useState} from 'react';
import '../style/form.css'
import {Checkbox, CheckboxProps, DatePicker, DatePickerProps, Select} from "antd";
import {Form} from 'react-router-dom';
import type {Dayjs} from "dayjs";


const Order: FC = () => {

    const [drive, setDriver] = useState<{ value: string, label: string }>({value: '', label: ''})
    const [deliveryStatus, setDeliveryStatus] = useState<{ value: string, label: string }>({value: '', label: ''})
    const [date, setDate] = useState<string | string[]>('')
    const [draft, setDraft] = useState<string>('false')

    function onChangeDriver(value: { value: string; label: string }) {
        setDriver(value)
    }

    function onChangeDeliveryStatus(value: { value: string; label: string }) {
        setDeliveryStatus(value)
    }


    const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
        setDate(dateString)

    }
    const onChangeDraft: CheckboxProps['onChange'] = (e) => {
        setDraft(`${e.target.checked}`);
    }



    return (
        <>
            <h1>Создание задачи</h1>
            <Form method="post" className={'main'}>
                <div className={'form'}>
                    <label>Контроагент</label>
                    <input name='title' type="text"/>

                    <label>Груз</label>
                    <input name='product' type="text"/>

                    <label>Куда доставить</label>
                    <input name='route' type="text"/>

                    <label>Примечания к доставке</label>
                    <input name='description' type="text"/>

                    <input style={{display: 'none'}} name='isActive' defaultValue={'false'} type="text"/>
                    <input style={{display: 'none'}} name='urgency' defaultValue={'false'} type="text"/>
                    <input style={{display: 'none'}} name='owner' defaultValue={drive.value} type="text"/>
                    <input style={{display: 'none'}} name='deadline' defaultValue={date} type="text"/>
                    <input style={{display: 'none'}} name='delivery_status' defaultValue={deliveryStatus.label}
                           type="text"/>
                    <input style={{display: 'none'}} name='driver' defaultValue={drive.label} type="text"/>
                    <input style={{display: 'none'}} name='status' defaultValue={'Ожидание'} type="text"/>
                    <input style={{display: 'none'}} name='draft' value={draft} type="text"/>


                </div>

                <div className={'select-block'}>
                    <label>Выберите Водителя</label>
                    <Select
                        labelInValue
                        onChange={onChangeDriver}
                        size={"large"}
                        style={{width: 400, height: 55, fontSize: '20px',}}
                        placeholder={'Водитель'}
                        options={[
                            {value: '3', label: 'Марат'},
                            {value: '4', label: 'Андрей'},
                        ]}
                    />

                    <label style={{marginTop: "20px"}}>Вариант поездки</label>
                    <Select
                        labelInValue
                        onChange={onChangeDeliveryStatus}
                        size={"large"}
                        style={{height: 55}}
                        placeholder={'Тип задачи'}
                        options={[
                            {value: '1', label: 'Забор груза'},
                            {value: '2', label: 'Доставка груза'},
                        ]}
                    />

                    <label>Срок выполнения задачи</label>
                    <DatePicker style={{height: 55}}
                                onChange={onChange}
                                size={"large"}
                                format={'DD.MM.YYYY HH:mm:ss'}
                                placeholder={'Выберите Дату'}
                                showTime/>

                    <Checkbox style={{marginTop: '2em'}} defaultChecked={false} onChange={onChangeDraft}>В черновик</Checkbox>

                    <button className='btn' type="submit">Отправить</button>
                </div>
            </Form>

        </>
    );
}


export default Order;