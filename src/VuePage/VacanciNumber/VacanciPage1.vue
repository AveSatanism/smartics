<template>
  <div>
    <SiteHeader />
    <SiteNavigation />
    <div class="flex justify-center px-[30px]">
      <div class="py-[61px] max-w-[1160px] flex flex-col items-center">
        <div class="mb-[73px] self-start flex items-center site_color_4">
          <a href="Vacancies"><img src="@/assets/icon/BackArrow_icon.svg" width="28.83" height="15" alt="backArrow_icon"></a>
          <h2 class="ml-[16px]">стажёр по информационной безопасности</h2>
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
        <div class="vacanci_border bg-white flex flex-col gap-y-[30px] p-[40px]">
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
      </div>
    </div>
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteNavigation from '@/components/SiteNavigation.vue'
import PoliticsApply from '@/components/PoliticsApply.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    PoliticsApply,
    SiteFooter
    }
}
</script>
<style>
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