import React, {FC} from 'react';
import {Table} from "antd";
import type {TableColumnsType} from 'antd';
import {ITask} from "../../models/ITask";



interface Props {
    title: string
    tasks: ITask[]
    date: string
    updateDate?: string

}

interface DataType {
    date: string
    title: string
    delivery_status: string
    product: string
    description: string
    driver: string
}



const TableTasks: FC<Props> = props => {
    const {title,tasks,date,updateDate} = props

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Контроагент',
            dataIndex: 'title',
        },
        {
            title: 'Продукт',
            dataIndex: 'product',
        },
        {
            title: 'Адрес доставки',
            dataIndex: 'route',
            width:'15%'
        },
        {
            title: 'Тип задачи',
            dataIndex: 'delivery_status',
        },
        {
            title: 'Исполнитель',
            dataIndex: 'driver',
        },
        {
            title: 'Активность заказа',
            dataIndex: 'status',
        },
        {
            title: `${date}`,
            dataIndex:  updateDate || 'date',
        },
    ];


    return (
        <>
            <h1>{title}</h1>
            <Table columns={columns} dataSource={tasks}  size="large"/>
        </>
    );
};

export default TableTasks;