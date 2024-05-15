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

> ####  Черновик для редактирования задачи с последующей отправкой 
> Каждое поле таблицы это скрытый `input` который появляется при нажатии на блок.
> 
>Так как `ant design компонента таблицы` не сочитается с `react-router-dom form` сверстал таблицу вручную чтобы была возможность управлять самому `action` так как нужно отлавливать события изменение или же отправки в приложение [Mobile Drive](https://github.com/Yasuoqp/Mobile-Drive-app). Вместе с `Form router-dom` на кнопке был слушатель события, который перехватывает `action` и выполнял ту или инную задачу.
> 
> - Кнопка Сохранить 
>   + Сохраняет изменения 
> - Кнопка Отрпавить 
>   + Отправляет задачу к текущим 
>   + Осуществляется `redirect` на страницу `current-tasks` 

### 3. Текущие и завершенные задачи `current-tasks` `completed-tasks `

> #### `current-tasks` Необходим для контроля и отслеживания текущего статуса выполнения задачи   
> #### `completed-tasks` Необходим для отслеживания завершенных задач   
> Они имеют общий компонент с таблицей но имеют разные `loader` для загрузки только нужных данных через `props` получают лишь пару изменений в наименнованиях столбцов и заменяется  ключи  `date на update_date` полях для вывода данных на странице `completed-task`, для того, чтобы отобразить последнюю мутацию в объекте,что будет значить дату завершенния задачи 

#### `current-tasks`
![alt](https://github.com/Yasuoqp/control-center/blob/main/readmeImg/current-tasks.png)

#### `completed-tasks`
![alt](https://github.com/Yasuoqp/control-center/blob/main/readmeImg/completed-tasks.png)