export { default as Help } from './Help'
export { default as Preview } from './Preview'
export { default as NotFound } from './NotFound'
export { default as Page } from './Page'

//this index file is a way to globally export files in pages.
//instead of using: import Help from './pages/Help' on a page
//you can import pages like: import { Help, Preview, NotFound } from './pages'
