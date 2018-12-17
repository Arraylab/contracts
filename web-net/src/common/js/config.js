let url
if(process.env.NODE_ENV == 'development'){
  url = '/index.php'
}
if(process.env.NODE_ENV == 'production'){
  url = 'http://h5.zimuzu.io/index.php'
}
//export const HOST = 'http://h5.zimuzu.io/index.php'
export const ERR_OK = 200
export const domain = 'https://openapi.ananyun.net/'
export const HOST = url
