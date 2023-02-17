const buttons = document.querySelectorAll("button");
const popup = document.querySelector(".reason__popup");
const close = document.querySelector(".reason__close");
const message = document.querySelector(".reason__message");

function showReason(reason) {
  popup.classList.add("active");
  message.innerHTML = reason;
}

console.log(buttons[0].id);

Array.from(buttons).forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "1":
        showReason(`№${e.target.id}. Потому что ты самая красивая!`);
        break;
      case "2":
        showReason(`№${e.target.id}. Потому что ты вкусно готовишь)`);
        break;
      case "3":
        showReason(`№${e.target.id}. Мне нравится когда мы шутим вместе`);
        break;
      case "4":
        showReason(`№${e.target.id}. Мы помогаем друг другу`);
        break;
      case "5":
        showReason(`№${e.target.id}. Я тебе не безразличен`);
        break;
      case "6":
        showReason(`№${e.target.id}. Я люблю когда ты за мной ухаживаешь`);
        break;
      case "7":
        showReason(`№${e.target.id}. Потому что ты защитишь меня от павуков`);
        break;
      case "8":
        showReason(`№${e.target.id}. Потому что я могу защитить тебя от змеек`);
        break;
      case "9":
        showReason(
          `№${e.target.id}. Потому что мы не пройдём мимо бездомного котика или собачки`
        );
        break;
      case "10":
        showReason(
          `№${e.target.id}. Потому что я люблю когда ты гладишь мне спинку`
        );
        break;
      case "11":
        showReason(`№${e.target.id}. И ножки...`);
        break;
      case "12":
        showReason(`№${e.target.id}. Я люблю когда ты улыбаешься :)`);
        break;
      case "13":
        showReason(`№${e.target.id}. У нас с тобой самые смешные стикеры`);
        break;
      case "14":
        showReason(
          `№${e.target.id}. Ты настолько сильная что можешь проходить хорроры одна`
        );
        break;
      case "15":
        showReason(`№${e.target.id}. Я обожаю наш ...xxx`);
        break;
      case "16":
        showReason(`№${e.target.id}. Кстати, может займёмся?)`);
        break;
      case "17":
        showReason(`№${e.target.id}. Мы всегда угараем с мемов`);
        break;
      case "18":
        showReason(
          `№${e.target.id}. У тебя классная фигура, хоть ты так и не думаешь`
        );
        break;
      case "19":
        showReason(`№${e.target.id}. Ради меня ты готова пробовать новое`);
        break;
      case "20":
        showReason(`№${e.target.id}. Мы оба хотим собаку`);
        break;
      case "21":
        showReason(`№${e.target.id}. У тебя сексуальное бельё`);
        break;
      case "22":
        showReason(`№${e.target.id}. Ты всегда меня успокоишь`);
        break;
      case "23":
        showReason(`№${e.target.id}. Но иногда сама и доведёшь! ;)`);
        break;
      case "24":
        showReason(`№${e.target.id}. Ты очень чувственная`);
        break;
      case "24":
        showReason(`№${e.target.id}. Ты очень нежная`);
        break;
      case "25":
        showReason(`№${e.target.id}. Ты очень заботливая`);
        break;
      case "26":
        showReason(`№${e.target.id}. Ты хозяйка`);
        break;
      case "27":
        showReason(`№${e.target.id}. Мы любим принимать ванну вместе`);
        break;
      case "28":
        showReason(`№${e.target.id}. Тебе нравится когда я дурачусь`);
        break;
      case "29":
        showReason(`№${e.target.id}. Ты любишь обнимашки`);
        break;
      case "30":
        showReason(`№${e.target.id}. Ты терпишь мои капризы`);
        break;
      case "31":
        showReason(`№${e.target.id}. Всегда поможешь если беда`);
        break;
      case "32":
        showReason(
          `№${e.target.id}. Принимаешь свои ошибки и хочешь стать лучше`
        );
        break;
      case "33":
        showReason(`№${e.target.id}. Помогаешь мне стать лучше`);
      case "34":
        showReason(`№${e.target.id}. Всем нравятся твои вязаные игрушки`);
        break;
      case "35":
        showReason(`№${e.target.id}. Я горжусь что я твой единственный`);
        break;
      case "36":
        showReason(`№${e.target.id}. Ты любишь чипсы и биги боны`);
        break;
      case "37":
        showReason(`№${e.target.id}. И морозена`);
        break;
      case "38":
        showReason(
          `№${e.target.id}. Если я очень не хочу делать что-то важное, то ты сделаешь это за меня`
        );
        break;
      case "39":
        showReason(`№${e.target.id}. Ты меня слушаешься, но не всегда)`);
        break;
      case "40":
        showReason(`№${e.target.id}. У тебя прекрасные волосы`);
        break;
      case "41":
        showReason(`№${e.target.id}. Ты мой лучший друг`);
        break;
      case "42":
        showReason(`№${e.target.id}. Каждый подарок от тебя - особенный`);
        break;
      case "43":
        showReason(`№${e.target.id}. Ты понимаешь меня с полуслова`);
        break;
      case "44":
        showReason(`№${e.target.id}. Ты любишь романтику`);
        break;
      case "45":
        showReason(`№${e.target.id}. И любишь попугаться от разных скримеров`);
        break;
      case "46":
        showReason(`№${e.target.id}. Ты меня вдохновляешь`);
        break;
      case "47":
        showReason(`№${e.target.id}. Ты даришь мне счастье`);
        break;
      case "48":
        showReason(`№${e.target.id}. Ты справедливая`);
        break;
      case "49":
        showReason(`№${e.target.id}. Ты делаешь наш дом уютнее`);
        break;
      case "50":
        showReason(`№${e.target.id}. "Не почему, а вопреки"`);
        break;
      default:
        break;
    }
  });
});

close.addEventListener("click", () => {
  popup.classList.remove("active");
});
