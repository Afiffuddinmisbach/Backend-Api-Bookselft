const  {addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler} = require('./handler')

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: ()=>{
            return 'ini adalah halaman home'
        }
    },
    {
        method: '*',
        path: '/',
        handler: ()=>{
            return 'Halaman ini tidak dapak diakses dengan method ini !!!.'
        }
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
        options: {
          cors: {
           origin: ['*'],
      },
    },
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
        options: {
            cors: {
              origin: ['*'],
            },
          },
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
        options: {
          cors: {
            origin: ['*'],
          },
        },
      },
      {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
        options: {
          cors: {
            origin: ['*'],
          },
        },
      },
      {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
        options: {
          cors: {
            origin: ['*'],
          },
        },
      },
]

module.exports = routes