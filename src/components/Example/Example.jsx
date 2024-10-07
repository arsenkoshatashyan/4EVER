import "./Example.scss";

import { useEffect, useState } from "react";
export default function Example() {
  const targetDate = new Date("2024-12-18T11:00:00").getTime();
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="Example">
      <div className="Example__content">
        <div className="Example__content-title">
          <pre><img src="./images/lari.png" alt="" /> 100 </pre>
          <h2>АШОТ & ЛИЛИТ</h2>
          <h1>
            А <span>|</span> Л
          </h1>
          <p>18 Декабря 2024</p>
        </div>
        <div className="Example__content-about">
          <h2>дорогие гости!</h2>
          <p>
            В нашей жизни предстоят счастливые перемены! Мы хотим, чтобы в этот
            день рядом с нами были самие близкие и дорогие для нас люди. будем
            рады разделить с вами чудесный праздник. <br /> <br /> С любовью,
            Ашот и Лилит
          </p>
        </div>
        <div className="Example__content-clock">
          <h3>до свадбы осталось</h3>
          {timeLeft.days !== undefined ? (
            <div>
              <p>
                {timeLeft.days} <br /> дней
              </p>
              <p>
                {timeLeft.hours} <br /> часов
              </p>
              <p>
                {timeLeft.minutes} <br />
                минут
              </p>
              <p>
                {timeLeft.seconds} <br /> секунд
              </p>
            </div>
          ) : (
            <div>
              <p>O</p>
              <p>O</p>
              <p>O</p>
              <p>O</p>
            </div>
          )}
        </div>
        <div className="Example__content-dayProgramm">
          <h2>Программа дня</h2>
          <div className="Example__content-dayProgramm-one">
            <h2>15:00</h2>
            <img src="./images/wed.png" alt="wedding" />
            <div className="Example__content-dayProgramm-one-title">
              <h2>Венчание</h2>
              <p>
                Церковь Сурб Хач <br /> г. Ахалкалаки, ул. Тавлисуплеба, 55.
              </p>
              <p>Вы станете свидителями новой семьи - нашей семьи</p>
            </div>
          </div>
          <div className="Example__content-dayProgramm-two">
            <h2>17:30</h2>
            <img src="./images/placeholder.png" alt="placeholder" />
            <div className="Example__content-dayProgramm-two-title">
              <h2>Сбор гостей</h2>
              <p>Банкетный зал "Колизей" г. Ахалкалаки, ул. Свободы 87/3</p>
              <p>Просим взять собой хорошее настроение и свои улыбки</p>
            </div>
          </div>
          <div className="Example__content-dayProgramm-three">
            <h2>18:00</h2>
            <img src="./images/banquet.png" alt="eatbanwuet" />
            <div className="Example__content-dayProgramm-three-title">
              <h2>Начало банкета</h2>
              <p>Время вкусной еды, танцев и развлечений</p>
            </div>
          </div>
        </div>
        <div className="Example__content-location">
          <h2>Локация</h2>
          <p>Наш праздник пройдет в банкетном зале "Колизей".</p>
          <p>
            Он находится по адресу <br /> г. Ахалкалаки, ул. Свободы 87/3
          </p>
          <img src="./images/kolizey.jpg" alt="kolizey" />
          <h2>как добраться?</h2>
          <p>
            Мы подготовили для вас карту, чтобы вы точно добрались и порадовали
            нас своим присутствием.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.06822813077457!2d43.48723375922515!3d41.40566870578986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4042f9042f11cacb%3A0x705b8a10482266a6!2z4YOi4YOQ4YOl4YOh4YOY4YOhIOGDkuGDkOGDm-GDneGDq-GDkOGDruGDlOGDkeGDmOGDoSDhg6Hhg5Thg6Dhg5Xhg5jhg6Hhg5ggIk1heGltIg!5e0!3m2!1sru!2sam!4v1727965003566!5m2!1sru!2sam"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </div>
        <div className="Example__content-contact">
          <h2>Пожалуйста, подтвердите своё присутствие на мероприятии</h2>
          <p>Ожидаем ваш ответ до 08.12.2024</p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="db261ca8-6f22-4a89-b93c-18f36a6ba980"
            ></input>
            <input
              type="text"
              placeholder="Имя Фамилия"
              name="Имя Фамилия"
              required
            />
            <input type="number" placeholder="Телефон" name="Телефон" required />
            <select name="Кол-во гостей" required>
              <option value="Укажите кол-во гостей" selected disabled>
                Укажите кол-во гостей
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="Мы не сможем прийти">Мы не сможем прийти</option>
            </select>
            <button>Отправить</button>
          </form>

          <h4>Мы будем счастливы видеть вас!</h4>
        </div>
      </div>
    </div>
  );
}
