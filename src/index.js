import React from 'react';
import TheNav from 'components/TheNav';
import ReactDOM from 'react-dom/client';
import 'assets/scss/main.scss';
import 'assets/scss/templateStyle/main.scss';
import 'assets/css/style.css';
import 'assets/css/responsive.css';
import 'assets/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';
import Router from 'Router';
import { BrowserRouter } from 'react-router-dom';
import 'Translation/i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RecoilRoot>
        <BrowserRouter>
            <TheNav />
            <Router />
        </BrowserRouter>
    </RecoilRoot>
);

