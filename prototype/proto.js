// const make_me = function(_name) {
//     console.log('меня запустили');
//     this.name = _name;
//     this.show_name = function() {
//         console.log(this.name);
//     }
// }
// /*
// Видя ключевое слово function, интерпретатор проверяет код справа от него, и т.к. все ок - создает новый объект в памяти, который одновременно является нашей функцией. Затем, автоматически (без участия программиста) для этой функции создается свойство prototype, ссылающееся на пустой объект. Если бы мы это делали вручную, это выглядело бы как make_me.prototype=new Object();

// Затем, данному объекту (на который указывает свойство prototype) также автоматически добавляется свойство constructor, указывающее обратно на функцию. Получается такая вот циклическая ссылка.

// Теперь этот объект, который можно описать как {constructor: ...здесь ссылка на фунцию...} - и есть прототип функции.
// */

// console.log(typeof make_me.prototype); //Object - действительно, объект
// console.log(typeof make_me.prototype.constructor); //Function - это наша функция
// console.log(make_me.prototype.constructor === make_me); //true

// make_me.prototype.set_name = function(_name) { this.name = _name; } //Добавляем в прототип функции make_me новый метод

// child = new make_me('Вася'); //меня запустили
// /* Теперь помимо всего того, что описано в предыдущем примере, дополнительно в объекте child создается скрытое свойство [[Prototype]], которое указывает на тот же объект, что и make_me.prototype. Т.к. свойство скрыто, мы не можем ни просмотреть его значение, ни изменить его - однако оно играет важную роль в дальнейшей работе */

// console.log(child.name); //Вася
// child.show_name(); //Вася

// child.set_name('Коля');
// /* Сначала, интерпретатор ищет метод set_name в объекте child. Так как его там нет, он продолжает поиск в свойстве child.[[Prototype]], находит его там и запускает. */
// child.show_name(); //Коля - теперь Васю зовут Коля :)

// make_me.prototype.show_name2 = function() {
//     console.log('Привет, ' + this.name);
// } //Т.к. прототип - это обычный объект, мы точно также можем его менять на лету

// child2 = new make_me('Петя');
// child2.show_name2(); //Привет, Петя
// child.show_name2(); //Привет, Коля - изменения в прототипе влияют не только на вновь созданные объекты, но и на все старые

// child2.show_name2 = function() { console.log('Не буду говорить свое имя'); } //Мы по прежнему можем изменить сам объект, при этом новый метод show_name2 в данном объекте (и только в нем) как бы "затрет" старый метод из прототипа
// child2.show_name2(); //Не буду говорить свое имя - т.к. у нас теперь есть собственный метод show_name2, то он и вызывается, и поиск в прототипе не происходит

// child.show_name2(); //Привет, Коля - здесь все по прежнему

// make_me.prototype = { prop: 'hello' } //Попробуем пересоздать прототип заново

// console.log(child.prop); //undefined
// child.show_name2(); //Привет, Коля
// /* Если вспомнить, что такое работа по ссылке, то все понятно. Пересоздание прототипа рвет связь, и теперь свойство [[Prototype]] у объектов child и child2 указывают на один объект (который раньше был прототипом функции make_me), а свойство make_me.prototype - на другой объект, который является новым прототипом функции make_me */

// child3 = new make_me('Олег');
// console.log(child3.prop); //hello - что и следовало ожидать
// child3.set_name('eee');

//Это конструктор человека
const man = function() {
    this.live = function() { console.log('Я живу'); } //Человек умеет жить
    this.walk = function() { console.log('Я иду'); } //Человек умеет ходить
}

//Это конструктор поэта
const poet = function() {
    this.kill = function() { console.log('Поэт убил человека'); } //Поэт может убить человека
    this.live = function() { console.log('Я мертв'); } //От этого человек умрет
}

vladimir = new man(); //Владимир - человек
vladimir.live(); //Я живу - он жив
vladimir.walk(); //Я иду - он ходит

console.log(vladimir);

poet.call(vladimir); //Выполняем конструктор poet для объекта vladimir
vladimir.kill(); //Поэт убил человека
vladimir.live(); //Я мертв

console.log(vladimir);

//А теперь фокус
man.call(vladimir);
vladimir.live(); //Я живу

console.log(vladimir);