import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="com parametros" color="#5A6A62">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"></ComParametro>
            </Card>
            <Card titulo="com filhos" color="#28ABE3">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Pedro</li>
                </ul>
            </ComFilhos>
            </Card>
            <Card titulo="Exercício x" color="#DB3340">
                Conteúdo
            </Card>
            <Card titulo="Exercício x" color="#5BB12F">
            <Primeiro></Primeiro>
            </Card>
            <Card titulo="Lista" color="#FA6900">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="Condicional" color="#B9006E">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="Condicional" color="#1352A2">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="Comunicação Direta" color="#F05B47">
                <Pai></Pai>
            </Card>
            <Card titulo="Comunicação Indireta" color="#8C6954">
                <Super></Super>
            </Card>
            <Card titulo="Input" color="#FDF200">
                <Input></Input>
            </Card>
            <Card titulo="Contador" color="#588C73">
                <Contador step={10}></Contador>
            </Card>
            <Card titulo="Mega" color="#007034">
                <Mega qtdNumbers={6}></Mega>
            </Card>
        </div>
</div>
);