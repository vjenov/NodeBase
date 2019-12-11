function Animal(name){this._name = name}//{this.name = name,this.name2 = name2}
function Human(){Animal.apply(this, arguments)}
//this는 animal을 가리킴 human에프로토타입을 가리킴, argument는 this._name = name를 가라킨다 아무리 위쪽에 늘어나도 (this, arguments)는 안바뀐다
function SuperHero(){Human.apply(this, arguments)}