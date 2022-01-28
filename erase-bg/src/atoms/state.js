import {atom } from 'recoil'

export const fileState = atom({
    key: 'fileState',
    default: null
})

export const flagState = atom({
    key: 'flagState',
    default: false
})