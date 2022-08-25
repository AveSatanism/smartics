<template>
  <div class="mb-[112px] flex justify-center">
    <div class="flex flex-col w-[1160px] site_color_3_background rounded-[15px]">
      <div class="flex flex-col items-center min-h-[290px] pt-[62px] px-[99px]">
        <form class="mb-[56px] flex gap-x-[102px]">
          <div class="flex flex-col items-center">
            <p class="mb-[17px] text_8">Обслуживание компьютеров</p>
            <p class="mb-[5px] text_7">Количество</p>
            <div class="flex gap-x-[8.5px]">
              <button :class="{ minCount: countComputers === 0 }" type="button" @click="countComputers--, calculationPrice()"><img class="h-[23px]" src="@/assets/icon/decrementCount_icon.svg" width="23" height="23"></button>
              <div class="flex justify-center items-center text_8 bg-white rounded-[8px] w-[40px] h-[27px]">
                <p> {{ countComputers }} </p>
              </div>
              <button :class="{ maxCountComputers: countComputers === 20 }" type="button" @click="countComputers++, calculationPrice()"><img class="h-[23px]" src="@/assets/icon/incrementCount_icon.svg" width="23" height="23"></button>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <p class="mb-[17px] text_8">Обслуживание серверов</p>
            <p class="mb-[5px] text_7">Количество</p>
            <div class="flex gap-x-[8.5px]">
              <button :class="{ minCount: countServers === 0 }" type="button" @click="countServers--, calculationPrice()"><img class="h-[23px]" src="@/assets/icon/decrementCount_icon.svg" width="23" height="23"></button>
              <div class="flex justify-center items-center text_8 bg-white rounded-[8px] w-[40px] h-[27px]">
                <p> {{ countServers }} </p>
              </div>
              <button :class="{ maxCountServers: countServers === 2 }" type="button" @click="countServers++, calculationPrice()"><img class="h-[23px]" src="@/assets/icon/incrementCount_icon.svg" width="23" height="23"></button>
            </div>
          </div>
          <div>
            <p class="mb-[17px] text_8 text-center">Время предоставление услуги</p>
          <fieldset class="flex gap-x-[15px] calculator_button input_display text_8">
            <div>
              <p class="mb-[8px] text-center text_10">рабочее время</p>
              <input type="radio" name="answer" id="answer1" @click="radios='true', calculationPrice()"><label for="answer1">ПН-вск</label>
            </div>
            <div>
              <p class="mb-[8px] text-center text_10">рабочее время</p>
              <input type="radio" name="answer" id="answer2" @click="radios='false', calculationPrice()"><label for="answer2">ПН-пт</label>
            </div>
            <div>
              <p class="mb-[20.6px]"></p>
              <input type="checkbox" id="answer3" v-model="checked" @click="allTime=!allTime, calculationPrice()"><label for="answer3">24/7</label>
            </div>
          </fieldset>
          </div>
        </form>
        <div class="flex gap-x-[34px]">
        <div class="py-[10px] px-[20px] flex justify-between items-center text_button w-[322px] h-[40px] site_color_7_background rounded-[8px]">
          <p>Итого:</p>
          <p class="site_color_4">{{ priceSum }} ₽ в месяц</p>
        </div>
          <UIButton variant="orange1" @click="showCommunicationFormDialog()">связаться с нами</UIButton>
        </div>
      </div>
      <div :class="{ special_offer: countServers === 2 || countComputers === 20 }" class="hidden min-h-[289px] flex justify-center items-center gap-x-[94px] site_color_2_background">
        <form class="flex flex-col items-center gap-y-[16px] site_color_1" netlify>
          <p class="mb-[27px] text_1 text-center site_color_7">У вас более 20 компьютеров или 2 серверов? <br>Заполните форму и мы свяжемся с Вами</p>
          <div class="calculator_form_input flex justify-center items-center">
            <p class="calculator_form_placeholder text_6 absolute site_color_5">Контактный телефон</p>
            <input class="w-[426px] h-[35px] p-[8px] rounded-[10px] text_10" type="tel" name="tel" required>
          </div>
          <UIButton variant="personalOffer">Получить персональное предложение</UIButton> 
        </form>
        <img class="self-end" src="@/assets/pageContentImage/IT-outsoucing_calculator_image.svg" width="384" height="258" alt="IT-outsoucing_calculator_image">  
      </div>
      <div class="h-[394px] grid grid-cols-3 min-h-[394px] px-[218px] pt-[59px] pb-[83px]">
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Обслуживание стандартного офисного ПО', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Обслуживание стандартного офисного ПО</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Настройка и мониторинг сетевого оборудования', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Настройка и мониторинг сетевого оборудования</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'IT - инструменты для службы внутренней безопасности', 
          description: 'Безусловно, сплочённость команды профессионалов предопределяет высокую востребованность поэтапного и последовательного развития общества.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">IT - инструменты для службы внутренней безопасности</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Поддержка мобильных рабочих мест', 
          description: 'В целом, конечно, базовый вектор развития требует определения и уточнения своевременного выполнения сверхзадачи. Имеется спорная точка зрения, гласящая примерно следующее: интерактивные прототипы и по сей день остаются уделом либералов, которые жаждут быть ограничены исключительно образом мышления.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Поддержка мобильных рабочих мест</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Поддержка специфических серверных ПО', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Поддержка специфических серверных ПО</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Поддержка телефонии', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Поддержка телефонии</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'обслуживание систем клиент банк', 
          description: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что акционеры крупнейших компаний представлены в исключительно положительном свете. А ещё базовые сценарии поведения пользователей представлены в исключительно положительном свете.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Обслуживание систем клиент банк</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Персональная настройка системы мониторинга состояния (Zabbix)', 
          description: 'Принимая во внимание показатели успешности, дальнейшее развитие различных форм деятельности в значительной степени обусловливает важность экспериментов, поражающих по своей масштабности и грандиозности. Господа, граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для модели развития.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Персональная настройка системы мониторинга состояния (Zabbix)</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Управление заупками', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Управление заупками</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Резервное копирование информации', 
          description: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что акционеры крупнейших компаний представлены в исключительно положительном свете.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Резервное копирование информации</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'По желанию клиента - настройка оповещения об инцидентах в Telergam', 
          description: 'Лишь элементы политического процесса обнародованы. Банальные, но неопровержимые выводы, а также явные признаки победы институционализации, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">По желанию клиента - настройка оповещения об инцидентах в Telergam</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Удалённый доступ к рабочему столу', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Удалённый доступ к рабочему столу</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Ввод в эксплуатацию новых ПК', 
          description: 'В своём стремлении улучшить пользовательский опыт мы упускаем, что акционеры крупнейших компаний представлены в исключительно положительном свете.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Ввод в эксплуатацию новых ПК</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'АТС', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">АТС</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Консультация пользователей', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Консультация пользователей</p>
        </div>
        <div class="flex items-center gap-x-[6px]">
          <button @click="showDescriptionModalDialog(
          {header: 'Периферия', 
          description: 'Однозначно, сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть объективно рассмотрены соответствующими инстанциями.'})">
          <img class="h-[13.09px]" src="@/assets/icon/DescriptionButton_icon.svg" width="12" height="13.09"></button>
          <p class="text_9 w-[182px]">Периферия</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionModal from '@/components/DescriptionModal.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import UIButton from './UI/UIButton.vue'
import { createPromiseDialog } from "vue-promise-dialogs";

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);
const DescriptionModalDialog = createPromiseDialog(DescriptionModal);

export default {
  components: {
    UIButton,
  },
  data() {
    return {
      countComputers: 0,
      countServers: 0,
      priceSum: 0,
      radios: 'false',
      allTime: false
    }
  },
  methods: {
    calculationPrice() {
      this.priceSum = this.countComputers * 1500 + this.countServers * 5000
      if (this.radios === 'true') {
        this.priceSum *= 1.2
      }
      if (this.allTime) {
        this.priceSum *= 2
      }
    },
    showDescriptionModalDialog(params) {
      DescriptionModalDialog(params);
    },
    showCommunicationFormDialog(params) {
      CommunicationFormDialog(params);
    },
  },
}
</script>

<style>
.calculator_form_input:focus-within .calculator_form_placeholder{
  display: none;
}
.calculator_button label {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 109px !important;
  height: 27px !important;
  background-color: var(--color-7);
}
.calculator_button label:hover {
  color: var(--color-7);
  background-color: var(--color-1);
}
.calculator_button div input:checked + label {
  color: var(--color-7);
  background-color: var(--color-4);
}
.input_display input{
  display: none;
}
.minCount, .maxCountComputers, .maxCountServers {
  pointer-events: none;
  filter: grayscale(0.6);
}
.special_offer {
  display: flex;
}
</style>