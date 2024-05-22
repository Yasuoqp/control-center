import React from 'react';
import HeaderMenu from "./header/HeaderMenu";
import {Outlet} from "react-router-dom";
import {Layout} from "antd";

const LayoutApp = () => {
    const {Header, Content, Footer} = Layout;

    return (
        <Layout style={{height: "100%"}}>
            <Header className='custom_header'>

                <HeaderMenu/>

            </Header>

            <Content style={{marginTop:'8.5em'}}>
                <div style={{margin:"auto",height:'530px', maxWidth:'1200px',background: "white",borderRadius:'10px',boxShadow:" 15px 15px 4px rgba(0,0,0,0.15)"}}>
                    <Outlet/>
                </div>
            </Content>

            <Footer style={{textAlign: 'center'}}>
                Kam Parts ©{new Date().getFullYear()} Created by dev UED
            </Footer>
        </Layout>
    );
};

export default LayoutApp;