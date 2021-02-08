/**
 * 初识接口
 */

interface Boy {
  name: string,
  age?: number,
  hobby?: string
}

let boy: Boy = {
  name: 'gqf',
  age: 3,
  hobby: 'play'
}

type Man = string //type可以声明 基本类型 https://www.cnblogs.com/mengff/p/12936795.html

function getBoyDesc(boy: Boy):void {
  console.log(boy.name, boy.age, boy.hobby)
}

getBoyDesc(boy)