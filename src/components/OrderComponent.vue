<template>
  <div class="order">
    <h2 class="order__heading">Ваш заказ:</h2>

    <ul class="order__list">
      <li class="order__item">
        <span>Пункт выдачи</span>
        <span>
          Ульяновск,<br />
          Нариманова 42
        </span>
      </li>
    </ul>

    <p class="order__result"><strong>Цена:</strong> от 8 000 до 12 000 ₽</p>

    <button type="button" :disabled="btn.disabled" class="btn mw-100">{{ btn.text }}</button>
  </div>
</template>
<script>
export default {
	name: 'order-component',
	props: {
		order: {
			type: Object,
			require: true
		},
		btn: {
			type: Object,
			require: true
		}
	}
}
</script>
