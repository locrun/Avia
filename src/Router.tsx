import { FC } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Avia } from './pages/Avia/Avia'
import { AviaInfo } from './pages/AviaInfo/AviaInfo'
import { NotFound } from './pages/NotFound/NotFound';

import { path } from './constants/path';


export const Router: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Avia />} />
        <Route path={path.info} element={<AviaInfo />} />
        <Route path={path.notfound} element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}
