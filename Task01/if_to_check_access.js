let user = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
};

if (user.isAdmin == true && user.age >= 18 && user.age <= 35 ||
  user.age >= 18 && user.age <= 35 && user.paid == true &&
  user.blocked == false && user.badUsername == false) {
  alert('Доступ разрешен')
} else {
  alert('Доступ запрещен!')
}

// ТЕРНАРНЫЙ ОПЕРАТОР

user.isAdmin == true && user.age >= 18 && user.age <= 35 ||
user.age >= 18 && user.age <= 35 && user.paid == true &&
user.blocked == false && user.badUsername == false ? alert('Доступ разрешен') : alert('Доступ запрещен!')
