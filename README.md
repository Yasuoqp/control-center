# Отдельный сервис админ панели Control Center

### Создан для контроля [Mobile Drive](https://github.com/Yasuoqp/Mobile-Drive-app)

## Стек Технологий

* Языки программирования :
    + JavaScript
    + Python
* СУБД :
    + PostgreSQL
* Фрейморки :
    + React
    + Ant Design
    + Django Rest Framework
* Инструменты для разработки :
    + Git Hub
    + Postman
    + Pg Admin
* Библиотеки :
    + `React router dom` v6"action, loader, form"
    + `TanStack`
    

`Примечание : без подключенной БД будет работать только страница авторизации`


## Работа приложения

### 1. Создание задачи `creat-task`
![alt](https://github.com/Yasuoqp/control-center/blob/main/readmeImg/creat-task.png)

> #### Формуруется задача для конрентого водителя 
> 
> - При нажатии на кнопку отравить 
>   + Форма отрпавляется на сервер 
>   + Указанный пользователь в форме получит заказ в приложении [Mobile Drive](https://github.com/Yasuoqp/Mobile-Drive-app)
>   + `action` при успешной отправки осуществляет  `redirect` на страницу  `current-task`
> - Если поставить галочку на черновик 
>   +  Форма отправляется с ключом ` draft: true` 
>   + Затем попадая во вкладку черновики, в данный момент водитель заказа не получает, поскольку мы решили отправить форму на проверку перед получением заказа водителем
>   + `action` при успешной отправки осуществляет  `redirect` на страницу  `draft-task`

### 2.Черновики `draft-task` 
![alt](https://github.com/Yasuoqp/control-center/blob/main/readmeImg/draft-tasks.png)