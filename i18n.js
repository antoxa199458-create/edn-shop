/* E.D.N site languages.
   Russian text lives in index.html itself (every translatable element has data-i18n="key");
   this file lists the languages and holds the Russian strings that scripts build (constructor, sizes, order form).
   Each other language is i18n/<code>.js: EDN_I18N.dict.<code> = { key: text }. A key it lacks falls back to Russian.
   Plurals: Russian and Belarusian take [one, few, many]; other languages a single "{n} …" pattern. */
window.EDN_I18N = {
  // label = the code on the button (country, as shoppers know it); html = the lang attribute
  langs: [
    { code: 'ru', label: 'RU', html: 'ru', name: 'Русский' },
    { code: 'en', label: 'EN', html: 'en', name: 'English' },
    { code: 'kk', label: 'KZ', html: 'kk', name: 'Қазақша' },
    { code: 'be', label: 'BY', html: 'be', name: 'Беларуская' },
    { code: 'uz', label: 'UZ', html: 'uz', name: 'Oʻzbekcha' },
    { code: 'ky', label: 'KG', html: 'ky', name: 'Кыргызча' },
    { code: 'tg', label: 'TJ', html: 'tg', name: 'Тоҷикӣ' },
    { code: 'hy', label: 'AM', html: 'hy', name: 'Հայերեն' },
    { code: 'az', label: 'AZ', html: 'az', name: 'Azərbaycanca' },
    { code: 'ro', label: 'MD', html: 'ro', name: 'Română' },
    { code: 'tk', label: 'TM', html: 'tk', name: 'Türkmençe' }
  ],
  dict: {
    ru: {
      reviews: ['{n} отзыв', '{n} отзыва', '{n} отзывов'],
      age: ['{n} год', '{n} года', '{n} лет'],
      'col.black': 'Чёрный', 'col.anthracite': 'Антрацит', 'col.mint': 'Ментол', 'col.pink': 'Розовый',
      'cz.hairL': 'Косы из пряжи', 'cz.dressL': 'Платье с пачкой', 'cz.shoesL': 'Туфли с блёстками',
      'cz.crown': 'Корона', 'cz.onHair': 'на волосах', 'cz.needHair': 'нужны волосы',
      'cz.earrings': 'Серьги', 'cz.always': 'всегда на кукле', 'cz.none': 'Без',
      'cz.noteCrown': 'Корона крепится к волосам — сначала наденьте косы.',
      'cz.noteCrownOff': 'Корона снята вместе с волосами.',
      'cz.buy': 'Купить лонгслив «{c}» на Ozon',
      'shop.oos': 'На Ozon этого размера в этом цвете сейчас нет',
      'del.cdek-pvz': 'СДЭК — пункт выдачи', 'del.cdek-courier': 'СДЭК — курьер', 'del.post': 'Почта России',
      'del.boxberry': 'Boxberry', 'del.yandex': 'Яндекс Доставка', 'del.5post': '5Post',
      'del.pvzN': 'в пункт выдачи', 'del.courierN': 'до двери', 'del.postN': 'в отделение, по России и СНГ',
      'pay.online': 'онлайн при оформлении заказа', 'ord.countryDef': 'Россия',
      'del.yandexN': 'пункт выдачи или курьер', 'del.5postN': 'постаматы и «Пятёрочка»',
      'ord.pvz': 'Адрес пункта выдачи', 'ord.sizeL': 'Размер', 'ord.qty': 'Кол-во', 'ord.remove': 'Убрать',
      'ord.item': 'Лонгслив E.D.N с куколкой', 'ord.summary': 'Ваш заказ', 'ord.pcs': 'Всего, шт.',
      'ord.err': 'Проверьте выделенные поля.', 'ord.sending': 'Отправляем…',
      'ord.okT': 'Спасибо! Заказ {n} принят', 'ord.okP': 'Менеджер свяжется с вами в течение дня, чтобы подтвердить состав, стоимость и доставку.',
      'ord.mailT': 'Заказ {n} готов к отправке', 'ord.mailP': 'Мы открыли письмо с заказом в вашей почте — отправьте его, и менеджер свяжется с вами.',
      'ord.pendT': 'Заказ {n} сформирован', 'ord.pendP': 'Приём заказов с сайта скоро заработает. Скопируйте заказ и отправьте нам в Instagram — или оформите покупку на Ozon или Wildberries.',
      'ord.copy': 'Скопировать заказ', 'ord.copied': 'Скопировано', 'ord.again': 'Новый заказ'
    }
  }
};
