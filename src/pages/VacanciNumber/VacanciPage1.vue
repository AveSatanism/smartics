<template>
  <div>
    <div v-if="isPC" class="flex justify-center px-[30px]">
      <div class="py-[62px] max-w-[1160px] flex flex-col items-center">
        <div class="mb-[73px] w-full self-start flex justify-between items-center site_color_4">
          <div class="flex items-center">
            <router-link to="Vacancies"><img src="@/assets/icon/BackArrow_icon.svg" width="28.83" height="15" alt="backArrow_icon"></router-link>
            <h2 class="text-h2 ml-[16px]">стажёр по информационной безопасности</h2>
          </div>
          <UIButton variant="orange1" @click="showCommunicationFormDialog()">связаться с нами</UIButton> 
        </div>
        <div class="mb-[26px] text_button site_color_2 flex flex-wrap gap-[66.67px]">
          <div class="flex items-center gap-[11px]">
            <img src="@/assets/icon/Education_card_icon.svg" width="19" height="19" alt="education_icon">
            <p>Высшее образование</p>
          </div>
          <div class="flex items-center gap-[11px]">
            <img src="@/assets/icon/Experience_card_icon.svg" width="19.01" height="18.99" alt="experience_icon">
            <p>опыт 0-1 лет</p>
          </div>
          <div class="flex items-center gap-[11px]">
            <img src="@/assets/icon/Location_card_icon.svg" width="13" height="18.2" alt="location_icon">
            <p>Санкт-петербург</p>
          </div>
          <div class="flex items-center gap-[11px]">
            <img src="@/assets/icon/Employment_card_icon.svg" width="18" height="17" alt="employment_icon">
            <p>Полная занятость</p>
          </div>
        </div>
        <div class="mb-[62px] vacanci_border bg-white flex flex-col gap-y-[30px] p-[40px]">
          <div class="text_1 site_color_1">
            <p class="mb-[10px] text_4 site_color_2">Описание вакансии</p>
            <p>SMARTICS  — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.
            Эта вакансия подходит вам, если вы обучаетесь в вузе на направлении “Информационная безопасность” и готовы погрузиться в реальные задачи аналитика SOC.</p>
          </div>
          <div class="text_1 site_color_1">
            <p class="mb-[10px] text_4 site_color_2">Наши ожидания</p>
            <ul class="vacanci_list">
              <li><span>•</span> Образование в сфере информационной безопасности (от 3-4 курса обучения);</li>
              <li><span>•</span> Понимание принципов работы SIEM систем;</li>
              <li><span>•</span> Навык работы с Windows\Linux системами;</li>
              <li><span>•</span> Базовые знания сетевых технологий;</li>
              <li><span>•</span> Умение анализировать журналы регистрации событий СЗИ, журналы ОС, сетевого оборудования, СУБД, приложений и т.п.</li>
            </ul>
          </div>
          <div class="text_1 site_color_1">
            <p class="mb-[10px] text_4 site_color_2">Ваши задачи</p>
            <ul class="vacanci_list">
              <li><span>•</span> Участие в мониторинге и выявлении инцидентов ИБ;</li>
              <li><span>•</span> Участие в разработке правил корреляции/сценариев выявления инцидентов;</li>
              <li><span>•</span> Проведение инвентаризации инфраструктуры.</li>
            </ul>
          </div>
          <div class="text_1 site_color_1">
            <p class="mb-[10px] text_4 site_color_2">Будет вашим преимуществом</p>
            <ul class="vacanci_list">
              <li><span>•</span> Понимание принципов работы различных средств защиты информации (SIEM, FW, IDS/IPS, DLP, Antivirus и пр.);</li>
              <li><span>•</span> Наличие сертификатов или прохождение курсов по информационной безопасности.</li>
            </ul>
          </div>
          <div class="text_1 site_color_1">
            <p class="mb-[10px] text_4 site_color_2">Мы предлагаем</p>
            <ul class="vacanci_list">
              <li><span>•</span> Старт карьеры в коммерческом (внешнем) SOC: участие во множестве масштабных проектов, работа с разными СЗИ и расследование нестандартных инцидентов ИБ;</li>
              <li><span>•</span> Работа в удобном сменном графике (2 через 2): дневная смена -> ночная смена -> 2 выходных и т.д.;</li>
              <li><span>•</span> Заработная плата по результатам собеседования + премии по итогам работы;</li>
              <li><span>•</span> Профессиональное обучение и сертификация за счёт компании;</li>
            </ul>
          </div>
        </div>
        <ContantForm />
      </div>
    </div>
    <div v-if="!isPC" class="pt-[34px] pb-[58px] flex flex-col items-center">
      <div class="mb-[28.5px] flex items-center gap-x-[20px]">
        <p class="w-[270px] text_button site_color_4">стажёр по информационной безопасности</p>
        <router-link to="Vacancies"><img src="@/assets/icon/BackArrow_icon.svg" width="20" height="10" alt="backArrow_icon"></router-link>
      </div>
      <div class="mb-[50px] text_6 site_color_2 flex flex-wrap justify-center gap-[10px]">
        <div class="flex items-center gap-x-[5px]">
          <img src="@/assets/icon/Education_card_icon.svg" width="14" height="14" alt="education_icon">
          <p>Высшее образование</p>
        </div>
        <div class="flex items-center gap-x-[5px]">
          <img src="@/assets/icon/Experience_card_icon.svg" width="14" height="14" alt="experience_icon">
          <p>опыт 0-1 лет</p>
        </div>
        <div class="flex items-center gap-x-[5px]">
          <img src="@/assets/icon/Location_card_icon.svg" width="11.5" height="16" alt="location_icon">
          <p>Санкт-петербург</p>
        </div>
        <div class="flex items-center gap-x-[5px]">
          <img src="@/assets/icon/Employment_card_icon.svg" width="15" height="14" alt="employment_icon">
          <p>Полная занятость</p>
        </div>
      </div>
      <div class="mb-[30px] w-[315px] text_6 !normal-case !tracking-normal site_color_1">
        <p class="mb-[10px] text_button site_color_2">Описание вакансии</p>
        <p>SMARTICS  — крупная российская ИТ-компания с сильной экспертизой в области информационной безопасности. Наша команда активно растёт, и мы ищем начинающих специалистов, которые хотят развивать практику SOC/SIEM и расти в этом направлении.
        Эта вакансия подходит вам, если вы обучаетесь в вузе на направлении “Информационная безопасность” и готовы погрузиться в реальные задачи аналитика SOC.</p>
      </div>
      <div class="mb-[30px] w-[315px] text_6 !normal-case !tracking-normal site_color_1">
        <p class="mb-[10px] text_button site_color_2">Наши ожидания</p>
        <ul class="vacanci_list_mobile">
          <li><span>•</span> Образование в сфере информационной безопасности (от 3-4 курса обучения);</li>
          <li><span>•</span> Понимание принципов работы SIEM систем;</li>
          <li><span>•</span> Навык работы с Windows\Linux системами;</li>
          <li><span>•</span> Базовые знания сетевых технологий;</li>
          <li><span>•</span> Умение анализировать журналы регистрации событий СЗИ, журналы ОС, сетевого оборудования, СУБД, приложений и т.п.</li>
        </ul>
      </div>
      <div class="mb-[30px] w-[315px] text_6 !normal-case !tracking-normal site_color_1">
        <p class="mb-[10px] text_button site_color_2">Ваши задачи</p>
        <ul class="vacanci_list_mobile">
          <li><span>•</span> Участие в мониторинге и выявлении инцидентов ИБ;</li>
          <li><span>•</span> Участие в разработке правил корреляции/сценариев выявления инцидентов;</li>
          <li><span>•</span> Проведение инвентаризации инфраструктуры.</li>
        </ul>
      </div>
      <div class="mb-[30px] w-[315px] text_6 !normal-case !tracking-normal site_color_1">
        <p class="mb-[10px] text_button site_color_2">Будет вашим преимуществом</p>
        <ul class="vacanci_list_mobile">
          <li><span>•</span> Понимание принципов работы различных средств защиты информации (SIEM, FW, IDS/IPS, DLP, Antivirus и пр.);</li>
          <li><span>•</span> Наличие сертификатов или прохождение курсов по информационной безопасности.</li>
        </ul>
      </div>
      <div class="mb-[32px] w-[315px] text_6 !normal-case !tracking-normal site_color_1">
        <p class="mb-[10px] text_button site_color_2">Мы предлагаем</p>
        <ul class="vacanci_list_mobile">
          <li><span>•</span> Старт карьеры в коммерческом (внешнем) SOC: участие во множестве масштабных проектов, работа с разными СЗИ и расследование нестандартных инцидентов ИБ;</li>
          <li><span>•</span> Работа в удобном сменном графике (2 через 2): дневная смена -> ночная смена -> 2 выходных и т.д.;</li>
          <li><span>•</span> Заработная плата по результатам собеседования + премии по итогам работы;</li>
          <li><span>•</span> Профессиональное обучение и сертификация за счёт компании;</li>
        </ul>
      </div>
      <router-link to="ContactsMobile"><UIButton variant="orange1-mobile" @click="showCommunicationFormDialog()">связаться с нами</UIButton></router-link>
    </div>
  </div>
</template>
<script>
import ContantForm from '@/components/ContactForm.vue'
import CommunicationForm from '@/components/CommunicationForm.vue'
import UIButton from '@/components/UI/UIButton.vue'
import { createPromiseDialog } from "vue-promise-dialogs";
import { useIsPC } from '@/components/isPC&isMobile.js'

const CommunicationFormDialog = createPromiseDialog(CommunicationForm);

export default {
  components: {
    ContantForm,
    UIButton,
  },
  methods: {
    showCommunicationFormDialog(params) {
      CommunicationFormDialog(params);
    },
  },
  setup() {
    const isPC = useIsPC()
    return { isPC }
  },
}
</script>
<style>
.vacanci_list_mobile li{
  display: flex;
  gap: 5px
}
.vacanci_list {
  margin-left: 10px;
}
.vacanci_list li{
  display: flex;
  gap: 10px
}
.vacanci_border{
  border: 1px solid var(--color-3);
  filter: drop-shadow(0px 4px 4px var(--color-1-background));
  border-radius: 15px;
}
</style>