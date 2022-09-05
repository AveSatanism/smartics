<template>
  <div id="IT-outsourcing">
    <div class="site_color_1">
      <div class="flex flex-wrap mb-[37px] gap-x-[28.5px] justify-center">
        <div class="mt-[51px] max-w-[552px] flex flex-col gap-[26px]">
          <h1 class="text-h1">бывший админ<br> уронил сеть?<br> ПОШИФРОВАЛО?<br> “Я НАЖАЛА И ВСЁ<br> ИСЧЕЗЛО”?</h1>
          <p class="text_1">Бывает, но нас сложно удивить. 
            <br>Группа компаний СМАРТИКС на протяжении 15 лет
            <br>осуществляет техническую поддержку компаний
            <br> самых разных отраслевых направлений</p>
          <UIButton variant="orange2" @click="showCommunicationFormDialog()">Хочу!</UIButton>
        </div>
        <img src="@/assets/pageContentImage/IT-outsoucing_image.svg" width="532" height="607" alt="IT-outsoucing_image">
      </div>
      <div class="max-w-[1160px] mb-[50px] mx-auto flex flex-col items-center">
        <h2 class="mb-[25px] text-h2">Наши преимущества</h2>
        <div class="it_outsourcing_advantages mb-[61px] px-[30px] site_color_7_background flex justify-center gap-x-[12px] max-w-[1159px] min-h-[257px]">
          <div class="mt-[62.5px] flex flex-col items-center gap-y-[10px] text-center  w-[284px]">
            <img src="@/assets/icon/time_reverce_outsourcing_icon.svg" width="57" height="57" alt="time_reverce_outsourcing_icon">
            <p class="text_5">Работаем круглосуточно</p>
            <p class="text_7">Готовы взять на себя решение непредвиденных задач 24/7</p>
          </div>
          <div class="mt-[53px] flex flex-col items-center gap-y-[10px] text-center w-[284px]">
            <img src="@/assets/icon/clock_outsourcing_icon.svg" width="57" height="65" alt="clock_outsourcing_icon">
            <p class="text_5">88%</p>
            <p class="text_7">Задач решаются сразу</p>
          </div>
          <div class="mt-[62px] flex flex-col items-center gap-y-[10px] text-center w-[284px]">
            <img src="@/assets/icon/rocket_outsourcing_icon.svg" width="62" height="61" alt="rocket_outsourcing_icon">
            <p class="text_5">Квалификация</p>
            <p class="text_7">Наши специалисты имеют большой опыт, компетенции и необходимые допуски для работ</p>
          </div>
          <div class="mt-[57px] flex flex-col items-center gap-y-[10px] text-center w-[284px]">
            <img src="@/assets/icon/star_outsourcing_icon.svg" width="63" height="61" alt="star_outsourcing_icon">
            <p class="text_5">VIP</p>
            <p class="text_7">Все наши клиенты одинаково важны для нас</p>
          </div>
        </div>
      </div>
      <div class="">
        <p class="mb-[24px] text-center text_out">Калькулятор услуг</p>
        <h3 class="mb-[29px] text-h3 text-center">Все просто!<br> Выберите количество серверов и компьютеров + ваш рабочий график. <br><br>А все остальное уже включено в стоимость.</h3>
        <PriceCalculator />
      </div>
    </div>
  </div>
</template>
<script>
import UIButton from '../components/UI/UIButton.vue'
import PriceCalculator from '../components/PriceCalculator.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import { createPromiseDialog } from "vue-promise-dialogs";

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    UIButton,
    PriceCalculator,
  },
  methods: {
    showCommunicationFormDialog(params) {
      CommunicationFormDialog(params);
    },
  },
}
</script>
<style>
.it_outsourcing_advantages{
  border: 2px solid var(--color-3);
  box-shadow: 0px 4px 4px rgba(221, 236, 255, 0.5);
  border-radius: 15px;
}
.splite-border {
  border-bottom: 1px solid var(--color-5);
}
.text_out {
  font-weight: 800;
  font-size: 36px;
  line-height: 1.215;
}
</style>