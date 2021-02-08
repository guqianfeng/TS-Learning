/**
 * 类中使用泛型
 */

/**
 * 初始版本，传入字符串数组，作为技能
 * 第二版，qwer对应1,2,3,4技能，那可以接受数字数组 使用联合类型
 * 第三版，使用泛型
 * 第四版，泛型也可以使用继承，比如只能接受字符串或者数字 <T extends string | number>
 * 第五版，泛型继承接口
 */

interface Skill {
  name: string,
}

class DesignHero<T extends Skill> {
  constructor(private skills: T[]){}
  selectSkill(index: number): string {
    return this.skills[index].name;
  }
}



// let hero1 = new DesignHero<string>(['q', 'w', 'e', 'r'])
// console.log(hero1.selectSkill(1));
// let hero2 = new DesignHero<number>([1, 2, 3, 4])
// console.log(hero2.selectSkill(1));

let finalHero = new DesignHero([
  {
    name: '疾风步'
  },
  {
    name: '分身'
  },
  {
    name: '致命一击'
  },
  {
    name: '剑刃风暴'
  }
])
console.log(finalHero.selectSkill(3));